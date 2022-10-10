import BlogLayout from "./BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./BlogPosts";
import ErrorPage from "./ErrorPage";
import NewPostPage, { action as newPostAction } from "./NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./PostDetail";
import RootLayout from "./RootLayout";
import WelcomePage from "./Welcome";

// Pages
export {
  BlogLayout,
  BlogPostsPage,
  ErrorPage,
  NewPostPage,
  PostDetailPage,
  RootLayout,
  WelcomePage,
};

// Loaders
export { blogPostLoader, blogPostsLoader };

// Actions
export { newPostAction };
