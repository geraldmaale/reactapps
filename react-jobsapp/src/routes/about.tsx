import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is a simple example of how to use the TanStack Router with Vite.
      </p>

      <Button className="mt-4" onClick={() => toast.error("Hello from about")}>
        Click Me
      </Button>
    </div>
  );
}
