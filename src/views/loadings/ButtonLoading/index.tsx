import Lottie from 'lottie-react';

import buttonLoadingWhite from '../lotties/buttonLoadingWhite.json';

const ButtonLoading = ({ width }: { width: number | undefined }) => {
  return <Lottie animationData={buttonLoadingWhite} style={{ width: width, height: 28 }} />;
};

export default ButtonLoading;
