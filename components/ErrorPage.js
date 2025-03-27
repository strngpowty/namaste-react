import { useRouteError } from "react-router-dom";
const errorPage = () => {
  let err = useRouteError();
  console.log(err)
  return (
    <div className="error-page">
      <h1>{err.status}</h1>
      <p>{err.data}</p>
    </div>
  )
}

export default errorPage;