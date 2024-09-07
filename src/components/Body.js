import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Hero from "./Hero";
import SiteHeader from "./SiteHeader";
const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Hero /> },
    { path: "/dashboard", element: <Dashboard /> },
    // { path: "/browse/:movieId", element: <MovieDetails /> },
  ]);

  return (
    <div>
      <SiteHeader />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
