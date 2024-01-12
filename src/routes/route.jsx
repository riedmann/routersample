import { useNavigate, useNavigation } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <button
          onClick={() => {
            navigate("/test");
          }}
        >
          Navigate
        </button>
        <li>
          <a href={`/test`}>Link to Test</a>
        </li>
      </div>
    </>
  );
}
