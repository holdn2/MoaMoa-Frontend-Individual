import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";

// Modal의 appElement 설정 (root를 기준으로 함)
// react-modal은 Modal.setAppElement()를 사용해 어떤 DOM 요소가 모달이 열릴 때 숨겨져야 하는지 명시해야 함
Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
