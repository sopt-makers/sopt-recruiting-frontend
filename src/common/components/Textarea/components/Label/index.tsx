import { Fragment, type HTMLAttributes } from 'react';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { requireDot, labelStyleVar } from './style.css';

interface LabelProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  maxCount: number;
  required: boolean;
  label: string;
}

const Label = ({ children, maxCount, required, label, ...headerElementProps }: LabelProps) => {
  const { deviceType } = useDeviceType();
  const questionArray = children.split('\n');
  const firstEmptyIndex = questionArray.indexOf('');

  const renderQuestions = (questions: string[], limit: number) =>
    questions.slice(0, limit).map((item, idx) => (
      <Fragment key={`${item}-${idx}`}>
        {item}
        {idx !== limit - 1 && '\n'}
      </Fragment>
    ));

  const renderRestQuestions = (questions: string[]) =>
    questions.slice(firstEmptyIndex).map((item, idx) => (
      <Fragment key={`${item}-${idx}`}>
        {item} {`\n`}
      </Fragment>
    ));

  return (
    <h4 className={labelStyleVar[deviceType]} {...headerElementProps}>
      <label style={{ cursor: 'pointer' }} htmlFor={label}>
        <span>
          {firstEmptyIndex === -1 ? children : renderQuestions(questionArray, firstEmptyIndex)}
          <span style={{ position: 'relative' }}>
            {' '}
            ({maxCount}자)
            {required && <i className={requireDot} />}
          </span>
        </span>
        {firstEmptyIndex !== -1 && (
          <>
            <br />
            <span>{renderRestQuestions(questionArray)}</span>
          </>
        )}
      </label>
    </h4>
  );
};

export default Label;
