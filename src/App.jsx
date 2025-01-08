import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collect from "./pages/Collect/Collect";
import MyPage from "./pages/MyPage/MyPage";
import StartConsumption from "./pages/StartConsumption/StartConsumption";
import InputConsumption from "./pages/InputConsumption/InputConsumption";
import Callendar from "./pages/Callendar/Callendar";
import Level from "./pages/Level/Level";
import Setting from "./pages/Setting/Setting";
import Alarm from "./pages/Alarm/Alarm";
import DecoProfile from "./pages/DecoProfile/DecoProfile";
import Diagnosis from "./pages/Diagnosis/Diagnosis";
import MyCoin from "./pages/MyCoin/MyCoin";

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
          path: "/callendar",
          element: <Callendar />,
        },

        {
          path: "/alarm",
          element: <Alarm />,
        },
        {
          path: "/level",
          element: <Level />,
        },
        {
          path: "/mycoin",
          element: <MyCoin />,
        },
        {
          path: "/collect",
          element: <Collect />,
        },
        {
          path: "/mypage",
          element: <MyPage />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/decoprofile",
          element: <DecoProfile />,
        },
        {
          path: "/diagnosis",
          element: <Diagnosis />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
