import { useEffect } from 'react';

const useCheckBrowser = () => {
  useEffect(() => {
    // https://stackoverflow.com/questions/4565112/how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618

    // please note,
    // that IE11 now returns undefined again for window.chrome
    // and new Opera 30 outputs true for window.chrome
    // but needs to check if window.opr is not undefined
    // and new IE Edge outputs to true now for window.chrome
    // and if not iOS Chrome check
    // so use the below updated condition
    const isChromium = (window as any).chrome;
    const winNav = window.navigator;
    const vendorName = winNav.vendor;
    const isOpera = typeof (window as any).opr !== 'undefined';
    // const isFirefox = winNav.userAgent.indexOf('Firefox') > -1;
    const isIEedge = winNav.userAgent.indexOf('Edg') > -1;
    const isIOSChrome = winNav.userAgent.match('CriOS');
    const isGoogleChrome =
      typeof (winNav as any).userAgentData !== 'undefined'
        ? (winNav as any).userAgentData.brands[0].brand === 'Google Chrome'
        : vendorName === 'Google Inc.';

    if (
      !isIOSChrome &&
      (isChromium === null ||
        typeof isChromium === 'undefined' ||
        vendorName !== 'Google Inc.' ||
        isOpera ||
        isIEedge ||
        !isGoogleChrome)
    ) {
      alert('원활한 지원을 위해 크롬(Chrome) 브라우저 사용을 권장드려요.');
    }
  }, []);
};

export default useCheckBrowser;
