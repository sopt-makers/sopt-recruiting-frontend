import IconSmallLoading from './icons/IconSmallLoding';
import { container, loadingText } from './style.css';

const SmallLoading = () => {
  return (
    <div className={container}>
      <IconSmallLoading />
      <p className={loadingText}>로딩 중입니다</p>
    </div>
  );
};

export default SmallLoading;
