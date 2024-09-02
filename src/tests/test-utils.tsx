import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import DeviceTypeProvider from 'contexts/DeviceTypeProvider';
import RecruitingInfoProvider from 'contexts/RecruitingInfoProvider';
import ThemeProvider from 'contexts/ThemeProvider';
import type { ReactElement, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom';

interface AllTheProvidersProps extends MemoryRouterProps {
  children: ReactNode;
}

export const AllTheProviders = ({ children, ...memoryRouterProps }: AllTheProvidersProps) => {
  window.alert = vi.fn();
  window.scrollTo = vi.fn();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        retry: false,
      },
    },
  });

  const method = useForm({ mode: 'onBlur' });

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...method}>
        <MemoryRouter {...memoryRouterProps}>
          <ThemeProvider>
            <DeviceTypeProvider>
              <RecruitingInfoProvider>{children}</RecruitingInfoProvider>
            </DeviceTypeProvider>
          </ThemeProvider>
        </MemoryRouter>
      </FormProvider>
    </QueryClientProvider>
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
