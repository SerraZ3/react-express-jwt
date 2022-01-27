import React from "react";
import auth from "../storage/auth";
function Painel() {
  const handleLogout = () => {
    auth.removeToken();
  };
  return (
    <div>
      <h1>Painel</h1>
      <br />
      <button onClick={handleLogout}>Deslogar</button>
    </div>
  );
}

export default Painel;
