import { Address } from 'react-daum-postcode';

import { InputLine, TextBox } from '@components/Input';

const Postcode = ({ formObject }) => {
  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data: Address) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        console.log(data.address);
      },
    }).open();
  };

  return (
    <button type="button" onClick={openPostcode}>
      <TextBox label="거주지" formObject={formObject} required size="lg">
        <InputLine label="거주지" placeholder="예) 서울특별시 관악구 신림동" />
      </TextBox>
    </button>
  );
};

export default Postcode;
