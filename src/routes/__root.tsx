import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <main className="sociolity-light">
        <Outlet />
      </main>
    </React.Fragment>
  );
}
