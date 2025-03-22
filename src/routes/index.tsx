import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/use-posts";
import Layout from "../components/layouts";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../components/elements/Button";

export const Route = createFileRoute("/")({
  component: () => (
    <Layout>
      <RouteComponent />
    </Layout>
  ),
});

function RouteComponent() {
  const { postLists } = usePosts();
  console.log(postLists.isLoading, postLists.data);

  // if (postLists.isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <div className="bg-accent px-6 py-4 flex items-start min-h-[260px] rounded-b-[24px] flex flex-col gap-6 relative">
        <div className="text-3xl text-secondary">
          <h2>Good Evening,</h2>
          <h2>Nyun Nyun</h2>
        </div>
        <div className="text-sm text-primary">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Lorem
            ipsum dolor sit amet.
          </span>
        </div>
        <div className="flex gap-4">
          <div className="badge badge-secondary">Secondary</div>
          <div className="badge badge-primary">Primary</div>
        </div>
      </div>
      <div className="px-6 py-4 flex flex-col gap-2">
        <h6 className="font-semibold text-secondary pt-4">
          What are you doing today?
        </h6>
        <div className="card bg-base-100 w-full !px-0">
          <div className="card-body !px-0">
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex gap-4 items-center text-secondary">
                <Icon icon="iconoir:brain" width="38" height="38" />
                <div className="w-full flex flex-col">
                  <span className="text-xs font-light ">Monitoring</span>
                  <p className="text-sm font-semibold">Deppression Checking</p>
                </div>
              </div>
              <Button className="btn-sm">Do Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
