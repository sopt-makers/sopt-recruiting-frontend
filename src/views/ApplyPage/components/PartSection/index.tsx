import { useFormContext } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { Answers, Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';
import FileInput from '../FileInput';
import Info from '../Info';
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
      {filteredQuestions?.map(({ value, charLimit, id, urls, isFile, placeholder, optional }) => {
        const draftItem = partQuestionsById?.[id];
        const defaultValue = draftItem ? draftItem.answer.answer : '';
        const defaultFile = { id, file: draftItem?.answer.file, fileName: draftItem?.answer.fileName };

        return (
          <div key={value}>
            {charLimit == null && <Info value={value} />}
            {charLimit != null && (
              <Textarea
                name={`part${id}`}
                defaultValue={defaultValue}
                maxCount={charLimit}
                placeholder={
                  placeholder ||
                  (isFile
                    ? '링크로 제출할 경우, 이곳에 작성해주세요. (파일로 제출한 경우에는 ‘파일 제출’이라고 기재 후 제출해주세요.)'
                    : '')
                }
                extraInput={
                  isFile ? (
                    <FileInput section="part" id={id} isReview={isReview} defaultFile={defaultFile} />
                  ) : urls ? (
                    <LinkInput urls={urls} />
                  ) : null
                }
                required={!optional}
                disabled={isReview}>
                {value}
              </Textarea>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default PartSection;
