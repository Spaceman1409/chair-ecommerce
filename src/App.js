import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootElement from "./RootElement";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootElement />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
