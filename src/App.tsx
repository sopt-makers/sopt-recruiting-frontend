import { add, init } from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { colors } from '@sopt-makers/colors';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import { RecruitingInfoContext, RecruitingInfoType } from '@store/recruitingInfoContext';
import { ModeType, ThemeContext } from '@store/themeContext';
import { dark, light } from 'styles/theme.css';
import { SessionExpiredDialog } from 'views/dialogs';
import ErrorPage from 'views/ErrorPage';
import MainPage from 'views/MainPage';
import PasswordPage from 'views/PasswordPage';
import ResultPage from 'views/ResultPage';
import ReviewPage from 'views/ReviewPage';
import SignupPage from 'views/SignupPage';

import 'styles/reset.css';

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

  const sessionRef = useRef<HTMLDialogElement>(null);

  const [isLight, setIsLight] = useState(true);
  const [recruitingInfo, setRecruitingInfo] = useState<RecruitingInfoType>({});
  const [isAmplitudeInitialized, setIsAmplitudeInitialized] = useState(false);

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
          sessionRef.current?.showModal();
        } else if (axiosError.response?.status === 500) {
          window.location.href = '/error';
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          sessionRef.current?.showModal();
        } else if (axiosError.response?.status === 500) {
          window.location.href = '/error';
        }
      },
    }),
  });

  const themeContextValue = {
    isLight,
    handleChangeMode: (mode: ModeType) => {
      setIsLight(mode === 'light' ? true : false);
      const body = document.body;
      const bodyColor = mode === 'light' ? colors.white : colors.gray950; // theme.color.background
      body.style.backgroundColor = bodyColor;
    },
  };

  const recruitingInfoContextValue = {
    recruitingInfo,
    handleSaveRecruitingInfo: useCallback((obj: RecruitingInfoType) => {
      setRecruitingInfo((prev) => ({ ...prev, ...obj }));
    }, []),
  };

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
      <SessionExpiredDialog ref={sessionRef} />
      <HelmetProvider>
        <ThemeContext.Provider value={themeContextValue}>
          <RecruitingInfoContext.Provider value={recruitingInfoContextValue}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools />
              <div className={isLight ? light : dark}>
                <RouterProvider router={router} />
              </div>
            </QueryClientProvider>
          </RecruitingInfoContext.Provider>
        </ThemeContext.Provider>
      </HelmetProvider>
    </>
  );
};

export default App;
