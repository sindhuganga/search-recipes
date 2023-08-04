import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Landing, HomeLayout, Error, Recipe } from "./pages";
import { loader as landingloader } from "./pages/Landing";
import { loader as recipeloader } from "./pages/Recipe";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingloader(queryClient),
        element: <Landing />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "recipe/:id",
        element: <Recipe />,
        loader: recipeloader(queryClient),
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
};

export default App;
