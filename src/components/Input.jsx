import React, { useState } from "react";
import axios from "axios";

function Input() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState("");
  const [error, setError] = useState("");
  const [nulls, setNull] = useState("");
  const [tableData, setTableData] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleClick = async () => {
    if (!array) {
      setError("An address array is required");

      setTimeout(() => {
        setError("");
      }, 1000);

      return;
    }

    const addresses = array.split(",");

    try {
      const response = await axios.post(
        "http://localhost:5000/reward",
        {
          addresses,
        }
      );

      alert(response.data.message);

      setTableData(
  addresses.map((address, index) => ({
    index,
    address: address.trim(),
    balance: (index + 1) * 10,
        }))
    );

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    }
  };

  const handleInput = () => {
    if (!input) {
      setNull("An address is required");

      setTimeout(() => {
        setNull("");
      }, 1000);

      return;
    }

    const found = tableData.find(
      (item) => item.address.trim() === input.trim()
    );

    if (found) {
      setBalance(found.balance);
    } else {
      setBalance(0);
      alert("Address not found");
    }
  };

  return (
    <div className="lg:max-w-[50%] max-w-[95%] my-12 mx-auto flex flex-col item-center">

      {error && (
        <span className="text-red-400 text-base mb-3 px-3">
          {error}
        </span>
      )}

      <input
        className="input"
        placeholder="Separate addresses with a comma..."
        onChange={(e) => setArray(e.target.value)}
        required
      />

      <button className="button" onClick={handleClick}>
        Distribute Token
      </button>

      <div className="relative my-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">S/N</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Balance</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((x, i) => (
              <tr
                key={i}
                className="bg-white border-b hover:cursor-pointer hover:bg-gray-200"
              >
                <td className="px-6 py-4">{i + 1}</td>

                <td className="px-6 py-4">
                  {x.address}
                </td>

                <td className="px-6 py-4">
                  {x.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-3 my-12">
        <div className="col-span-2 flex flex-col">

          {nulls && (
            <span className="text-red-400 text-base mb-3 px-3">
              {nulls}
            </span>
          )}

          <input
            className="inputs py-1"
            placeholder="Enter an address"
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="button py-1"
            onClick={handleInput}
          >
            View Balance
          </button>

        </div>

        <div className="flex items-center">
          <h1 className="text-4xl font-bold text-gray-600 max-w-[50%] mx-auto">
            {balance}
          </h1>
        </div>
      </div>

    </div>
  );
}

export default Input;