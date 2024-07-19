import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import useDate from '@hooks/useDate';
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
import useGetQuestions from './hooks/useGetQuestions';
import useMutateDraft from './hooks/useMutateDraft';
import useMutateSubmit from './hooks/useMutateSubmit';
import useScrollToHash from './hooks/useScrollToHash';
import { buttonWrapper, formContainer, sectionContainer } from './style.css';

import type { ApplyRequest, ApplyResponse } from './types';

interface ApplyPageProps {
  isReview: boolean;
  onSetComplete: () => void;
  draftData?: { data: ApplyResponse };
}

const ApplyPage = ({ isReview, onSetComplete, draftData }: ApplyPageProps) => {
  const draftDialog = useRef<HTMLDialogElement>(null);
  const submitDialog = useRef<HTMLDialogElement>(null);
  const sectionsRef = useRef<HTMLSelectElement[]>([]);

  const [isInView, setIsInView] = useState([true, false, false]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

  const navigate = useNavigate();

  const minIndex = isInView.findIndex((value) => value === true);

  useScrollToHash(); // scrollTo 카테고리

  const {
    applicant: applicantDraft,
    commonQuestions: commonQuestionsDraft,
    partQuestions: partQuestionsDraft,
  } = draftData?.data || {};

  const { NoMoreApply, isLoading } = useDate();
  const { questionsData, questionsIsLoading } = useGetQuestions(applicantDraft);
  const { commonQuestions, partQuestions, questionTypes } = questionsData?.data || {};

  const { draftMutate, draftIsPending } = useMutateDraft({ onSuccess: () => draftDialog.current?.showModal() });
  const { submitMutate, submitIsPending } = useMutateSubmit({ onSuccess: onSetComplete });

  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const {
    getValues,
    setValue,
    formState: { errors },
    clearErrors,
  } = formObject;

  const {
    address,
    birthday,
    college,
    gender,
    knownPath,
    leaveAbsence: leaveAbsenceValue,
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

  const refCallback = useCallback(
    (element: HTMLSelectElement) => {
      if (element) {
        sectionsRef.current.push(element);

        if (sectionsRef.current.length === 3) {
          setSectionsUpdated(true);
        }
      }
    },
    [sectionsRef],
  );

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

  if (questionsIsLoading || isLoading) return <BigLoading />;

  if (!isReview && NoMoreApply) return <NoMore content="모집 기간이 아니에요" />;

  let selectedPart: string = getValues('part');
  if (selectedPart === '기획') selectedPart = 'PM';
  const selectedPartId = questionTypes?.find((type) => type.typeKr === selectedPart)?.id;
  const partQuestionsData = partQuestions?.find((part) => part.recruitingQuestionTypeId === selectedPartId);
  const partQuestionIds = partQuestionsData?.questions.map((question) => question.id);
  const commonQuestionIds = commonQuestions?.questions.map((question) => question.id);
  const handleSendData = (type: 'draft' | 'submit') => {
    const mostRecentSeason = mostRecentSeasonValue === '해당사항 없음' ? 0 : mostRecentSeasonValue;
    const leaveAbsence =
      leaveAbsenceValue === '재학' ? false : leaveAbsenceValue === '휴학 ‧ 수료 ‧ 유예 ‧ 졸업' ? true : undefined;
    const univYear =
      univYearValue === '1학년'
        ? 1
        : univYearValue === '2학년'
          ? 2
          : univYearValue === '3학년'
            ? 3
            : univYearValue === '4학년'
              ? 4
              : univYearValue === '수료 ‧ 유예 ‧ 졸업'
                ? 5
                : undefined;

    const fileValues: { file: string; fileName: string; recruitingQuestionId: number }[] = [];

    for (const key in getValues()) {
      if (key.startsWith('file') && getValues()[key] != undefined) {
        fileValues.push(getValues()[key]);
      }
    }

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
          const fileObject = fileValues?.find(({ recruitingQuestionId }) => recruitingQuestionId === id);
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
          const fileObject =
            fileValues.length > 0
              ? fileValues.find(({ recruitingQuestionId }) => recruitingQuestionId === recruitingQuestionId)
              : undefined;
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
      picture: picture?.[0],
      pictureUrl: applicantDraft?.pic,
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

    for (const key in getValues()) {
      if (key.startsWith('file')) {
        formValues[key] = getValues()[key];
      }
    }

    type === 'draft' ? draftMutate(formValues) : submitMutate(formValues);
  };

  const handleApplySubmit = () => {
    submitDialog.current?.showModal();
  };

  return (
    <>
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
      <form onSubmit={handleSubmit(handleApplySubmit)} className={formContainer}>
        <ApplyHeader
          isReview={isReview}
          isLoading={draftIsPending || submitIsPending}
          onSaveDraft={() => handleSendData('draft')}
        />
        <ApplyInfo isReview={isReview} />
        <ApplyCategory minIndex={minIndex} />
        <div className={sectionContainer}>
          <DefaultSection
            isReview={isReview}
            refCallback={refCallback}
            applicantDraft={applicantDraft}
            formObject={formObject}
          />
          <CommonSection
            isReview={isReview}
            refCallback={refCallback}
            questions={commonQuestions?.questions}
            commonQuestionsDraft={commonQuestionsDraft}
            formObject={formObject}
          />
          <PartSection
            isReview={isReview}
            refCallback={refCallback}
            part={applicantDraft?.part}
            questions={partQuestions}
            partQuestionsDraft={partQuestionsDraft}
            formObject={formObject}
          />
          <BottomSection isReview={isReview} knownPath={applicantDraft?.knownPath} formObject={formObject} />
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
        </div>
      </form>
    </>
  );
};

export default ApplyPage;
