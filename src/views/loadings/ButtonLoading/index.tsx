import Lottie from 'lottie-react';
import buttonLoadingWhite from '../lotties/buttonLoadingWhite.json';

const ButtonLoading = ({ width, height = 28 }: { width: number | undefined; height?: number }) => {
  return <Lottie animationData={buttonLoadingWhite} style={{ width, height }} />;
};

export default ButtonLoading;
