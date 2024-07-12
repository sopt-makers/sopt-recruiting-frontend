import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@components/Button';
import { TFormValues } from '@constants/defaultValues';
import { DraftDialog } from 'views/dialogs';
import BigLoading from 'views/loadings/BigLoding';

import { getDraft, getQuestions, sendDraft } from './apis';
import ApplyCategory from './components/ApplyCategory';
import ApplyHeader from './components/ApplyHeader';
import ApplyInfo from './components/ApplyInfo';
import BottomSection from './components/BottomSection';
import CommonSection from './components/CommonSection';
import DefaultSection from './components/DefaultSection';
import PartSection from './components/PartSection';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useScrollToHash from './hooks/useScrollToHash';
import { buttonWrapper, content, formContainer, sectionContainer } from './style.css';
import { ApplyError, ApplyRequest, ApplyResponse, QuestionsRequest, QuestionsResponse } from './types';

const ApplyPage = () => {
  const [activeHash, setActiveHash] = useState('');
  useScrollToHash(); // scrollTo 카테고리

  const handleSetActiveHash = useCallback((hash: string) => {
    setActiveHash(hash);
  }, []);

  const dialog = useRef<HTMLDialogElement>(null);
  const { ref } = useIntersectionObserver(handleSetActiveHash);

  const { data: draftData, isLoading: draftIsLoading } = useQuery<
    AxiosResponse<ApplyResponse, null>,
    AxiosError<ApplyError, null>,
    AxiosResponse<ApplyResponse, null>,
    string[]
  >({
    queryKey: ['get-draft'],
    queryFn: getDraft,
  });

  const { data: questionsData, isLoading: questionsIsLoading } = useQuery<
    AxiosResponse<QuestionsResponse, QuestionsRequest>,
    AxiosError<ApplyError, QuestionsRequest>,
    AxiosResponse<QuestionsResponse, QuestionsRequest>,
    string[]
  >({
    queryKey: ['get-questions'],
    queryFn: () => getQuestions({ season: draftData?.data.applicant.season, group: draftData?.data.applicant.group }),
    enabled: !!draftData?.data.applicant.season && !!draftData.data.applicant.group,
  });

  const { mutate, isPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ApplyError, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: sendDraft,
    onSuccess: () => {
      dialog.current?.showModal();
    },
  });

  const { handleSubmit, ...formObject } = useForm();

  if (draftIsLoading || questionsIsLoading) return <BigLoading />;

  const applicantDraft = draftData?.data?.applicant;
  const commonQuestionsDraft = draftData?.data?.commonQuestions;
  const partQuestionsDraft = draftData?.data?.partQuestions;

  let selectedPart: string = formObject.getValues('지원파트');
  if (selectedPart === '기획') selectedPart = 'PM';
  const selectedPartId = questionsData?.data.questionTypes.find((type) => type.typeKr === selectedPart)?.id;
  const partQuestions = questionsData?.data.partQuestions.find(
    (part) => part.recruitingQuestionTypeId === selectedPartId,
  );
  const partQuestionIds = partQuestions?.questions.map((question) => question.id);
  const commonQuestionIds = questionsData?.data.commonQuestions.questions.map((question) => question.id);

  const handleDraftSubmit = () => {
    const mostRecentSeasonValue = formObject.getValues('이전 기수 활동 여부 (제명 포함)');
    const mostRecentSeason = mostRecentSeasonValue === '해당사항 없음' ? 0 : mostRecentSeasonValue;

    const leaveAbsenceValue = formObject.getValues('재학여부');
    const leaveAbsence = leaveAbsenceValue === '재학' ? true : false;

    const univYearValue = formObject.getValues('학년');
    const univYear =
      univYearValue === '1학년'
        ? 1
        : univYearValue === '2학년'
          ? 2
          : univYearValue === '3학년'
            ? 3
            : univYearValue === '4학년'
              ? 4
              : 5;

    const commonAnswers =
      commonQuestionIds?.map((id) => ({
        recruitingQuestionId: id,
        answer: formObject.getValues()[`공통${id}번`],
      })) ?? [];
    const partAnswers =
      partQuestionIds?.map((id) => ({
        recruitingQuestionId: id,
        answer: formObject.getValues()[`파트${id}번`],
      })) ?? [];

    const answers = JSON.stringify([...commonAnswers, ...partAnswers]);

    const formValues: ApplyRequest = {
      picture: formObject.getValues('사진')[0],
      part: formObject.getValues('지원파트'),
      address: formObject.getValues('거주지'),
      birthday: formObject.getValues('생년월일'),
      college: formObject.getValues('학교'),
      gender: formObject.getValues('성별'),
      knownPath: formObject.getValues('동아리를 알게 된 경로'),
      leaveAbsence,
      major: formObject.getValues('학과'),
      mostRecentSeason,
      univYear,
      nearestStation: formObject.getValues('지하철역'),
      answers,
      willAppjam: false,
    };

    mutate(formValues);
  };

  const handleApplySubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(123, data);
  };

  window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = true; // Included for legacy support, e.g. Chrome/Edge < 119
  });

  return (
    <>
      <DraftDialog ref={dialog} />
      <form onSubmit={handleSubmit(handleApplySubmit)} className={formContainer}>
        <ApplyHeader isLoading={isPending} onSaveDraft={handleDraftSubmit} />
        <ApplyInfo />
        <ApplyCategory activeHash={activeHash} onSetActiveHash={handleSetActiveHash} />
        <div className={sectionContainer}>
          <div
            id="default"
            className={content}
            ref={(el) => {
              if (el) ref.current[0] = el;
            }}>
            <DefaultSection applicantDraft={applicantDraft} formObject={formObject} />
          </div>
          <div
            id="common"
            className={content}
            ref={(el) => {
              if (el) ref.current[1] = el;
            }}>
            <CommonSection
              questions={questionsData?.data.commonQuestions.questions}
              commonQuestionsDraft={commonQuestionsDraft}
              formObject={formObject}
            />
          </div>
          <div
            id="partial"
            className={content}
            ref={(el) => {
              if (el) ref.current[2] = el;
            }}>
            <PartSection
              part={applicantDraft?.part}
              questions={questionsData?.data.partQuestions}
              partQuestionsDraft={partQuestionsDraft}
              formObject={formObject}
            />
          </div>
          <BottomSection knownPath={applicantDraft?.knownPath} formObject={formObject} />
          <div className={buttonWrapper}>
            <Button isLoading={isPending} onClick={handleDraftSubmit} buttonStyle="line">
              임시저장
            </Button>
            <Button isLoading={isPending} type="submit">
              제출하기
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ApplyPage;
