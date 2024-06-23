import IconBigLoading from './icons/IconBigLoading';
import { container, loadingText } from './style.css';

const BigLoading = () => {
  return (
    <div className={container}>
      <IconBigLoading />
      <p className={loadingText}>페이지 로딩 중입니다</p>
    </div>
  );
};

export default BigLoading;
