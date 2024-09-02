import { render, type RenderOptions } from '@testing-library/react';
import DeviceTypeProvider from 'contexts/DeviceTypeProvider';
import RecruitingInfoProvider from 'contexts/RecruitingInfoProvider';
import ThemeProvider from 'contexts/ThemeProvider';
import type { ReactElement, ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <DeviceTypeProvider>
        <RecruitingInfoProvider>{children}</RecruitingInfoProvider>
      </DeviceTypeProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
