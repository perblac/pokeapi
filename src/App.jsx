import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPokeapiLayout from "./pages/RootPokeapiLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  const router = createBrowserRouter(
    [
      { path: "/",
        element: <RootPokeapiLayout />,
        errorElement:<Error/>,
        children: [
          { index: true, element: <Home/> },
          { path: "about", element: <About/>},
        ]
      },
    ]
  );

return <RouterProvider router={router} />;
}

export default App
