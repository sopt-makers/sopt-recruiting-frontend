import { add, init } from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import DeviceTypeProvider from 'contexts/DeviceTypeProvider';
import RecruitingInfoProvider from 'contexts/RecruitingInfoProvider';
import ThemeProvider, { useTheme } from 'contexts/ThemeProvider';
import { dark, light } from 'styles/theme.css';

import BigLoading from 'views/loadings/BigLoding';

import 'styles/reset.css';
import useDialog from '@hooks/useDialog';

const SessionExpiredDialog = lazy(() =>
  import('views/dialogs').then(({ SessionExpiredDialog }) => ({ default: SessionExpiredDialog })),
);
const MainPage = lazy(() => import('views/MainPage'));
const PasswordPage = lazy(() => import('views/PasswordPage'));
const ResultPage = lazy(() => import('views/ResultPage'));
const ReviewPage = lazy(() => import('views/ReviewPage'));
const SignupPage = lazy(() => import('views/SignupPage'));
const ErrorPage = lazy(() => import('views/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage code={500} />
      </Layout>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: '/sign-up', element: <SignupPage /> },
      { path: '/password', element: <PasswordPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/review', element: <ReviewPage /> },
      { path: '/error', element: <ErrorPage code={500} /> },
      { path: '*', element: <ErrorPage code={404} /> },
    ],
  },
]);

const App = () => {
  // useEffect(() => {
  //   const isMobile = /Mobi/i.test(window.navigator.userAgent);
  //   if (isMobile) {
  //     alert('PC로 지원해주세요.');
  //     window.location.href = 'https://makers.sopt.org/recruit';
  //   }
  // }, []);

  const { ref: sessionExpiredDialogRef, handleShowDialog: handleShowSessionExpiredDialog } = useDialog();
  const [isAmplitudeInitialized, setIsAmplitudeInitialized] = useState(false);
  const { isLight } = useTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          handleShowSessionExpiredDialog();
        } else if (axiosError.response?.status === 500) {
          window.location.href = '/error';
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          handleShowSessionExpiredDialog();
        } else if (axiosError.response?.status === 500) {
          window.location.href = '/error';
        }
      },
    }),
  });

  useEffect(() => {
    if (!isAmplitudeInitialized) {
      init(import.meta.env.VITE_AMPLITUDE_API_KEY);
      setIsAmplitudeInitialized(true);

      const sessionReplayTracking = sessionReplayPlugin({
        // Set sample rate (required)
        // sampleRate of 1 captures 100% of all sessions - not advisable for production environment
        sampleRate: 0.7,
      });

      add(sessionReplayTracking);
    }
  }, [isAmplitudeInitialized]);

  return (
    <>
      <SessionExpiredDialog ref={sessionExpiredDialogRef} />
      <ThemeProvider>
        <DeviceTypeProvider>
          <RecruitingInfoProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools />
              <div className={isLight ? light : dark}>
                <Suspense fallback={<BigLoading />}>
                  <RouterProvider router={router} />
                </Suspense>
              </div>
            </QueryClientProvider>
          </RecruitingInfoProvider>
        </DeviceTypeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
