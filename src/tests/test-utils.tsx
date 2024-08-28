import { render, type RenderOptions } from '@testing-library/react';
import DeviceTypeProvider from 'contexts/DeviceTypeProvider';
import RecruitingInfoProvider from 'contexts/RecruitingInfoProvider';
import ThemeProvider from 'contexts/ThemeProvider';
import type { ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <DeviceTypeProvider>
        <RecruitingInfoProvider>{children}</RecruitingInfoProvider>
      </DeviceTypeProvider>
    </ThemeProvider>
  );
};

const renderWithContext = (ui: ReactNode, options: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
