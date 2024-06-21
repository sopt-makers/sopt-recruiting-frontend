import { useEffect, useRef, useState } from 'react';

import formatTimer from '@components/Input/Timer/utils/formatTimer';

import { timer } from './style.css';
import { TimerProps } from '../types';

// TextBox 내부 타이머
const Timer = ({ isActive, onResetTimer }: TimerProps) => {
  const [seconds, setSeconds] = useState(300);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const clearTimer = () => {
    timerRef.current && clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isActive) {
      setSeconds(300);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            onResetTimer();
            clearTimer();
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearTimer();
    }

    return () => {
      clearTimer();
    };
  }, [isActive, onResetTimer]);

  return <span className={timer}>{isActive && formatTimer(seconds)}</span>;
};

export default Timer;
