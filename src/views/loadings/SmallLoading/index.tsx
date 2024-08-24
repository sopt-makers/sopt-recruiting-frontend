import { container, loadingText, wrapper } from './style.css';
import Lottie from '../Lottie';
import mainLoading from '../lotties/mainLoading.json';

const SmallLoading = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <Lottie animationData={mainLoading} style={{ width: 500, height: 200 }} />
        <p className={loadingText}>로딩 중입니다</p>
      </div>
    </div>
  );
};

export default SmallLoading;
