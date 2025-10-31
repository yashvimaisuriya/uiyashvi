/*import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { Pencil } from "lucide-react";

const CategoryTable = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Food" },
    { id: 3, name: "Grocery" },
    { id: 4, name: "Laptops" },
    { id: 5, name: "Mobile Phones" },
    { id: 6, name: "Sarees" },
  ]);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(categories.map((c) => c.id));
    } else {
      setSelected([]);
    }
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
    setSelected(selected.filter((item) => item !== id));
  };

  const handleDeleteSelected = () => {
    setCategories(categories.filter((c) => !selected.includes(c.id)));
    setSelected([]);
  };

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const allSelected =
    selected.length > 0 && selected.length === categories.length;

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-md shadow-sm">
        { Header }
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-300 p-4 gap-3">
          <h2 className="text-gray-800 text-lg text-center sm:text-left">
            <span className="font-semibold">Categories</span>
          </h2>
          <button className="bg-[#22364a] text-white px-4 py-2 rounded hover:bg-[#1b2d3f] transition text-sm w-full sm:w-auto">
            Add Category
          </button>
        </div>

        { Search Bar }
        <div className="flex flex-col sm:flex-row justify-end items-center px-4 sm:px-5 py-4 sm:py-6 gap-3">
          <input
            type="text"
            placeholder="Category Name"
            className="border rounded-md px-4 py-2.5 w-full sm:w-48 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-md text-sm md:text-base w-full sm:w-auto">
            Search
          </button>
        </div>

        { Table }
        <div className="overflow-x-auto p-2 sm:p-4">
          <table className="w-full border border-gray-200 text-xs sm:text-sm text-gray-700 min-w-[600px]">
            <thead>
              <tr className="bg-[#f2f5f8] text-[#22364a] font-semibold text-xs sm:text-sm uppercase tracking-wide border-b border-gray-200">
                <th className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    className="cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 text-left">SR. NO.</th>
                <th className="px-4 py-3 text-left">CATEGORY NAME</th>
                <th className="px-4 py-2 text-center">EDIT</th>
                <th className="px-4 py-3 text-center">DELETE</th>
                <th className="px-4 py-3 text-center">VIEW LEADS</th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className={`border-b border-gray-200 hover:bg-gray-50 ${
                      selected.includes(cat.id) ? "bg-gray-100" : ""
                    }`}
                  >
                    { Checkbox }
                    <td className="border border-gray-200 text-center py-3 px-2 sm:px-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(cat.id)}
                        onChange={() => handleCheckboxChange(cat.id)}
                        className="cursor-pointer"
                      />
                    </td>

                    { Serial Number }
                    <td className="border border-gray-200 px-2 sm:px-4 py-3 text-left">
                      {index + 1}
                    </td>

                    { Category Name }
                    <td className="border border-gray-200 px-2 sm:px-4 py-3 text-left truncate">
                      {cat.name}
                    </td>

                    { Edit Icon }
                    <td className="border border-gray-200 text-center">
                      <button className="text-gray-700 hover:text-blue-600 transition">
                        <Pencil className="inline-block h-4 w-4" />
                      </button>
                    </td>

                    { Delete Icon }
                    <td className="border border-gray-200 text-center">
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-gray-700 hover:text-red-600 transition"
                      >
                        <FaTrashCan className="inline-block h-4 w-4" />
                      </button>
                    </td>

                    { View Leads Button }
                    <td className="border border-gray-200 text-center">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-medium transition">
                        View Leads
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-4 text-gray-500 italic"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>

            { Delete Button Row }
            <tfoot>
              <tr>
                <td colSpan="6" className="border-t py-5 px-4 sm:px-6 text-left">
                  <button
                    onClick={handleDeleteSelected}
                    disabled={selected.length === 0}
                    className={`px-8 sm:px-10 py-2 rounded-md text-sm md:text-base ${
                      selected.length === 0
                        ? "bg-red-600 text-white cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    } w-full sm:w-auto`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;*/
