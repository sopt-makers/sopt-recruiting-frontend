import { createContext, type ReactNode, useContext } from 'react';

import { useDevice } from '@hooks/useDevice';

export interface DeviceTypeContextType {
  deviceType: 'DESK' | 'TAB' | 'MOB';
}

export const DeviceTypeContext = createContext<DeviceTypeContextType>({
  deviceType: 'DESK',
});

// eslint-disable-next-line react-refresh/only-export-components
export const useDeviceType = () => {
  const deviceType = useContext(DeviceTypeContext);

  if (!deviceType) {
    throw new Error('DeviceTypeContext must be called from within an DeviceTypeProvider');
  }

  return deviceType;
};

const DeviceTypeProvider = ({ children }: { children: ReactNode }) => {
  const deviceType = useDevice();

  return <DeviceTypeContext.Provider value={{ deviceType }}>{children}</DeviceTypeContext.Provider>;
};

export default DeviceTypeProvider;
