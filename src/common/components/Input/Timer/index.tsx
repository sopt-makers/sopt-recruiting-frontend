import { useEffect, useRef, useState } from 'react';

import formatTimer from '@components/Input/Timer/utils/formatTimer';

import { timer } from './style.css';

import type { TimerProps } from '../types';

const INITIAL_TIME = 300;

// TextBox 내부 타이머
const Timer = ({ isActive, onResetTimer }: TimerProps) => {
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const clearTimer = () => {
    timerRef.current && clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            onResetTimer();
            clearTimer();
            return INITIAL_TIME;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearTimer();
    };
  }, [isActive, onResetTimer]);

  return <span className={timer}>{isActive && formatTimer(seconds)}</span>;
};

export default Timer;
