import "./App.css";
import CreateProduct from "./components/CreateProduct.jsx";
import GetProducts from "./components/GetProduct.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const reloadProducts = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-tagline">Fast, simple inventory CRUD</p>
        <h1>Inventory Management System</h1>
      </header>

      <div className="panel-grid">
        <section className="panel">
          <h2>Create</h2>
          <CreateProduct reloadProducts={reloadProducts} />
        </section>

        <section className="panel">
          <h2>Search</h2>
          <SearchProduct />
        </section>

        <section className="panel">
          <h2>Update</h2>
          <UpdateProduct />
        </section>

        <section className="panel">
          <h2>Delete</h2>
          <DeleteProduct />
        </section>
      </div>

      <section className="list-panel">
        <h2>Product List</h2>
        <GetProducts refresh={refresh} />
      </section>
    </div>
  );
}

export default App;