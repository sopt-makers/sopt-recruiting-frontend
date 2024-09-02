import { useEffect } from 'react';

/** 페이지 이탈 시 alert 띄우기 */
const useBeforeExitPageAlert = () => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // Included for legacy support, e.g. Chrome/Edeg < 119;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
};

export default useBeforeExitPageAlert;
