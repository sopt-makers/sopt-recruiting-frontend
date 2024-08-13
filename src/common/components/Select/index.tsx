import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import { circle, containerVar, titleVar } from '@components/Input/components/TextBox/style.css';
import { useDevice } from '@hooks/useDevice';

import {
  errorVar,
  iconVar,
  optionContainerVar,
  optionLabel,
  selectContainer,
  selectPaddingVar,
  selectVariant,
} from './style.css';
import { SelectBoxProps } from './type';

const SelectBox = ({ label, name, options, size = 'sm', required, ...inputElementProps }: SelectBoxProps) => {
  const DEVICE_TYPE = useDevice();
  const ampUnmask = name === 'part' || name === 'knownPath';

  const { register, formState, clearErrors, getValues, setValue, setError } = useFormContext();
  const { errors } = formState;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.currentTarget.id);
    clearErrors && clearErrors(name);
  };

  const handleBlur = async () => {
    await new Promise((r) => setTimeout(r, 100));
    if (!getValues(name)) {
      setError(name, { type: 'required', message: '필수 입력 항목이에요.' });
    }
  };

  return (
    <div className={containerVar[DEVICE_TYPE === 'DESK' ? size : DEVICE_TYPE]}>
      <label className={titleVar[DEVICE_TYPE]} htmlFor={name}>
        <span>{label}</span>
        {required && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input
          id={name}
          type="text"
          className={`${ampUnmask ? 'amp-unmask' : ''} ${selectVariant[errors?.[name] ? 'error' : 'selected']} ${selectPaddingVar[DEVICE_TYPE]}`}
          role="combobox"
          readOnly
          {...inputElementProps}
          {...register(name, {
            required: required && '필수 입력 항목이에요.',
          })}
          onBlur={handleBlur}
        />
        <IconChevronDown className={iconVar[DEVICE_TYPE]} />
        <ul className={optionContainerVar[DEVICE_TYPE]}>
          {options.map((option) => (
            <li role="option" key={option}>
              <input id={option} type="radio" name={name} onChange={handleChange} style={{ display: 'none' }} />
              <label htmlFor={option} className={optionLabel}>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {errors?.[name] && (
        <div className={errorVar[DEVICE_TYPE]}>
          <p>{errors[name]?.message as string}</p>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
