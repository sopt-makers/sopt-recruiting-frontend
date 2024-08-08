import { track } from '@amplitude/analytics-browser';
import { DevTool } from '@hookform/devtools';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import useCheckBrowser from '@hooks/useCheckBrowser';
import useDate from '@hooks/useDate';
import useScrollToHash from '@hooks/useScrollToHash';
import { DraftDialog, SubmitDialog } from 'views/dialogs';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import ApplyCategory from './components/ApplyCategory';
import ApplyHeader from './components/ApplyHeader';
import ApplyInfo from './components/ApplyInfo';
import BottomSection from './components/BottomSection';
import CommonSection from './components/CommonSection';
import DefaultSection from './components/DefaultSection';
import PartSection from './components/PartSection';
import { SELECT_OPTIONS } from './constant';
import useGetDraft from './hooks/useGetDraft';
import useGetQuestions from './hooks/useGetQuestions';
import useMutateDraft from './hooks/useMutateDraft';
import useMutateSubmit from './hooks/useMutateSubmit';
import { buttonWrapper, container, formContainer } from './style.css';

import type { ApplyRequest } from './types';

interface ApplyPageProps {
  onSetComplete?: () => void;
}

const ApplyPage = ({ onSetComplete }: ApplyPageProps) => {
  useCheckBrowser(); // 크롬 브라우저 권장 알럿

  const draftDialog = useRef<HTMLDialogElement>(null);
  const submitDialog = useRef<HTMLDialogElement>(null);
  const sectionsRef = useRef<HTMLSelectElement[]>([]);

  const [isInView, setIsInView] = useState([true, false, false]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

  const navigate = useNavigate();

  const isReview = false;
  const minIndex = isInView.findIndex((value) => value === true);

  useScrollToHash(); // scrollTo 카테고리

  const { NoMoreApply, isLoading, isMakers } = useDate();
  const { draftData, draftIsLoading } = useGetDraft();
  const {
    applicant: applicantDraft,
    commonQuestions: commonQuestionsDraft,
    partQuestions: partQuestionsDraft,
  } = draftData?.data || {};

  const { questionsData, questionsIsLoading } = useGetQuestions(applicantDraft);
  const { commonQuestions, partQuestions, questionTypes } = questionsData?.data || {};

  const { draftMutate, draftIsPending } = useMutateDraft({ onSuccess: () => draftDialog.current?.showModal() });
  const { submitMutate, submitIsPending } = useMutateSubmit({ onSuccess: onSetComplete });

  const methods = useForm({ mode: 'onBlur' });
  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    clearErrors,
  } = methods;

  const {
    address,
    birthday,
    college,
    gender,
    knownPath,
    major,
    mostRecentSeason: mostRecentSeasonValue,
    nearestStation,
    part,
    picture,
    univYear: univYearValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    attendance,
    email,
    name,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    personalInformation,
    phone,
    ...rest
  } = getValues();

  useEffect(() => {
    if (applicantDraft?.part) {
      setValue('part', applicantDraft?.part);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantDraft]);

  const refCallback = useCallback((element: HTMLSelectElement) => {
    if (element) {
      sectionsRef.current.push(element);

      if (sectionsRef.current.length === 3) {
        setSectionsUpdated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!sectionsUpdated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('id');
          const sectionIndex = ['default', 'common', 'partial'].indexOf(sectionId!);

          setIsInView((prev) => {
            const updatedState = [...prev];
            updatedState[sectionIndex] = entry.isIntersecting;
            return updatedState;
          });
        });
      },
      { root: null, rootMargin: '-220px' },
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, [sectionsUpdated]);

  useEffect(() => {
    if (errors.picture) {
      navigate('#default');

      return;
    }

    if (Object.keys(errors).some((key) => key.startsWith('part'))) {
      clearErrors('attendance');
      clearErrors('personalInformation');
      clearErrors('knownPath');

      return;
    }

    if (errors.attendance || errors.personalInformation) {
      if (Object.keys(errors).length > 2) return;
      navigate('#check-necessary');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.picture, errors.attendance, errors.personalInformation]);

  useEffect(() => {
    if (isReview) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // Included for legacy support, e.g. Chrome/Edeg < 119;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isReview]);

  if (questionsIsLoading || isLoading || draftIsLoading) return <BigLoading />;
  if (NoMoreApply) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  const selectedPartId = questionTypes?.find((type) => type.typeKr === getValues('part'))?.id;
  const partQuestionsData = partQuestions?.find((part) => part.recruitingQuestionTypeId === selectedPartId);
  const partQuestionIds = partQuestionsData?.questions.map((question) => question.id);
  const commonQuestionIds = commonQuestions?.questions.map((question) => question.id);

  const handleSendData = (type: 'draft' | 'submit') => {
    const mostRecentSeason = mostRecentSeasonValue === '해당사항 없음' ? 0 : mostRecentSeasonValue;
    const leaveAbsence =
      getValues('leaveAbsence') == undefined ? undefined : getValues('leaveAbsence') === '재학' ? false : true;
    const univYear =
      (isMakers ? SELECT_OPTIONS.univYearMakers : SELECT_OPTIONS.univYear).indexOf(univYearValue) + 1 || undefined;

    const fileValues: { file: string; fileName: string; recruitingQuestionId: number }[] = Object.values(
      getValues(),
    ).filter((value) => typeof value === 'object' && value !== null);

    let answersValue: { recruitingQuestionId: number; answer: string; file?: string; fileName?: string }[] = [];

    if (type === 'submit') {
      const commonAnswers =
        commonQuestionIds?.map((id) => {
          const fileObject = fileValues?.find((obj) => obj.recruitingQuestionId === id);
          return {
            recruitingQuestionId: id,
            answer: getValues()[`common${id}`],
            file: fileObject ? fileObject.file : undefined,
            fileName: fileObject ? fileObject.fileName : undefined,
          };
        }) ?? [];

      const partAnswers =
        partQuestionIds?.map((id) => {
          const fileObject = fileValues?.find((obj) => obj.recruitingQuestionId === id);
          return {
            recruitingQuestionId: id,
            answer: getValues()[`part${id}`],
            file: fileObject ? fileObject.file : undefined,
            fileName: fileObject ? fileObject.fileName : undefined,
          };
        }) ?? [];

      answersValue = [...commonAnswers, ...partAnswers];
    } else {
      answersValue = [...Object.entries(rest)]
        .filter(([question]) => !question.startsWith('file'))
        .map(([question, answer]: [question: string, answer: string]) => {
          const recruitingQuestionId = Number(question.replace(/[^0-9]/g, ''));
          const fileObject = fileValues?.find((obj) => obj.recruitingQuestionId === recruitingQuestionId);
          return {
            recruitingQuestionId,
            answer,
            file: fileObject ? fileObject.file : undefined,
            fileName: fileObject ? fileObject.fileName : undefined,
          };
        });
    }

    const answers = JSON.stringify(answersValue);
    const formValues: ApplyRequest = {
      picture,
      pictureUrl: errors.picture ? undefined : applicantDraft?.pic,
      part,
      address,
      birthday,
      college,
      gender,
      knownPath,
      leaveAbsence,
      major,
      mostRecentSeason,
      univYear,
      nearestStation,
      answers,
      willAppjam: false,
    };

    type === 'draft' ? track('click-apply-draft') : track('click-apply-confirm_submit');
    type === 'draft' ? draftMutate(formValues) : submitMutate(formValues);
  };

  const handleApplySubmit = () => {
    track('click-apply-submit');
    submitDialog.current?.showModal();
  };

  return (
    <FormProvider {...methods}>
      <DraftDialog ref={draftDialog} />
      <SubmitDialog
        userInfo={{
          name,
          email,
          phone,
          part,
        }}
        dataIsPending={submitIsPending}
        ref={submitDialog}
        onSendData={() => {
          handleSendData('submit');
          submitDialog.current?.close();
        }}
      />
      <div className={container}>
        <ApplyHeader
          isReview={isReview}
          isLoading={draftIsPending || submitIsPending}
          onSaveDraft={() => handleSendData('draft')}
          onSubmitData={handleSubmit(handleApplySubmit)}
        />
        <ApplyInfo isReview={isReview} />
        <ApplyCategory minIndex={minIndex} />
        <form id="apply-form" name="apply-form" onSubmit={handleSubmit(handleApplySubmit)} className={formContainer}>
          <DefaultSection
            isMakers={isMakers}
            isReview={isReview}
            refCallback={refCallback}
            applicantDraft={applicantDraft}
          />
          <CommonSection
            isReview={isReview}
            refCallback={refCallback}
            questions={commonQuestions?.questions}
            commonQuestionsDraft={commonQuestionsDraft}
          />
          <PartSection
            isReview={isReview}
            refCallback={refCallback}
            part={applicantDraft?.part}
            questions={partQuestions}
            partQuestionsDraft={partQuestionsDraft}
            questionTypes={questionTypes}
          />
          <BottomSection isReview={isReview} knownPath={applicantDraft?.knownPath} />
          {!isReview && (
            <div className={buttonWrapper}>
              <Button
                isLoading={draftIsPending || submitIsPending}
                onClick={() => handleSendData('draft')}
                buttonStyle="line">
                임시저장
              </Button>
              <Button isLoading={draftIsPending || submitIsPending} type="submit">
                제출하기
              </Button>
            </div>
          )}
        </form>
      </div>
    </FormProvider>
  );
};

export default ApplyPage;
