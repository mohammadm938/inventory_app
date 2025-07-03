import { useState } from "react";
import FormCategory from "./Components/FormCategory";
import FormProduct from "./Components/FormProduct";
import Navbar from "./Components/Navbar";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Navbar />
        <div className="mt-8 space-y-8">
          <FormCategory setCategories={setCategories} />
          <FormProduct categories={categories} setProducts={setProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
