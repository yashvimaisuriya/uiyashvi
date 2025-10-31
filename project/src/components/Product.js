/*import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductTable() {
  const [products, setProducts] = useState([
    { id: 1, name: "Bandhani" },
    { id: 2, name: "Galaxy S1" },
    { id: 3, name: "Galaxy S2" },
    { id: 4, name: "Lenovo Ideapad" },
  ]);

  const [selected, setSelected] = useState([]);

  // ✅ Handle single delete
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // ✅ Handle Select All checkbox
  const handleSelectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map((product) => product.id));
    }
  };

  // ✅ Handle individual select
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-[90%] md:w-[95%] xl:w-[90%] bg-white rounded-lg shadow-md border border-gray-200">
      
        <div className="flex items-center justify-between px-6 py-3 border-b bg-gray-50 rounded-t-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-2 rounded-md text-lg md:text-lg">
            Add Product
          </button>
        </div>

        {/* Search Bar }
       <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3 bg-white">
          <input
            type="text"
            placeholder="Product Name"
            className="border rounded-md px-4 py-2 w-full sm:w-60 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md text-base w-full sm:w-auto">
            Search
          </button>
        </div>

        {/* Table }
       <div className="overflow-x-auto px-6 pb-6">
          <table className="w-full border-x border-b border-gray-200 text-sm text-gray-700 bg-white">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="w-[6%] py-2 text-left px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={selected.length === products.length && products.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="w-[6%] py-2 text-left font-semibold px-4">
                  SR. NO.
                </th>
                <th className="w-[15%] py-2 text-left font-semibold px-4">
                  PRODUCT NAME
                </th>
                <th className="w-[5%] py-2 text-center font-semibold">EDIT</th>
                <th className="w-[10%] py-2 text-center font-semibold">DELETE</th>
                <th className="w-[10%] py-2 text-center font-semibold">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            {/* Table Body/}
           <tbody className="text-sm">
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="border py-1.5 text-left px-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-600"
                      checked={selected.includes(product.id)}
                      onChange={() => handleSelect(product.id)}
                    />
                  </td>
                  <td className="border py-1.5 text-left px-6">{index + 1}</td>
                  <td className="border py-1.5 px-4 text-left">{product.name}</td>
                  <td className="border py-1.5 text-center">
                    <button className="text-gray-600 hover:text-blue-600">
                      <Pencil size={16} />
                    </button>
                  </td>
                  <td className="border py-1.5 text-center">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                  <td className="border py-1.5 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              {/* Delete Button Row }
              <tr>
                <td colSpan="6" className="border-t py-4 px-6 text-left bg-white">
                  <button className="bg-red-500 hover:bg-red-700 text-white px-10 py-2 rounded-md text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}*/
