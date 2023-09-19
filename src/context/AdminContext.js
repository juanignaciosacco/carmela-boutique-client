import React, { useState } from "react";

const AdminContext = React.createContext();

const AdminIsLoggedProvider = ({ children }) => {
  const [logged, setIsLogged] = useState(false);

  const adminIsLogged = () => {
    logged ? setIsLogged(false) : setIsLogged(true);
  };

  return (
    <AdminContext.Provider value={{ adminIsLogged, logged }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminIsLoggedProvider };
