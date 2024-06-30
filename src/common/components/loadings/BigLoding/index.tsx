import Lottie from 'lottie-react';

import { container, loadingText, wrapper } from './style.css';
import mainLoading from '../lotties/mainLoading.json';

const BigLoading = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <Lottie animationData={mainLoading} style={{ width: '500px', height: '300px' }} />
        <p className={loadingText}>페이지 로딩 중입니다</p>
      </div>
    </div>
  );
};

export default BigLoading;
