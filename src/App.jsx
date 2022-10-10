import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { blog, main, newPost, postDetail } from "../routes";

// Pages
import {
  BlogLayout,
  ErrorPage,
  RootLayout,
  WelcomePage,
  BlogPostsPage,
  PostDetailPage,
  NewPostPage,
} from "./pages";
// Loaders
import { blogPostsLoader, blogPostLoader } from "./pages";
// Actions
import { newPostAction } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: main,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true, 
          element: <WelcomePage /> 
        },
        {
          path: blog,
          element: <BlogLayout />,
          children: [
            {
              index: true,
              element: <BlogPostsPage />,
              loader: blogPostsLoader,
            },
            {
              path: postDetail,
              element: <PostDetailPage />,
              loader: blogPostLoader,
            },
          ],
        },
        {
          path: newPost,
          element: <NewPostPage />,
          action: newPostAction,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
