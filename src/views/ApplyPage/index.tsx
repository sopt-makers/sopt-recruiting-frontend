import { track } from '@amplitude/analytics-browser';
import { lazy, useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Footer from '@components/Layout/components/Footer';
import useCheckBrowser from '@hooks/useCheckBrowser';
import useDate from '@hooks/useDate';
import useScrollToHash from '@hooks/useScrollToHash';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import ApplyCategory from './components/ApplyCategory';
import ApplyHeader from './components/ApplyHeader';
import ApplyInfo from './components/ApplyInfo';
import BottomSection from './components/BottomSection';
import CommonSection from './components/CommonSection';
import DefaultSection from './components/DefaultSection';
import PartSection from './components/PartSection';
import { SELECT_OPTIONS } from './constant';
import useBeforeExitPageAlert from './hooks/useBeforeExitPageAlert';
import useGetDraft from './hooks/useGetDraft';
import useGetQuestions from './hooks/useGetQuestions';
import useMutateDraft from './hooks/useMutateDraft';
import useMutateSubmit from './hooks/useMutateSubmit';
import { buttonWrapper, container, formContainerVar } from './style.css';

import useDialog from '@hooks/useDialog';
import BigLoading from 'views/loadings/BigLoding';
import type { ApplyRequest } from './types';

const DraftDialog = lazy(() => import('views/dialogs').then(({ DraftDialog }) => ({ default: DraftDialog })));
const PreventApplyDialog = lazy(() =>
  import('views/dialogs').then(({ PreventApplyDialog }) => ({ default: PreventApplyDialog })),
);
const SubmitDialog = lazy(() => import('views/dialogs').then(({ SubmitDialog }) => ({ default: SubmitDialog })));
const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

interface ApplyPageProps {
  onSetComplete?: () => void;
}

const ApplyPage = ({ onSetComplete }: ApplyPageProps) => {
  // 반응형 페이지
  const { deviceType } = useDeviceType();
  useCheckBrowser(); // 크롬 브라우저 권장 알럿

  // 2. 모달 관련 ref
  const { ref: draftDialogRef, handleShowDialog: handleShowDraftDialog } = useDialog();
  const { ref: preventApplyDialogRef, handleShowDialog: handleShowPreventApplyDialog } = useDialog();
  const {
    ref: submitDialogRef,
    handleShowDialog: handleShowSubmitDialog,
    handleCloseDialog: handleCloseSubmitDialog,
  } = useDialog();

  // 3. category active 상태 관리
  useScrollToHash(); // scrollTo 카테고리
  const [isInView, setIsInView] = useState([true, false, false]);
  const minIndex = isInView.findIndex((value) => value === true);

  // 4. 데이터 불러오기
  const { draftData, draftIsLoading } = useGetDraft();
  const { applicant: applicantDraft } = draftData?.data || {};
  const { questionsData } = useGetQuestions(applicantDraft);
  const { commonQuestions, partQuestions } = questionsData?.data || {};

  // 5. 임시저장된 data 붙이기
  useEffect(() => {
    if (applicantDraft?.part) {
      setValue('part', applicantDraft?.part === 'IOS' ? 'iOS' : applicantDraft?.part);
    }
    if (applicantDraft?.pictureKey) {
      setValue('pictureKey', applicantDraft?.pictureKey);
    }

    // 공통질문 파일 세팅
    if (draftData?.data?.commonQuestions) {
      draftData.data.commonQuestions.forEach((q) => {
        if (q.answer.file || q.answer.fileName) {
          setValue(`file${q.id}`, {
            recruitingQuestionId: q.id,
            fileKey: q.answer.file, // fileKey로 사용
            fileName: q.answer.fileName,
          });
        }
      });
    }
    // 파트질문 파일 세팅
    if (draftData?.data?.partQuestions) {
      draftData.data.partQuestions.forEach((q) => {
        if (q.answer.file || q.answer.fileName) {
          setValue(`file${q.id}`, {
            recruitingQuestionId: q.id,
            fileKey: q.answer.file, // fileKey로 사용
            fileName: q.answer.fileName,
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantDraft, draftData]);

  // 6. 데이터 보내기
  const { draftMutate, draftIsPending } = useMutateDraft({ onSuccess: handleShowDraftDialog });
  const { submitMutate, submitIsPending } = useMutateSubmit({ onSuccess: onSetComplete });

  // 7. react hook form method 생성
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
    univYear: univYearValue,
    email,
    name,
    phone,
  } = getValues();

  // 8. intersection observer 연결
  const sectionsRef = useRef<HTMLSelectElement[]>([]);
  const [sectionsUpdated, setSectionsUpdated] = useState(false);

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

  // 9. 입력값 에러 관련 로직
  const navigate = useNavigate();

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.picture]);

  useEffect(() => {
    if (
      (Object.keys(errors).length === 2 && errors.attendance && errors.personalInformation) ||
      (Object.keys(errors).length === 1 && (errors.attendance || errors.personalInformation))
    )
      navigate('#check-necessary');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.attendance, errors.personalInformation]);

  useBeforeExitPageAlert();

  // 11. 지원 기간 아니면 에러 페이지 띄우기
  const { NoMoreApply, isMakers } = useDate();
  if (NoMoreApply) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  // 13. data 전송 로직
  const partQuestionsData = partQuestions?.find((q) => q.part === getValues('part'));
  const partQuestionIds = partQuestionsData?.questions.map((question) => question.id);
  const commonQuestionIds = commonQuestions?.questions.map((question) => question.id);

  const handleSendData = (type: 'draft' | 'submit') => {
    if (NoMoreApply) {
      handleShowPreventApplyDialog();

      return;
    }

    const mostRecentSeason = mostRecentSeasonValue === '해당사항 없음' ? 0 : mostRecentSeasonValue;
    const leaveAbsence =
      getValues('leaveAbsence') == undefined ? undefined : getValues('leaveAbsence') === '재학' ? false : true;
    const univYear =
      (isMakers ? SELECT_OPTIONS.univYearMakers : SELECT_OPTIONS.univYear).indexOf(univYearValue) + 1 || undefined;

    const commonAnswers =
      Array.isArray(commonQuestionIds) && commonQuestionIds.length > 0
        ? commonQuestionIds.map((id) => {
            const fileDeleted = getValues(`file${id}Deleted`);
            return {
              recruitingQuestionId: id,
              answer: getValues()[`common${id}`],
              fileKey: fileDeleted ? null : getValues(`file${id}`)?.fileKey,
              fileName: fileDeleted ? null : getValues(`file${id}`)?.fileName,
            };
          })
        : [];

    const partAnswers =
      Array.isArray(partQuestionIds) && partQuestionIds.length > 0
        ? partQuestionIds.map((id) => {
            const fileDeleted = getValues(`file${id}Deleted`);
            return {
              recruitingQuestionId: id,
              answer: getValues()[`part${id}`],
              fileKey: fileDeleted ? null : getValues(`file${id}`)?.fileKey,
              fileName: fileDeleted ? null : getValues(`file${id}`)?.fileName,
            };
          })
        : [];

    const answersValue = [...commonAnswers, ...partAnswers];

    const jsonValues: ApplyRequest = {
      pictureKey: getValues('pictureKey'),
      part: part === 'IOS' ? 'iOS' : part,
      address,
      birthday,
      college,
      gender,
      knownPath: knownPath ? knownPath : '',
      leaveAbsence,
      major,
      mostRecentSeason,
      univYear,
      nearestStation,
      answers: answersValue,
      willAppjam: false,
      // 최종 제출 시 필요한 필드들
      name: getValues('name'),
      email: getValues('email'),
      phone: getValues('phone'),
      group: getValues('group'),
      season: getValues('season'),
    };

    type === 'draft' ? draftMutate(jsonValues) : submitMutate(jsonValues);
  };

  const handleApplySubmit = () => {
    track('click-apply-submit');
    handleShowSubmitDialog();
  };

  if (draftIsLoading) return <BigLoading />;

  return (
    <>
      <DraftDialog ref={draftDialogRef} />
      <PreventApplyDialog ref={preventApplyDialogRef} />
      <SubmitDialog
        userInfo={{
          name,
          email,
          phone,
          part,
        }}
        dataIsPending={submitIsPending}
        ref={submitDialogRef}
        onSendData={() => {
          handleSendData('submit');
          handleCloseSubmitDialog();
        }}
      />
      <FormProvider {...methods}>
        <div className={container}>
          <ApplyHeader
            isLoading={draftIsPending || submitIsPending}
            onSaveDraft={() => handleSendData('draft')}
            onSubmitData={handleSubmit(handleApplySubmit)}
          />
          <ApplyInfo />
          <ApplyCategory minIndex={minIndex} />
          <form
            id="apply-form"
            name="apply-form"
            onSubmit={handleSubmit(handleApplySubmit)}
            className={formContainerVar[deviceType]}>
            <DefaultSection refCallback={refCallback} />
            <CommonSection refCallback={refCallback} />
            <PartSection refCallback={refCallback} />
            <BottomSection knownPath={applicantDraft?.knownPath} />
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
          </form>
        </div>
        <Footer />
      </FormProvider>
    </>
  );
};

export default ApplyPage;
