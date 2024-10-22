import { useEffect } from 'react';

const useCheckBrowser = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const chromeRegexes = [
      /\b(?:crmo|crios)\/([\w\.]+)/i, // Chrome for Android/iOS
      /headlesschrome(?:\/([\w\.]+)| )/i, // Chrome Headless
      / wv\).+(chrome)\/([\w\.]+)/i, // Chrome WebView
      /chrome\/([\w\.]+) mobile/i, // Chrome Mobile
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i, // ChromeOS (Chromium OS)
    ];

    const isChrome = chromeRegexes.some((regex) => regex.test(userAgent));

    if (!isChrome) {
      alert('원활한 지원을 위해 크롬(Chrome) 브라우저 사용을 권장드려요.');
    }
  }, []);
};

export default useCheckBrowser;
