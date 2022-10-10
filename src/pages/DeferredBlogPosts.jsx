import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback="loading....">
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts</p>}
        >
          {(loaderData) => <Posts blogPosts={loaderData} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPostsPage;

export async function loader() {
  return defer({ posts: getSlowPosts() });
}
