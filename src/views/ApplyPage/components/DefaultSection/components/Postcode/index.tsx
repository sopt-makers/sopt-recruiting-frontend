import { useState } from 'react';
import { Address } from 'react-daum-postcode';
import { UseFormReturn } from 'react-hook-form';

import { InputLine, TextBox } from '@components/Input';

const Postcode = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch'>;
}) => {
  const [address, setAddress] = useState('');

  const openPostcode = () => {
    window.daum &&
      new window.daum.Postcode({
        oncomplete: function (data: Address) {
          setAddress(data.address);
        },
      }).open();
  };

  return (
    <TextBox label="거주지" formObject={formObject} required size="lg">
      <InputLine
        label="거주지"
        placeholder="예) 서울특별시 관악구 신림동"
        onClick={openPostcode}
        value={address}
        style={{ cursor: 'pointer' }}
      />
    </TextBox>
  );
};

export default Postcode;
