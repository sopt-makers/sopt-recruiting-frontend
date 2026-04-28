import { Button } from '@sopt-makers/ui';
import { wrapper, container, buttonVar, textVar } from './style.css';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';
import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import { useNavigate } from 'react-router-dom';

const BottomApplyCTA = () => {
  const navigate = useNavigate();

  const deviceType = useDevice();

  return (
    <div className={wrapper}>
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
      <div className={container}>
        <span className={textVar}>지금 SOPT에 지원해 보세요!</span>
        <Button theme="blue" className={buttonVar} onClick={() => navigate('/sign-up')}>
          지원하기
        </Button>
      </div>
    </div>
  );
};

export default BottomApplyCTA;
