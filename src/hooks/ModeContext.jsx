import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

function ModeProvider({ children }) {
  const [mode, setMode] = useState("explorer");
  function handleExplorer() {
    setMode("explorer");
  }
  function handleSportsMode() {
    setMode("sports-mode");
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        handleExplorer,
        handleSportsMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

function useMode() {
  const context = useContext(ModeContext);
  return context;
}

export { useMode, ModeProvider };
