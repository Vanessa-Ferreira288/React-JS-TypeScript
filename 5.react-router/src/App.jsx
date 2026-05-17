import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login.jsx";
import TaskDetails from "./components/TaskDetails";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import ItemDetails from "./components/ItemDetails";
import ListItem from "./components/ListItem";


const App = () => {
  
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Descrição do item 1",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Descrição do item 2",
    },
  ];
 
  return (
    <div>
      {/* 12.1 Setup e configuração inicial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          {/* 12.2 NavLink */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contato
            </NavLink>
          </li>
          {/* 12.3 useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 12.5 Rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* 12.4 Roteamento dinâmico */}
      <div>
        <h2>Tarefas</h2>
        <Link to={`/tasks/1`}>Tarefa 1</Link>
        <Link to={`/tasks/2`}>Tarefa 2</Link>
        <Link to={`/tasks/3`}>Tarefa 3</Link>
      </div>

      {/* 12.6 404 */}
      <div>
        <h2>Itens</h2>

        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />

        <Route path="/items/:id" element={<ItemDetails />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
  );
};

export default App;