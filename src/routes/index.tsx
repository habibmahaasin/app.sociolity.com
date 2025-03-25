import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/use-posts";
import { Button } from "@heroui/button";

export const Route = createFileRoute("/")({
  component: () => <RouteComponent />,
});

function RouteComponent() {
  const { postLists } = usePosts();
  console.log(postLists.isLoading, postLists.data);

  // if (postLists.isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-[200px] bg-black p-4">
      <Button color="primary">Button</Button>
    </div>
  );
}
