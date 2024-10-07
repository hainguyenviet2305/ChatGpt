import { Outlet } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
      <div className="App">
        <ToastContainer />
          <Navbar />
          <Outlet />
      </div>
  );
};

export default App;
