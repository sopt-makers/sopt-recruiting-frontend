import { container, loadingText, wrapper } from './style.css';
import Lottie from 'lottie-react';
import mainLoading from '../lotties/mainLoading.json';

const BigLoading = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <Lottie animationData={mainLoading} style={{ width: 500, height: 300 }} />
        <p className={loadingText}>페이지 로딩 중입니다</p>
      </div>
    </div>
  );
};

export default BigLoading;
