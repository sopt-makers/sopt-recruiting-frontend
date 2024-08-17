import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect, useState } from 'react';

import { DeviceTypeContext } from '@store/deviceTypeContext';

import { timerVar } from './style.css';
import { TimerProps } from './types';
import formatTimer from './utils/formatTimer';

const INITIAL_TIME = 300;

// TextBox 내부 타이머
const Timer = ({ isActive, onResetTimer }: TimerProps) => {
  const { deviceType } = useContext(DeviceTypeContext);
  const [seconds, setSeconds] = useState(INITIAL_TIME - 1);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isActive) {
      const initialDate = new Date();
      const ExpiryTime = new Date(initialDate.getTime() + INITIAL_TIME * 1000);

      const tick = () => {
        const now = new Date();
        const diffInSeconds = differenceInSeconds(ExpiryTime, now);

        if (diffInSeconds > 0) {
          setSeconds(diffInSeconds === INITIAL_TIME ? INITIAL_TIME - 1 : diffInSeconds);
          timeout = setTimeout(tick, 1000 - (now.getTime() % 1000));
        } else {
          onResetTimer();
          setSeconds(INITIAL_TIME - 1);
        }
      };

      tick();
    } else {
      setSeconds(INITIAL_TIME - 1);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isActive, onResetTimer]);

  return <span className={timerVar[deviceType]}>{isActive && formatTimer(seconds)}</span>;
};

export default Timer;
