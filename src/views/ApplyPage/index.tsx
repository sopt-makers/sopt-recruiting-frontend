import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@components/Button';
import { TFormValues, defaultValues } from '@constants/defaultValues';

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

  const handleApplySubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  const handleDraftSubmit = () => {
    console.log(formObject.getValues());
  };

  return (
    <form onSubmit={handleSubmit(handleApplySubmit)} className={formContainer}>
      <ApplyHeader onSaveDraft={handleDraftSubmit} />
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
          <Button onClick={handleDraftSubmit} buttonStyle="line">
            임시저장
          </Button>
          <Button type="submit">제출하기</Button>
        </div>
      </div>
    </form>
  );
};

export default ApplyPage;
