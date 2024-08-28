import { createContext, type ReactNode, useContext } from 'react';

import { useDevice } from '@hooks/useDevice';

interface DeviceTypeContextType {
  deviceType: 'DESK' | 'TAB' | 'MOB';
}

const DeviceTypeContext = createContext<DeviceTypeContextType>({
  deviceType: 'DESK',
});

// eslint-disable-next-line react-refresh/only-export-components
export const useDeviceType = () => {
  const contextValue = useContext(DeviceTypeContext);

  if (!contextValue) {
    throw new Error('DeviceTypeContext는 DeviceTypeProvider 내부에 있어야 함');
  }

  return contextValue;
};

const DeviceTypeProvider = ({ children }: { children: ReactNode }) => {
  const deviceType = useDevice();

  return <DeviceTypeContext.Provider value={{ deviceType }}>{children}</DeviceTypeContext.Provider>;
};

export default DeviceTypeProvider;
