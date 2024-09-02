import { render, type RenderOptions } from '@testing-library/react';
import DeviceTypeProvider from 'contexts/DeviceTypeProvider';
import RecruitingInfoProvider from 'contexts/RecruitingInfoProvider';
import ThemeProvider from 'contexts/ThemeProvider';
import type { ReactElement, ReactNode } from 'react';
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom';

interface AllTheProvidersProps extends MemoryRouterProps {
  children: ReactNode;
}

const AllTheProviders = ({ children, ...memoryRouterProps }: AllTheProvidersProps) => {
  return (
    <MemoryRouter {...memoryRouterProps}>
      <ThemeProvider>
        <DeviceTypeProvider>
          <RecruitingInfoProvider>{children}</RecruitingInfoProvider>
        </DeviceTypeProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  memoryRouterProps?: MemoryRouterProps,
) =>
  render(ui, {
    wrapper: ({ children }) => <AllTheProviders {...memoryRouterProps}>{children}</AllTheProviders>,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
