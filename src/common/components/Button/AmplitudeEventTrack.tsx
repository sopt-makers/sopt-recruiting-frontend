import { track } from '@amplitude/analytics-browser';
import type { ReactNode } from 'react';

interface AmplitudeEventTrackProps {
  eventName?: string; // amplitude event name
  children: ReactNode;
}

const AmplitudeEventTrack = ({ eventName, children }: AmplitudeEventTrackProps) => {
  return <div onClick={() => (eventName ? track(eventName) : null)}>{children}</div>;
};

export default AmplitudeEventTrack;
