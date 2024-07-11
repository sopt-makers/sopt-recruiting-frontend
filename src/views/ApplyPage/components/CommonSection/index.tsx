import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';
import { Questions } from 'views/ApplyPage/types';

import { sectionContainer, title } from './style.css';

const CommonSection = ({
  questions,
  formObject,
}: {
  questions?: Questions[];
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch' | 'clearErrors' | 'trigger'>;
}) => {
  return (
    <section className={sectionContainer}>
      <h2 className={title}>공통 질문</h2>
      {questions?.map(({ question, id, charLimit }) => (
        <div key={question}>
          <Textarea label={`공통${id}번`} formObject={formObject} maxCount={charLimit} required>
            {question}
          </Textarea>
        </div>
      ))}
    </section>
  );
};

export default CommonSection;
