import { createContext } from 'react';

export interface DeviceTypeContextType {
  deviceType: 'DESK' | 'TAB' | 'MOB';
}

export const DeviceTypeContext = createContext<DeviceTypeContextType>({
  deviceType: 'DESK',
});
