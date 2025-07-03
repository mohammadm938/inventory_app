const FormProduct = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl text-white font-bold mb-6">Add New Product</h2>
      <form className="bg-slate-700 p-6 rounded-xl shadow-lg flex flex-col gap-y-6">
        <div className="space-y-2">
          <label
            htmlFor="product-title"
            className="block text-sm font-medium text-slate-300"
          >
            Product Title
          </label>
          <input
            type="text"
            name="product-title"
            id="product-title"
            className="w-full px-4 py-3 bg-slate-600 rounded-lg border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter product title"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="product-quantity"
            className="block text-sm font-medium text-slate-300"
          >
            Quantity
          </label>
          <input
            type="number"
            name="product-quantity"
            id="product-quantity"
            className="w-full px-4 py-3 bg-slate-600 rounded-lg border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter quantity"
            min="0"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="product-category"
            className="block text-sm font-medium text-slate-300"
          >
            Category
          </label>
          <select
            name="product-category"
            id="product-category"
            className="w-full px-4 py-3 bg-slate-600 rounded-lg border border-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
          >
            <option value="" disabled selected>
              Select a category
            </option>
            {/* Options will be added dynamically */}
          </select>
        </div>

        <div className="flex items-center gap-x-4 mt-4">
          <button
            id="add-new-product"
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-3 px-4 transition-colors font-medium"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
