import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.location.href = "https://mikesandula.dev";
  }, []);

  return null;
};

export default App;
