import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';

import { COMMON_QUESTION } from './constants';
import { container, title } from './style.css';

const CommonSection = ({ formObject }: { formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch'> }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formObject;
  return (
    <section className={container}>
      <h2 className={title}>공통 질문</h2>
      {COMMON_QUESTION.map((question) => (
        <div key={question}>
          <Textarea label="공통1번" register={register} watch={watch} errors={errors} maxCount={700}>
            {question}
          </Textarea>
        </div>
      ))}
    </section>
  );
};

export default CommonSection;
