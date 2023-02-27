import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import StyledHomePage from "./HomePage";

function HomePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        toast.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <StyledHomePage>
      <div className="inf__homepage">
        <h3>Olá, {user.name}</h3>
        <span>{user.course_module} </span>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
