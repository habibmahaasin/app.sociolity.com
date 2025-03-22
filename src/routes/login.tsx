import { createFileRoute } from "@tanstack/react-router";
import Layout from "../components/layouts";

export const Route = createFileRoute("/login")({
  component: () => (
    <Layout>
      <RouteComponent />
    </Layout>
  ),
});

function RouteComponent() {
  return <div>Hello "/login"!</div>;
}
