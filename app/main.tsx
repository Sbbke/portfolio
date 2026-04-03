import { createHashRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import RootLayout, { ErrorBoundary } from './routes/layout';
import Home from './routes/home';
import CvPost from './routes/cv';
import PostDetail from './routes/blog/$slug';
import ErrorPage from './routes/error-page';
import './app.css';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'cv',
        children: [
          { index: true, element: <CvPost /> },
        ],
      },
      {
        path: 'blog',
        children: [
          { path: ':slug', element: <PostDetail /> },
        ],
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
