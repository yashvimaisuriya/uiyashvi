/*import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedRows, setSelectedRows] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

   Filter logic
  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

   Select all toggle
  const handleSelectAll = () => {
    if (selectedRows.length === filteredCategories.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredCategories.map((c) => c.id));
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  const handleEdit = (id, currentName) => {
    setEditId(id);
    setEditValue(currentName);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditValue("");
  };

  const handleUpdate = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, name: editValue } : cat
      )
    );
    setEditId(null);
    setEditValue("");
  };

  const handleDelete = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
  };

  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one category to delete.");
      return;
    }
    setCategories((prev) => prev.filter((c) => !selectedRows.includes(c.id)));
    setSelectedRows([]);
  };

  const handleSaveCategory = () => {
    if (newCategory.trim() === "") {
      alert("Please enter a category name.");
      return;
    }

    const newEntry = {
      id: categories.length + 1,
      name: newCategory.trim(),
    };

    setCategories([...categories, newEntry]);
    setNewCategory("");
    setShowModal(false);
  };

  return (
    <div className="flex justify-center mt-6 px-3">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-[1300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        { Header }
        <div className="flex justify-between items-center p-4 border-b border-gray-300 flex-wrap gap-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            Categories
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0d223f] text-white px-4 py-2 rounded-md hover:bg-[#1b3353] transition duration-200 text-sm md:text-base"
          >
            Add Category
          </button>
        </div>

        { Search Bar }
        <div className="flex justify-end items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Category Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => {}}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Search
            </button>
          </div>
        </div>

        { Table }
        <div className="overflow-x-auto p-3 md:p-4">
          <table className="w-full text-sm text-gray-700 border-x border-b border-gray-300 table-auto">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-[60px]">
                  <input
                    type="checkbox"
                    checked={
                      filteredCategories.length > 0 &&
                      selectedRows.length === filteredCategories.length
                    }
                    onChange={handleSelectAll}
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 text-left font-semibold">SR. NO.</th>
                <th className="px-4 py-3 text-left font-semibold">
                  CATEGORY NAME
                </th>
                <th className="px-4 py-3 text-center font-semibold">EDIT</th>
                <th className="px-4 py-3 text-center font-semibold">DELETE</th>
                <th className="px-4 py-3 text-center font-semibold w-[20%]">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className="hover:bg-gray-50 text-left border-t border-gray-300"
                  >
                    <td className="px-4 py-3 text-center align-middle">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(cat.id)}
                        onChange={() => handleSelectRow(cat.id)}
                        className="w-5 h-5 accent-blue-600 cursor-pointer"
                      />
                    </td>

                    <td className="px-4 py-3 border-l border-gray-300 font-medium align-middle">
                      {index + 1}
                    </td>

                    <td className="px-4 py-3 border-l border-gray-300 align-middle">
                      {editId === cat.id ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="border border-gray-300 rounded-md px-2 py-1 w-56 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      ) : (
                        cat.name
                      )}
                    </td>

                    <td className="px-4 py-3 border-l border-gray-300 text-center align-middle">
                      {editId === cat.id ? (
                        <div className="flex justify-center gap-3 font-semibold">
                          <button
                            onClick={() => handleUpdate(cat.id)}
                            className="text-green-700"
                          >
                            Update
                          </button>
                          <span>|</span>
                          <button
                            onClick={handleCancel}
                            className="text-red-600"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(cat.id, cat.name)}
                          className="text-gray-700 hover:text-blue-600 transition-transform duration-200 hover:scale-110 flex justify-center items-center w-full"
                        >
                          <Pencil size={18} />
                        </button>
                      )}
                    </td>

                    <td className="px-4 py-3 border-l border-gray-300 text-center align-middle">
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-gray-700 hover:text-red-600 transition-transform duration-200 hover:scale-110 flex justify-center items-center w-full"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>

                    <td className="px-4 py-3 border-l border-gray-300 text-center align-middle">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition duration-200 mx-auto flex justify-center items-center">
                        View Leads
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-4 border-t border-gray-300"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}

              <tr className="border-t border-gray-300">
                <td colSpan="6" className="px-4 py-3 text-left">
                  <button
                    onClick={handleDeleteSelected}
                    className="bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      { Modal }
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[600px] mt-[10px]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="border-b px-5 py-3">
                <h3 className="text-center text-gray-800 font-semibold text-base">
                  Add Category
                </h3>
              </div>

              <div className="p-6 text-left bg-[#e9edf2]">
                <label className="block mb-2 text-gray-700 font-semibold">
                  Category Name
                </label>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-[70%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none bg-white focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="border-t px-5 py-3 flex justify-end gap-3">
                <button
                  onClick={handleSaveCategory}
                  className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition duration-200"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-gray-400 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-100 transition duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryTable;*/
