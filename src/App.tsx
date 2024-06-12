import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useForm } from 'react-hook-form';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import Textarea from '@components/Textarea';
import { dark, light } from 'styles/theme.css';

import ApplyPage from './pages/ApplyPage';
import CompletePage from './pages/CompletePage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PasswordPage from './pages/PasswordPage';
import ResultPage from './pages/ResultPage';
import ReviewPage from './pages/ReviewPage';
import SignupPage from './pages/SignupPage';
import 'styles/reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/sign-up', element: <SignupPage /> },
      { path: '/sign-up', element: <SignupPage /> },
      { path: '/password', element: <PasswordPage /> },
      { path: '/apply', element: <ApplyPage /> },
      { path: '/complete', element: <CompletePage /> },
      { path: '/my', element: <MyPage /> },
      { path: '/result', element: <ResultPage /> },
      { path: '/review', element: <ReviewPage /> },
    ],
  },
]);

const App = () => {
  const isLight = true;

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
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const maxCount = 700; // data로 나중에 받아옴.

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div className={isLight ? light : dark}>
          <RouterProvider router={router} />
          <Textarea label="q1" register={register} watch={watch} required errors={errors} maxCount={maxCount}>
            {`3. 최근 1년 이내로 머릿속으로만 생각하고 있던 계획을 행동으로 옮겨본 경험이 있나요? 만약 있다면 어떤. 계획이. 었으며, 행동을 통해 어떤 성장을 이루어냈는지에 대해 구체적으로 서술해 주세요. 만약 없다면, 해당 계획을 행동으로 옮기기 위한 액션 플랜을 서술해 주세요.`}
          </Textarea>
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
