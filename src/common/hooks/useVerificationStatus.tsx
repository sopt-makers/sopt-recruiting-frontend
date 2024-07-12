import { useState } from 'react';

const useVerificationStatus = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerified = (bool: boolean) => {
    setIsVerified(bool);
  };

  return { isVerified, handleVerified };
};

export default useVerificationStatus;
