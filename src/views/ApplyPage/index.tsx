import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@components/Button';
import { TFormValues, defaultValues } from '@constants/defaultValues';

import { sendDraft } from './apis';
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
import { ApplyError, ApplyRequest, ApplyResponse } from './types';

const ApplyPage = () => {
  const { handleSubmit, ...formObject } = useForm({
    defaultValues: defaultValues,
  });

  const [activeHash, setActiveHash] = useState('');
  useScrollToHash(); // scrollTo 카테고리

  const handleSetActiveHash = useCallback((hash: string) => {
    setActiveHash(hash);
  }, []);

  const { ref } = useIntersectionObserver(handleSetActiveHash);

  const { mutate, isPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ApplyError, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: sendDraft,
  });

  const handleApplySubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  const handleDraftSubmit = () => {
    const knownPathValue = formObject.getValues('동아리를 알게 된 경로');
    const knownPath = knownPathValue === '지원 경로를 선택해 주세요.' ? '' : knownPathValue;

    const genderValue = formObject.getValues('성별');
    const gender = genderValue === '성별을 선택해주세요' ? '' : genderValue;

    const mostRecentSeasonStrValue = formObject.getValues('이전 기수 활동 여부 (제명 포함)');
    const mostRecentSeasonStr =
      mostRecentSeasonStrValue === '가장 최근에 활동했던 기수를 선택해주세요.' ? '없음' : mostRecentSeasonStrValue;

    const partValue = formObject.getValues('지원파트');
    const part = partValue === '지원하고 싶은 파트를 선택해주세요' ? '' : partValue;

    const univYearValue = formObject.getValues('학년');
    const univYear = univYearValue === '학년을 선택해주세요' ? '' : univYearValue;

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

    const formValues = {
      picture: formObject.getValues('사진'),
      part,
      address: formObject.getValues('거주지'),
      birthday: formObject.getValues('생년월일'),
      college: formObject.getValues('학교'),
      gender,
      knownPath,
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
          <DefaultSection formObject={formObject} />
        </div>
        <div
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
        <BottomSection formObject={formObject} />
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
  );
};

export default ApplyPage;
