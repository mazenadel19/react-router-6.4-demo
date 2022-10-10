import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { blog, main, newPost, newsletter, postDetail } from "../routes";
import NewsletterSignup from "./components/NewsletterSignup";

// Pages
import {
  BlogLayout,
  ErrorPage,
  RootLayout,
  WelcomePage,
  BlogPostsPage,
  PostDetailPage,
  NewPostPage,
  DeferredBlogPostsPage,
} from "./pages";
// Loaders
import {
  blogPostsLoader,
  blogPostLoader,
  deferredBlogPostsLoader,
} from "./pages";
// Actions
import { newPostAction, newsletterAction } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: main,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
        {
          path: blog,
          element: <BlogLayout />,
          children: [
            {
              index: true,
              element: <DeferredBlogPostsPage />,
              loader: deferredBlogPostsLoader,
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
        {
          path: newsletter,
          action: newsletterAction,
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
