import { useEffect } from 'react';

type EventType = keyof WindowEventMap;
type EventListener = (event: Event) => void;

const useEventListener = (eventName: EventType, callbackFn: EventListener) => {
  useEffect(() => {
    window.addEventListener(eventName, callbackFn);

    return () => window.removeEventListener(eventName, callbackFn);
  }, [eventName, callbackFn]);
};

export default useEventListener;
