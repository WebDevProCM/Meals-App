import Navbar from "@/components/Navbar/Navbar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

export const metadata = {
  title: "Recipes Sharing App",
  description: "Share your favourite and delicious recipes with others and also discover recipes shared by them",
};

export default function MealsLayout({ children }) {

  return (
    <>
      <nav className="w-full">
        <Navbar />
      </nav>
      <ErrorBoundary fallback={<Error />}>
      {children}
      </ErrorBoundary>
    </>
  );
}
