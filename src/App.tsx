import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import PasswordPage from './pages/PasswordPage';
import ApplyPage from './pages/ApplyPage';
import CompletePage from './pages/CompletePage';
import MyPage from './pages/MyPage';
import ResultPage from './pages/ResultPage';
import ReviewPage from './pages/ReviewPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'styles/global.css';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/sign-up', element: <SignupPage /> },
  { path: '/password', element: <PasswordPage /> },
  { path: '/apply', element: <ApplyPage /> },
  { path: '/complete', element: <CompletePage /> },
  { path: '/my', element: <MyPage /> },
  { path: '/result', element: <ResultPage /> },
  { path: '/review', element: <ReviewPage /> },
]);

const App = () => {
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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
