import { track } from '@amplitude/analytics-browser';
import type { ReactNode } from 'react';

interface AmplitudeEventTrackProps {
  eventName?: string; // amplitude event name
  eventProperties?: Record<string, unknown>;
  children: ReactNode;
}

const AmplitudeEventTrack = ({ eventName, eventProperties, children }: AmplitudeEventTrackProps) => {
  const handleClick = () => {
    if (!eventName) return;
    track(eventName, eventProperties);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default AmplitudeEventTrack;
