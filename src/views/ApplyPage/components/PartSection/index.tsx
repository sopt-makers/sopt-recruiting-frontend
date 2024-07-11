import { UseFormReturn } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';
import { Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';

const PartSection = ({
  part,
  questions,
  formObject,
}: {
  part?: string;
  questions?: {
    part: string;
    recruitingQuestionTypeId: number;
    questions: Questions[];
  }[];
  formObject: Pick<
    UseFormReturn,
    'register' | 'formState' | 'watch' | 'clearErrors' | 'setValue' | 'getValues' | 'watch' | 'trigger'
  >;
}) => {
  let selectedPart: string = formObject.getValues('지원파트');
  if (selectedPart === '기획') selectedPart = 'PM';
  const filteredQuestions = questions?.find((item) => item.part === selectedPart)?.questions;

  return (
    <section className={sectionContainer}>
      <h2 className={title}>파트별 질문</h2>
      <SelectBox
        defaultValue={part}
        label="지원파트"
        placeholder="지원하고 싶은 파트를 선택해주세요."
        options={SELECT_OPTIONS.지원파트}
        formObject={formObject}
        size="lg"
        required
      />
      {filteredQuestions?.map(({ question, charLimit, id }) => (
        <div key={question}>
          <Textarea label={`파트${id}번`} formObject={formObject} maxCount={charLimit} required>
            {question}
          </Textarea>
        </div>
      ))}
    </section>
  );
};

export default PartSection;
