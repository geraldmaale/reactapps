import { Link } from "@tanstack/react-router";
import { FaBug } from "react-icons/fa";

export default function ErrorPage() {
  const errorMessage: string = "Something went wrong. Please try again later.";
  const errorStatus: string = "Oops, Server Error";

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaBug className="text-red-800 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">{errorStatus}</h1>
      <p className="text-xl mb-5">{errorMessage}</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go to Home
      </Link>
    </section>
  );
}
