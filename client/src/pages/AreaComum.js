import React, { useEffect, useState } from "react";
import auth from "../storage/auth";
function AreaComum() {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenAux = auth.getToken();

    if (tokenAux) setToken(tokenAux);
  }, []);
  return (
    <div>
      <h1>AreaComum</h1>
      {token ? <h1>Logado</h1> : <h1>deslogado</h1>}
    </div>
  );
}

export default AreaComum;
