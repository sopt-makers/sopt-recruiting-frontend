import { useForm, SubmitHandler } from 'react-hook-form';

import Title from '@components/Title';
import { TFormValues, defaultValues } from '@constants/defaultValues';

import ApplyCategory from './components/ApplyCategory';
import ApplyHeader from './components/ApplyHeader';
import ApplyInfo from './components/ApplyInfo';
import useScrollToHash from './hooks/useScrollToHash';
import { container } from './style.css';

const ApplyPage = () => {
  const { handleSubmit, ...formObject } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data);
  useScrollToHash(); // scrollTo 카테고리

  return (
    <>
      <ApplyHeader />
      <ApplyInfo />
      <ApplyCategory />
      <form onSubmit={handleSubmit(onSubmit)} className={container}>
        <div id="default">
          <Title>먀먀먀1</Title>
        </div>
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
        <div id="common">
          <Title>먀먀먀2</Title>
        </div>
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
        <div id="partial">
          <Title>먀먀먀3</Title>
        </div>
        <Title>먀먀먀</Title>
        <Title>먀먀먀</Title>
        <Title>먀먀먀</Title>
        <input type="submit" value="제출버튼!" style={{ backgroundColor: 'green' }} />
      </form>
    </>
  );
};

export default ApplyPage;
