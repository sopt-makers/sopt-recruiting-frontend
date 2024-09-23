import useEventListener from '@hooks/useEventListener';

/** 페이지 이탈 시 alert 띄우기 */
const useBeforeExitPageAlert = () => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; // Included for legacy support, e.g. Chrome/Edeg < 119;
  };

  useEventListener('beforeunload', handleBeforeUnload);
};

export default useBeforeExitPageAlert;
