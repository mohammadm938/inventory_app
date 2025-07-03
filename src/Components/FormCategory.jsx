import { useState } from "react";

const FormCategory = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryData, setCategoryData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoryData);
    setCategoryData({ title: "", description: "" });
  };

  return (
    <div className="flex flex-col gap-6 ">
      <h2
        className={`"text-xl text-slate-300 font-bold mb-2" ${
          !isShow && "hidden"
        }`}
      >
        Add New Category
      </h2>

      <form
        action="#"
        className={`"flex flex-col gap-6 space-y-5 bg-slate-700 p-6 rounded-lg shadow-lg" ${
          !isShow && "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white font-medium">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            name="title"
            placeholder="Enter category name"
            className="p-3 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={categoryData.title}
            onChange={(e) =>
              setCategoryData({ ...categoryData, title: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-white font-medium">
            Category Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter category description"
            className="p-3 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={categoryData.description}
            onChange={(e) =>
              setCategoryData({ ...categoryData, description: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className="px-6 py-2 rounded-lg bg-slate-600 text-white hover:bg-slate-500 transition-colors"
            onClick={() => setIsShow(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Add Category
          </button>
        </div>
      </form>
      <button
        className={`"flex justify-center items-center text-slate-500 font-bold hover:text-slate-600 transition-colors hover:cursor-pointer " ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        Add new Category
      </button>
    </div>
  );
};

export default FormCategory;
