import Textarea from '@components/Textarea';
import { Answers, Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';
import FileInput from '../FileInput';
import Info from '../Info';
import LinkInput from '../LinkInput';

interface CommonSectionProps {
  isReview: boolean;
  refCallback: (elem: HTMLSelectElement) => void;
  questions?: Questions[];
  commonQuestionsDraft?: Answers[];
}

const CommonSection = ({ isReview, refCallback, questions, commonQuestionsDraft }: CommonSectionProps) => {
  const commonQuestionsById = commonQuestionsDraft?.reduce(
    (acc, draft) => {
      acc ? (acc[draft.id] = draft) : undefined;
      return acc;
    },
    {} as { [key: number]: Answers } | undefined,
  );

  return (
    <section ref={refCallback} id="common" className={sectionContainer}>
      <h2 className={title}>공통 질문</h2>
      {questions?.map(({ urls, value, id, charLimit, isFile }) => {
        const draftItem = commonQuestionsById?.[id];
        const defaultValue = draftItem ? draftItem.answer.answer : '';
        const defaultFile = { id, file: draftItem?.answer.file, fileName: draftItem?.answer.fileName };

        return (
          <div key={value}>
            {charLimit == null && <Info value={value} />}
            {charLimit != null && (
              <Textarea
                name={`common${id}`}
                defaultValue={defaultValue}
                maxCount={charLimit}
                placeholder={
                  isFile
                    ? '링크로 제출할 경우, 이곳에 작성해주세요. (파일로 제출한 경우에는 ‘파일 제출’이라고 기재 후 제출해주세요.)'
                    : ''
                }
                extraInput={
                  isFile ? (
                    <FileInput section="common" id={id} isReview={isReview} defaultFile={defaultFile} />
                  ) : urls ? (
                    <LinkInput urls={urls} />
                  ) : null
                }
                required
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

export default CommonSection;
