import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';

import { PART_QUESTION } from './constants';
import { container, title } from './style.css';

const PartSection = ({ formObject }: { formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch'> }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formObject;
  return (
    <section className={container}>
      <h2 className={title}>파트별 질문</h2>
      {PART_QUESTION.map(({ question, maxCount, required }, id) => (
        <div key={question}>
          <Textarea
            label={`파트${id}번`}
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

export default PartSection;
