import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import useDate from '@hooks/useDate';
import useScrollToHash from '@hooks/useScrollToHash';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import ApplyCategory from 'views/ApplyPage/components/ApplyCategory';
import ApplyHeader from 'views/ApplyPage/components/ApplyHeader';
import ApplyInfo from 'views/ApplyPage/components/ApplyInfo';
import BottomSection from 'views/ApplyPage/components/BottomSection';
import CommonSection from 'views/ApplyPage/components/CommonSection';
import DefaultSection from 'views/ApplyPage/components/DefaultSection';
import PartSection from 'views/ApplyPage/components/PartSection';
import useGetQuestions from 'views/ApplyPage/hooks/useGetQuestions';
import { container, formContainer } from 'views/ApplyPage/style.css';
import PreventReviewDialog from 'views/dialogs/PreventReviewDialog';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';
import useGetDraft from 'views/SignedInPage/hooks/useGetDraft';

const ReviewPage = () => {
  const preventReviewDialog = useRef<HTMLDialogElement>(null);
  const sectionsRef = useRef<HTMLSelectElement[]>([]);

  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);
  const { draftData, draftIsLoading } = useGetDraft();

  const [isInView, setIsInView] = useState([true, false, false]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

  const isReview = true;
  const minIndex = isInView.findIndex((value) => value === true);

  useScrollToHash(); // scrollTo 카테고리

  const {
    applicant: applicantDraft,
    commonQuestions: commonQuestionsDraft,
    partQuestions: partQuestionsDraft,
  } = draftData?.data || {};

  const { NoMoreReview, isLoading, isMakers } = useDate();
  const { questionsData, questionsIsLoading } = useGetQuestions(applicantDraft);
  const { commonQuestions, partQuestions, questionTypes } = questionsData?.data || {};

  const methods = useForm({ mode: 'onBlur' });
  const { setValue } = methods;

  useEffect(() => {
    if (preventReviewDialog.current && !applicantDraft?.submit) {
      preventReviewDialog.current.showModal();
    }

    if (applicantDraft?.part) {
      setValue('part', applicantDraft?.part);
    }

    handleSaveRecruitingInfo({
      name: applicantDraft?.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantDraft, preventReviewDialog.current]);

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

  if (questionsIsLoading || isLoading || draftIsLoading) return <BigLoading />;
  if (NoMoreReview) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <>
      <PreventReviewDialog ref={preventReviewDialog} />
      <FormProvider {...methods}>
        <div className={container}>
          <ApplyHeader isReview={isReview} />
          <ApplyInfo isReview={isReview} />
          <ApplyCategory minIndex={minIndex} />
          <form id="apply-form" name="apply-form" className={formContainer}>
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
          </form>
        </div>
      </FormProvider>
    </>
  );
};

export default ReviewPage;
