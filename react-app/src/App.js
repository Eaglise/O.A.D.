import logo from './logo.svg';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';
import TasksPage from "./pages/TasksPage";

function App() {
  return (
      <BrowserRouter basename="/" >
        <div></div>
        <div>
          <Routes>
            <Route
                path="/"
                element={
                <TasksPage />
            }/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
