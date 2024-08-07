import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) {
    const [theam, setTheam] = useState("dark");
    return(
        <UserContext.Provider value={{ theam ,setTheam}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;