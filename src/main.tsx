import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page.tsx";
import { ChatView } from "./components/chat-view.tsx";
import { NullChat } from "./components/null-chat.tsx";
import { ChatHeader } from "./components/chat-header.tsx";
import { MessageBox } from "./components/messages-box.tsx";
import { ChatFooter } from "./components/chat-footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ChatView />,
      },
      {
        path: ":chatId",
        element: <ChatView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
