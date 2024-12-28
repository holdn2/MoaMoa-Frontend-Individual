import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collect from "./pages/Collect/Collect";
import MyPage from "./pages/MyPage/MyPage";
import StartConsumption from "./pages/StartConsumption/StartConsumption";
import InputConsumption from "./pages/InputConsumption/InputConsumption";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/startconsumption",
          element: <StartConsumption />,
        },
        {
          path: "/inputconsumption",
          element: <InputConsumption />,
        },
        {
          path: "/collect",
          element: <Collect />,
        },
        {
          path: "/mypage",
          element: <MyPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
