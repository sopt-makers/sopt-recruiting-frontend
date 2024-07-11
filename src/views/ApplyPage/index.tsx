import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@components/Button';
import { TFormValues } from '@constants/defaultValues';
import { DraftDialog } from 'views/dialogs';
import BigLoading from 'views/loadings/BigLoding';

import { getDraft, sendDraft } from './apis';
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
import { ApplyError, ApplyRequest, ApplyResponse, FormValues } from './types';

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

  if (draftIsLoading) return <BigLoading />;

  const applicantDraft = draftData?.data?.applicant;
  const commonQuestionsDraft = draftData?.data?.commonQuestions;
  const partQuestionsDraft = draftData?.data?.partQuestions;

  const handleApplySubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(123, data);
  };

  const handleDraftSubmit = () => {
    const mostRecentSeasonStrValue = formObject.getValues('이전 기수 활동 여부 (제명 포함)');
    const mostRecentSeasonStr = mostRecentSeasonStrValue === '해당사항 없음' ? '없음' : mostRecentSeasonStrValue;

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

    const answers = [
      {
        recruitingQuestionId: 1,
        answer: formObject.getValues('공통0번'),
      },
      {
        recruitingQuestionId: 2,
        answer: formObject.getValues('공통1번'),
      },
      {
        recruitingQuestionId: 3,
        answer: formObject.getValues('공통2번'),
      },
      {
        recruitingQuestionId: 4,
        answer: formObject.getValues('공통3번'),
      },
    ];

    const formValues: FormValues = {
      picture: formObject.getValues('사진')[0],
      part: formObject.getValues('지원파트'),
      address: formObject.getValues('거주지'),
      birthday: formObject.getValues('생년월일'),
      college: formObject.getValues('학교'),
      gender: formObject.getValues('성별'),
      knownPath: formObject.getValues('동아리를 알게 된 경로'),
      leaveAbsence: false,
      major: formObject.getValues('학과'),
      mostRecentSeasonStr,
      univYear,
      nearestStation: formObject.getValues('지하철역'),
      answers,
      willAppjam: false,
    };

    mutate(formValues);
  };

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
          {/* <div
          id="common"
          className={content}
          ref={(el) => {
            if (el) ref.current[1] = el;
          }}>
          <CommonSection formObject={formObject} />
        </div>
        <div
          id="partial"
          className={content}
          ref={(el) => {
            if (el) ref.current[2] = el;
          }}>
          <PartSection formObject={formObject} />
        </div>
        <BottomSection formObject={formObject} /> */}
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
