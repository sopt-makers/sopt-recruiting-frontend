import { lazy, useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import useDate from '@hooks/useDate';
import useScrollToHash from '@hooks/useScrollToHash';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import ApplyCategory from 'views/ApplyPage/components/ApplyCategory';
import ApplyHeader from 'views/ApplyPage/components/ApplyHeader';
import ApplyInfo from 'views/ApplyPage/components/ApplyInfo';
import BottomSection from 'views/ApplyPage/components/BottomSection';
import CommonSection from 'views/ApplyPage/components/CommonSection';
import DefaultSection from 'views/ApplyPage/components/DefaultSection';
import PartSection from 'views/ApplyPage/components/PartSection';
import useGetDraft from 'views/ApplyPage/hooks/useGetDraft';
import useGetQuestions from 'views/ApplyPage/hooks/useGetQuestions';
import { container, formContainerVar } from 'views/ApplyPage/style.css';
import BigLoading from 'views/loadings/BigLoding';
import useDialog from '@hooks/useDialog';

const PreventReviewDialog = lazy(() =>
  import('views/dialogs').then(({ PreventReviewDialog }) => ({ default: PreventReviewDialog })),
);
const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const ReviewPage = () => {
  const { deviceType } = useDeviceType();
  const { ref: preventReviewDialogRef, handleShowDialog: handleShowPreventReviewDialog } = useDialog();
  const sectionsRef = useRef<HTMLSelectElement[]>([]);

  const { handleSaveRecruitingInfo } = useRecruitingInfo();
  const { draftData, draftIsLoading } = useGetDraft();

  const [isInView, setIsInView] = useState([true, false, false]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

  const isReview = true;
  const minIndex = isInView.findIndex((value) => value === true);

  useScrollToHash(); // scrollTo 카테고리

  const { applicant: applicantDraft } = draftData?.data || {};

  const { NoMoreReview, isLoading, isMakers } = useDate();
  const { questionsIsLoading } = useGetQuestions(applicantDraft);

  const methods = useForm({ mode: 'onBlur' });
  const { setValue } = methods;

  useEffect(() => {
    if (preventReviewDialogRef.current && !applicantDraft?.submit) {
      handleShowPreventReviewDialog();
    }

    if (applicantDraft?.part) {
      setValue('part', applicantDraft?.part);
    }

    handleSaveRecruitingInfo({
      name: applicantDraft?.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantDraft, preventReviewDialogRef.current]);

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
      <PreventReviewDialog ref={preventReviewDialogRef} />
      <FormProvider {...methods}>
        <div className={container}>
          <ApplyHeader isReview={isReview} />
          <ApplyInfo isReview={isReview} />
          <ApplyCategory isReview={isReview} minIndex={minIndex} />
          <form id="apply-form" name="apply-form" className={formContainerVar[deviceType]}>
            <DefaultSection isReview={isReview} refCallback={refCallback} />
            <CommonSection isReview={isReview} refCallback={refCallback} />
            <PartSection isReview={isReview} refCallback={refCallback} />
            <BottomSection isReview={isReview} knownPath={applicantDraft?.knownPath} />
          </form>
        </div>
      </FormProvider>
    </>
  );
};

export default ReviewPage;
