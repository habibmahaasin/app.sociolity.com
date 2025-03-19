import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/use-posts";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postLists } = usePosts();
  console.log(postLists.isLoading, postLists.data);

  if (postLists.isLoading) return <div>Loading...</div>;

  return (
    <div>
      {postLists?.data?.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
