import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Title from '@components/Title';
import { TFormValues, defaultValues } from '@constants/defaultValues';

import ApplyCategory from './components/ApplyCategory';
import ApplyHeader from './components/ApplyHeader';
import ApplyInfo from './components/ApplyInfo';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useScrollToHash from './hooks/useScrollToHash';
import { container, content } from './style.css';

const ApplyPage = () => {
  const { handleSubmit, ...formObject } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  const [activeHash, setActiveHash] = useState('');
  const { ref } = useIntersectionObserver(setActiveHash);

  useScrollToHash(); // scrollTo 카테고리

  return (
    <>
      <ApplyHeader />
      <ApplyInfo />
      <ApplyCategory activeHash={activeHash} setActiveHash={setActiveHash} />
      <form onSubmit={handleSubmit(onSubmit)} className={container}>
        <div
          id="default"
          className={content}
          ref={(el) => {
            if (el) ref.current[0] = el;
          }}>
          <Title>먀먀먀1</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
        </div>

        <div
          id="common"
          className={content}
          ref={(el) => {
            if (el) ref.current[1] = el;
          }}>
          <Title>먀먀먀2</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
        </div>

        <div
          id="partial"
          className={content}
          ref={(el) => {
            if (el) ref.current[2] = el;
          }}>
          <Title>먀먀먀3</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
          <Title>먀먀먀</Title>
        </div>

        <input type="submit" value="제출버튼!" style={{ backgroundColor: 'green' }} />
      </form>
    </>
  );
};

export default ApplyPage;
