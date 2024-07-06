import { useState } from 'react';
import { Address } from 'react-daum-postcode';
import { UseFormReturn } from 'react-hook-form';

import { InputLine, TextBox } from '@components/Input';

const Postcode = ({
  addressDraft,
  formObject,
}: {
  addressDraft: string;
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch'>;
}) => {
  const [address, setAddress] = useState('');

  const handleOpenPostcode = () => {
    window.daum &&
      new window.daum.Postcode({
        oncomplete: function (data: Address) {
          setAddress(data.address);
          formObject.clearErrors && formObject.clearErrors('거주지');
        },
        width: 500,
        height: 500,
      }).open({
        left: window.screen.width / 2 - 500 / 2,
        top: window.screen.height / 2 - 500 / 2,
        popupTitle: 'SOPT - 우편 번호 검색 팝업',
        popupKey: 'sopt-postcode-popup',
      });
  };

  return (
    <TextBox label="거주지" formObject={formObject} required size="lg">
      <InputLine
        label="거주지"
        placeholder="예) 서울특별시 관악구 신림동"
        onClick={handleOpenPostcode}
        value={address || addressDraft}
        style={{ cursor: 'pointer' }}
      />
    </TextBox>
  );
};

export default Postcode;
