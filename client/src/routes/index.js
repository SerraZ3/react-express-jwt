import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes as RoutesDOM,
  Route,
  Navigate,
} from "react-router-dom";
import AreaComum from "../pages/AreaComum";
import Login from "../pages/Login";
import Painel from "../pages/Painel";
import auth from "../storage/auth";
const Routes = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenAux = auth.getToken();
    if (tokenAux) {
      fetch("http://localhost:3333/check-login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenAux }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (!res.error) {
            setToken(tokenAux);
          } else {
            auth.removeToken();
          }
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <RoutesDOM>
        {token ? (
          <>
            <Route path="/painel" element={<Painel />} />
            <Route path="*" element={<Navigate to="/painel" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/area-comum" element={<AreaComum />} />
      </RoutesDOM>
    </BrowserRouter>
  );
};
export default Routes;
