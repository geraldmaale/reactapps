import { Link } from "@tanstack/react-router";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  const errorMessage: string = "Page not found";
  const errorStatus: string = "404 - Not Found";

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
}
