import { useEffect } from 'react';

const useCheckBrowser = () => {
  useEffect(() => {
    const isChrome = /Chrome/i.test(window.navigator.userAgent);
    if (!isChrome) {
      alert('원활한 지원을 위해 크롬(Chrome) 브라우저 사용을 권장드려요.');
    }
  }, []);
};

export default useCheckBrowser;
