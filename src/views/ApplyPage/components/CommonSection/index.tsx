import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';
import { Answers, Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';
import FileInput from '../FileInput';
import LinkInput from '../LinkInput';

interface CommonSectionProps {
  isReview: boolean;
  refCallback: (elem: HTMLSelectElement) => void;
  questions?: Questions[];
  commonQuestionsDraft?: Answers[];
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch' | 'clearErrors' | 'trigger' | 'setValue'>;
}

const CommonSection = ({ isReview, refCallback, questions, commonQuestionsDraft, formObject }: CommonSectionProps) => {
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

        return (
          <div key={value}>
            <Textarea
              name={`common${id}`}
              defaultValue={defaultValue}
              formObject={formObject}
              maxCount={charLimit}
              extraInput={
                isFile ? (
                  <FileInput id={id} isReview={isReview} formObject={formObject} />
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

export default CommonSection;
