import { useFormContext } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { Answers, Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';
import FileInput from '../FileInput';
import LinkInput from '../LinkInput';

interface PartSectionProps {
  isReview: boolean;
  refCallback: (elem: HTMLSelectElement) => void;
  part?: string;
  questions?: {
    part: string;
    recruitingQuestionTypeId: number;
    questions: Questions[];
  }[];
  partQuestionsDraft?: Answers[];
  questionTypes?: { id: number; type: string; typeKr: string; typeLegacy: null }[];
}

const PartSection = ({
  isReview,
  refCallback,
  part,
  questions,
  partQuestionsDraft,
  questionTypes,
}: PartSectionProps) => {
  const { getValues } = useFormContext();

  const partOptions = questionTypes?.sort((a, b) => a.id - b.id).map(({ typeKr }) => typeKr);

  const selectedPart: string = getValues('part');
  const filteredQuestions = questions?.find((item) => item.part === selectedPart)?.questions;
  const partQuestionsById = partQuestionsDraft?.reduce(
    (acc, draft) => {
      acc ? (acc[draft.id] = draft) : undefined;
      return acc;
    },
    {} as { [key: number]: Answers } | undefined,
  );

  return (
    <section ref={refCallback} id="partial" className={sectionContainer}>
      <h2 className={title}>파트별 질문</h2>
      <SelectBox
        defaultValue={part}
        label="지원파트"
        name="part"
        placeholder="지원하고 싶은 파트를 선택해주세요."
        options={partOptions || []}
        size="lg"
        required
        disabled={isReview}
      />
      {filteredQuestions?.map(({ value, charLimit, id, urls, isFile }) => {
        const draftItem = partQuestionsById?.[id];
        const defaultValue = draftItem ? draftItem.answer.answer : '';
        const defaultFile = { id, file: draftItem?.answer.file, fileName: draftItem?.answer.fileName };

        return (
          <div key={value}>
            <Textarea
              name={`part${id}`}
              defaultValue={defaultValue}
              maxCount={charLimit}
              extraInput={
                isFile ? (
                  <FileInput id={id} isReview={isReview} defaultFile={defaultFile} />
                ) : urls ? (
                  <LinkInput urls={urls} />
                ) : null
              }
              required
              disabled={isReview}>
              {value}
            </Textarea>
          </div>
        );
      })}
    </section>
  );
};

export default PartSection;
