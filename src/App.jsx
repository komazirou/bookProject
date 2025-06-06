import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Home from "./pages/Home";
import Layout from "./layout";
import Meal from "./pages/Meal";
import "./styles/App.css";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route
          element={
            <Layout />
          }
        >
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<Meal/>} />
        </Route>
      </Routes>
    </ContextProvider>
  );
};

export default App;
