import { UseFormReturn } from 'react-hook-form';

import Textarea from '@components/Textarea';

import { COMMON_QUESTION } from './constants';
import { sectionContainer, title } from './style.css';

const CommonSection = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch' | 'clearErrors' | 'trigger'>;
}) => {
  return (
    <section className={sectionContainer}>
      <h2 className={title}>공통 질문</h2>
      {COMMON_QUESTION.map(({ question, maxCount, required }, id) => (
        <div key={question}>
          <Textarea label={`공통${id}번`} formObject={formObject} maxCount={maxCount} required={required}>
            {question}
          </Textarea>
        </div>
      ))}
    </section>
  );
};

export default CommonSection;
