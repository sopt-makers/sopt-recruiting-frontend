import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';
import { sectionContainer, title } from 'views/ApplyPage/style.css';

import { COMMON_QUESTION } from './constants';

const CommonSection = ({ formObject }: { formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch'> }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formObject;
  return (
    <section className={sectionContainer}>
      <h2 className={title}>공통 질문</h2>
      {COMMON_QUESTION.map(({ question, maxCount, required }, id) => (
        <div key={question}>
          <Textarea
            label={`공통${id}번`}
            register={register}
            watch={watch}
            errors={errors}
            maxCount={maxCount}
            required={required}>
            {question}
          </Textarea>
        </div>
      ))}
    </section>
  );
};

export default CommonSection;
