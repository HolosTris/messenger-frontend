import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Ой-ёй!</h1>
      <p>Ошибочка вышла.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
