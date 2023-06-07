import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Page not found</h1>
      <p>This page doesn't exist.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
