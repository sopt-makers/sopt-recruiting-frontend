import { UseFormReturn } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';

import { PART_QUESTION } from './constants';
import { sectionContainer, title } from './style.css';
import FileInput from '../FileInput';
import LinkInput from '../LinkInput';

const PartSection = ({
  formObject,
}: {
  formObject: Pick<
    UseFormReturn,
    'register' | 'formState' | 'watch' | 'clearErrors' | 'setValue' | 'getValues' | 'watch' | 'trigger'
  >;
}) => {
  const selectedPart: string = formObject.getValues('지원파트');

  return (
    <section className={sectionContainer}>
      <h2 className={title}>파트별 질문</h2>
      <SelectBox
        label="지원파트"
        placeholder="지원하고 싶은 파트를 선택해주세요."
        options={SELECT_OPTIONS.지원파트}
        formObject={formObject}
        size="lg"
        required
      />
      {Object.keys(PART_QUESTION).includes(selectedPart) &&
        PART_QUESTION[selectedPart].map(({ question, maxCount, required, extraInput }, id) => (
          <div key={question}>
            <Textarea
              label={`파트${id}번`}
              formObject={formObject}
              maxCount={maxCount}
              required={required}
              extraInput={extraInput === 'link' ? <LinkInput /> : extraInput === 'file' ? <FileInput /> : null}>
              {question}
            </Textarea>
          </div>
        ))}
    </section>
  );
};

export default PartSection;
