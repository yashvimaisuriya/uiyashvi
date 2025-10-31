import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const LeadSource = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const leads = [
    { id: 1, name: "Facebook" },
    { id: 2, name: "Google" },
    { id: 3, name: "Instagram" },
    { id: 4, name: "Internet" },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(!selectAll ? leads.map((l) => l.id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex justify-center mt-6 px-3">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-[1300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300 flex-wrap gap-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            Lead Source
          </h2>
          <button className="bg-[#0d223f] text-white px-4 py-2 rounded-md hover:bg-[#1b3353] transition duration-200 text-sm md:text-base">
            Add Lead Source
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center p-4 gap-3">
          <input
            type="text"
            placeholder="Lead Source"
            className="rounded-md px-3 py-2 w-full sm:w-[150px] focus:outline-none text-sm border border-gray-300"
          />
          <button className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 w-full sm:w-auto transition duration-200 text-sm md:text-base">
            Search
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-3 md:p-4">
          {/* Desktop Table */}
          <table className="hidden sm:table w-full text-sm text-gray-700 border-x border-b border-gray-300">
            {/* 🧾 THEAD — NO BORDER */}
            <thead className="bg-gray-300">
              <tr>
                <th className="px-3 md:px-4 py-2 text-left font-semibold">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="accent-blue-600"
                  />
                </th>
                <th className="px-3 md:px-4 py-2 text-left font-semibold">
                  SR. NO.
                </th>
                <th className="px-3 md:px-4 py-2 text-left font-semibold">
                  LEAD SOURCE
                </th>
                <th className="px-3 md:px-4 py-2 text-center font-semibold">
                  EDIT
                </th>
                <th className="px-3 md:px-4 py-2 text-center font-semibold">
                  DELETE
                </th>
                <th className="px-3 md:px-4 py-2 text-center font-semibold w-[20%]">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            {/* 🧍‍♂️ TBODY — BORDERS KEPT */}
            <tbody>
              {leads.map((l, index) => (
                <tr
                  key={l.id}
                  className="hover:bg-gray-50 text-left border-t border-gray-300"
                >
                  <td className="px-3 md:px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(l.id)}
                      onChange={() => handleSelectRow(l.id)}
                      className="accent-blue-600"
                    />
                  </td>
                  <td className="px-3 md:px-4 py-2 border-l border-gray-300 font-medium">
                    {index + 1}
                  </td>
                  <td className="px-3 md:px-4 py-2 border-l border-gray-300">
                    {l.name}
                  </td>
                  <td className="px-3 md:px-4 py-2 border-l border-gray-300 text-center">
                    <button className="text-gray-700 hover:text-blue-600 transition-transform duration-200 hover:scale-110 flex justify-center items-center w-full">
                      <Pencil size={18} />
                    </button>
                  </td>
                  <td className="px-3 md:px-4 py-2 border-l border-gray-300 text-center">
                    <button className="text-gray-700 hover:text-red-600 transition-transform duration-200 hover:scale-110 flex justify-center items-center w-full">
                      <Trash2 size={18} />
                    </button>
                  </td>
                  <td className="px-3 md:px-4 py-2 border-l border-gray-300 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition duration-200 mx-auto flex justify-center items-center">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              {/* Delete Button Row */}
              <tr className="border-t border-gray-300">
                <td colSpan="6" className="px-4 py-3 text-left">
                  <button className="bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 transition duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 📱 Mobile View */}
          <div className="sm:hidden flex flex-col gap-4">
            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white flex justify-between items-center">
              <span className="font-semibold text-gray-800 text-sm">
                SELECT ALL
              </span>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4 accent-blue-600"
              />
            </div>

            {leads.map((l, index) => (
              <div
                key={l.id}
                className="border border-gray-300 rounded-lg bg-white shadow-md"
              >
                <div className="flex justify-between px-4 py-2 border-b border-gray-300">
                  <span className="font-semibold text-gray-800">SR NO:</span>
                  <span>{index + 1}</span>
                </div>
                <div className="flex justify-between px-4 py-2 border-b border-gray-300">
                  <span className="font-semibold text-gray-800">
                    Lead Source:
                  </span>
                  <span>{l.name}</span>
                </div>
                <div className="flex justify-between px-4 py-2 border-b border-gray-300">
                  <span className="font-semibold text-gray-800">Edit:</span>
                  <Pencil size={18} className="text-gray-700" />
                </div>
                <div className="flex justify-between px-4 py-2 border-b border-gray-300">
                  <span className="font-semibold text-gray-800">Delete:</span>
                  <Trash2 size={18} className="text-gray-700" />
                </div>
                <div className="p-3">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium w-full transition duration-200">
                    View Leads
                  </button>
                </div>
              </div>
            ))}

            <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-700 transition duration-200 w-fit self-start mt-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSource;
