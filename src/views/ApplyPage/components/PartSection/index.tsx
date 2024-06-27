import { UseFormReturn } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';
import { sectionContainer, title } from 'views/ApplyPage/style.css';

import { PART_QUESTION } from './constants';

const PartSection = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch' | 'clearErrors' | 'setValue' | 'getValues'>;
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = formObject;
  const selectedPart: string = formObject.getValues('지원파트');

  return (
    <section className={sectionContainer}>
      <h2 className={title}>파트별 질문</h2>
      <SelectBox label="지원파트" options={SELECT_OPTIONS.지원파트} formObject={formObject} size="lg" required />
      {Object.keys(PART_QUESTION).includes(selectedPart) &&
        PART_QUESTION[selectedPart].map(({ question, maxCount, required }, id) => (
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
