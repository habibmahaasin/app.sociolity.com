import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/use-posts";
import HeaderModule from "../components/modules/Header";

export const Route = createFileRoute("/")({
  component: () => <RouteComponent />,
});

function RouteComponent() {
  const { postLists } = usePosts();
  console.log(postLists.isLoading, postLists.data);

  // if (postLists.isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-[100dvh] flex gap-8">
      <div className="h-[100dvh] p-4 w-[320px] fixed hidden md:block">
        <div className="h-[100%] bg-black w-full rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4 w-full px-2 pt-4 md:ml-[320px] bg-black">
        <HeaderModule className="w-full sticky top-4" />
        <div className="h-[5000px] bg-white border w-full rounded-xl"></div>
      </div>
    </div>
  );
}
