import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MyRoutes } from "./router/routes";

function App() {
  return (
    <>
      <Navbar />
      <MyRoutes />
    </>
  );
}

export default App;
