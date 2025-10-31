/*import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { Pencil } from "lucide-react";

const LeadStatusTable = () => {
  const [leadStatus] = useState([
    { id: 1, status: "Closed" },
    { id: 2, status: "Open" },
    { id: 3, status: "Pending" },
    { id: 4, status: "Special" },
  ]);

  const [search, setSearch] = useState("");
  const [filteredStatus, setFilteredStatus] = useState(leadStatus);

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredStatus(leadStatus);
    } else {
      setFilteredStatus(
        leadStatus.filter((item) =>
          item.status.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  const handleDelete = (id) => {
    setFilteredStatus(filteredStatus.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-md shadow-sm">
        { Header }
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-300 p-3 sm:p-4 gap-3">
          <h2 className="text-gray-700 text-base sm:text-lg text-center sm:text-left">
            Lead <span className="font-semibold">Status</span>
          </h2>
          <button className="bg-[#22364a] text-white px-4 py-2 rounded hover:bg-[#1b2d3f] transition text-sm w-full sm:w-auto">
            Add Lead Status
          </button>
        </div>

        { Search }
        <div className="flex flex-col sm:flex-row justify-end items-center px-3 sm:px-5 py-4 sm:py-6 gap-3">
          <input
            type="text"
            placeholder="Lead Status"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 w-full sm:w-48 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 sm:px-6 py-2 rounded-md text-sm md:text-base w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        { Table }
        <div className="overflow-x-auto p-2 sm:p-4">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-gray-700">
            <thead>
              <tr className="bg-[#f2f5f8] text-[#22364a] font-medium text-[10px] sm:text-xs uppercase tracking-wide">
                <th className="p-2 sm:p-3 text-left w-[10%]">
                  <input type="checkbox" />
                </th>
                <th className="p-2 sm:p-3 text-left">SR. NO.</th>
                <th className="p-2 sm:p-3 text-left">LEAD STATUS</th>
                <th className="p-2 sm:p-3 text-center">EDIT</th>
                <th className="p-2 sm:p-3 text-center">DELETE</th>
                <th className="p-2 sm:p-3 text-center">VIEW LEAD</th>
              </tr>
            </thead>

            <tbody>
              {filteredStatus.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  { Checkbox / dash }
                  <td className="border border-gray-200 text-left text-gray-600 py-2 sm:py-3 px-2 sm:px-4">
                    {lead.status === "Special" ? (
                      <input type="checkbox" />
                    ) : (
                      "--"
                    )}
                  </td>

                  { SR. NO. }
                  <td className="border border-gray-200 px-2 sm:px-4 py-2 sm:py-3 text-left">
                    {lead.id}
                  </td>

                  { LEAD STATUS }
                  <td className="border border-gray-200 px-2 sm:px-4 py-2 sm:py-3 text-left truncate">
                    {lead.status}
                  </td>

                  { Edit Icon }
                  <td className="border border-gray-200 text-center">
                    {lead.status === "Special" ? (
                      <button className="text-gray-700 hover:text-blue-600 transition">
                        <Pencil className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </button>
                    ) : (
                      "--"
                    )}
                  </td>

                  { Delete Icon }
                  <td className="border border-gray-200 text-center">
                    {lead.status === "Special" ? (
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-gray-700 hover:text-red-600 transition"
                      >
                        <FaTrashCan className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </button>
                    ) : (
                      "--"
                    )}
                  </td>

                  { View Leads Button }
                  <td className="border border-gray-200 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-4 py-1 rounded text-[10px] sm:text-xs font-medium transition">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              { Delete Button Row }
              <tr>
                <td
                  colSpan="6"
                  className="border-t py-4 sm:py-5 px-3 sm:px-6 text-left"
                >
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-10 py-2 rounded text-xs sm:text-sm font-medium w-full sm:w-auto">
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
};

export default LeadStatusTable;*/
