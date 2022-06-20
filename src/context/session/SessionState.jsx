import { useReducer, useState } from "react";
import SessionContext from "./SessionContext";
import { IS_ADMIN } from "../Types";


const SessionState = ({ children }) => {
  const loadSession = () => {
    let data = localStorage.getItem("session")
    if (!data) {
      data = { isAdmin: false }
      localStorage.setItem("session", JSON.stringify(data))
      return data
    }
    return JSON.parse(data)
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case IS_ADMIN: {
        return {
          ...state,
          isAdmin: !state.isAdmin
        };
      }
      default:
        return state;
    }
  }
    , loadSession());



  const switchAdmin = () => {
    // recover session update it with the new state
    let data = localStorage.getItem("session");
    if (!data) {
      data = JSON.stringify(loadSession());
    }

    const session = JSON.parse(data);
    session.isAdmin = !session.isAdmin;
    localStorage.setItem("session", JSON.stringify(session));
    dispatch({ type: IS_ADMIN });
  }
  return (
    <SessionContext.Provider value={{
      isAdmin: state.isAdmin,
      switchAdmin
    }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionState;