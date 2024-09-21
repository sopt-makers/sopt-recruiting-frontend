import supportedBrowsers from '../supportedBrowsers';

if (!supportedBrowsers.test(navigator.userAgent)) {
  if (window.location.pathname !== '/unsupported') window.location.href = '/unsupported';
}
