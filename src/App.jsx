import { useState } from "react";
import FormCategory from "./Components/FormCategory";
import FormProduct from "./Components/FormProduct";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

function App() {
  const [categories, setCategories] = useState([
    {
      title: "Digital Products",
      description: "Digital products",
      createdAt: "2025-07-03T22:04:51.134Z",
      id: 1751580291134,
    },
  ]);
  const [products, setProducts] = useState([
    {
      title: "Laptop",
      quantity: 4,
      category: "1751580291134",
      createdAt: "2025-07-03T22:06:44.350Z",
      id: 1751580404350,
    },
  ]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Navbar />
        <div className="mt-8 space-y-8">
          <FormCategory setCategories={setCategories} />
          <FormProduct categories={categories} setProducts={setProducts} />
        </div>
        <div className="mt-8 space-y-8">
          <ProductList
            categories={categories}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
