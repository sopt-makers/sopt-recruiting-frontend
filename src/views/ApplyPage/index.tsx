import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { DraftDialog, SubmitDialog } from 'views/dialogs';
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
  isComplete: boolean;
  isReview: boolean;
  onSetComplete: () => void;
  draftData?: { data: ApplyResponse };
}

const ApplyPage = ({ isComplete, isReview, onSetComplete, draftData }: ApplyPageProps) => {
  const draftDialog = useRef<HTMLDialogElement>(null);
  const submitDialog = useRef<HTMLDialogElement>(null);
  const sectionsRef = useRef<HTMLSelectElement[]>([]);

  const [isInView, setIsInView] = useState([true, false, false]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

  const navigate = useNavigate();
  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);
  const minIndex = isInView.findIndex((value) => value === true);

  useScrollToHash(); // scrollTo 카테고리

  const {
    applicant: applicantDraft,
    commonQuestions: commonQuestionsDraft,
    partQuestions: partQuestionsDraft,
  } = draftData?.data || {};
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
    handleSaveRecruitingInfo({
      name: applicantDraft?.name,
    });

    if (applicantDraft?.part) {
      setValue('part', applicantDraft?.part);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantDraft, handleSaveRecruitingInfo]);

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

  if (questionsIsLoading) return <BigLoading />;

  let selectedPart: string = getValues('part');
  if (selectedPart === '기획') selectedPart = 'PM';
  const selectedPartId = questionTypes?.find((type) => type.typeKr === selectedPart)?.id;
  const partQuestionsData = partQuestions?.find((part) => part.recruitingQuestionTypeId === selectedPartId);
  const partQuestionIds = partQuestionsData?.questions.map((question) => question.id);
  const commonQuestionIds = commonQuestions?.questions.map((question) => question.id);

  const handleSendData = (type: 'draft' | 'submit') => {
    const mostRecentSeason = mostRecentSeasonValue === '해당사항 없음' ? 0 : mostRecentSeasonValue;
    const leaveAbsence = leaveAbsenceValue === '재학' ? true : false;
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

    let answersValue = [];

    if (type === 'submit') {
      const commonAnswers =
        commonQuestionIds?.map((id) => ({
          recruitingQuestionId: id,
          answer: getValues()[`common${id}`],
        })) ?? [];
      const partAnswers =
        partQuestionIds?.map((id) => ({
          recruitingQuestionId: id,
          answer: getValues()[`part${id}`],
        })) ?? [];

      answersValue = [...commonAnswers, ...partAnswers];
    } else {
      answersValue = [...Object.entries(rest)].map(([question, answer]: [question: string, answer: string]) => {
        const recruitingQuestionId = question.replace(/[^0-9]/g, '');
        return {
          recruitingQuestionId,
          answer,
        };
      });
    }

    const answers = JSON.stringify(answersValue);

    const formValues: ApplyRequest = {
      picture: picture[0],
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

    type === 'draft' ? draftMutate(formValues) : submitMutate(formValues);
  };

  const handleApplySubmit = () => {
    submitDialog.current?.showModal();
  };

  if (!isComplete) {
    window.addEventListener('beforeunload', (e) => {
      !isComplete && e.preventDefault();
      e.returnValue = true; // Included for legacy support, e.g. Chrome/Edge < 119
    });
  }

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
