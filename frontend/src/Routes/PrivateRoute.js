import { useState, useEffect } from "react";
import { useAuth } from "../Context/Auth"; 
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";


export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8080/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}