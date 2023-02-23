import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function ProtectedRoutes() {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !token) {
      navigate("/");
    }
  }, []);

  /*   if (user && token) {
    console.log("passei aqui");
    return <Outlet />;
  } */
  return <>{user && token ? <Outlet /> : null}</>;
}

export default ProtectedRoutes;
