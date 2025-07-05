import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleExecute = async () => {
    const res = await fetch("http://localhost:4000/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contractAddress: "<address>",
        abi: [],
        functionName: "transfer",
        args: [input],
      }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Smart Contract Assistant</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-2 w-full mb-2"
        placeholder="e.g., Transfer NFT to Alice"
      />
      <button
        onClick={handleExecute}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Execute
      </button>
      <pre className="mt-4">{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default App;
