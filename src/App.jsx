import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import ErrorPage from "./pages/ErrorPage";
import NewPostPage from "./pages/NewPost";
import PostDetailPage, { loader as blogPostloader } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<WelcomePage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
          <Route
            path=":id"
            element={<PostDetailPage />}
            loader={blogPostloader}
          />
        </Route>
        <Route path="/blog/new" element={<NewPostPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
