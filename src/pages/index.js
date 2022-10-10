import BlogLayout from "./BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./BlogPosts";
import ErrorPage from "./ErrorPage";
import NewPostPage, { action as newPostAction } from "./NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./PostDetail";
import RootLayout from "./RootLayout";
import WelcomePage from "./Welcome";
import DeferredBlogPostsPage, {
  loader as deferredBlogPostsLoader,
} from "./DeferredBlogPosts";
import { action as newsletterAction } from "./Newsletter";

// Pages
export {
  BlogLayout,
  BlogPostsPage,
  ErrorPage,
  NewPostPage,
  PostDetailPage,
  RootLayout,
  WelcomePage,
  DeferredBlogPostsPage,
};

// Loaders
export { blogPostLoader, blogPostsLoader, deferredBlogPostsLoader };

// Actions
export { newPostAction, newsletterAction };
