import { FaExclamationTriangle } from "react-icons/fa";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  let errorMessage: string;
  let errorStatus: string = "400 - Bad Request";

  console.log("error", error);

  if (isRouteErrorResponse(error)) {
    errorStatus = `${error.status} - ${error.statusText}`;
    errorMessage = error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">{errorStatus}</h1>
      <p className="text-xl mb-5">{errorMessage}</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
