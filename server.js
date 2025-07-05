// Express backend to handle smart contract intents

const express = require("express");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
app.use(express.json());

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

app.post("/execute", async (req, res) => {
    const { contractAddress, abi, functionName, args } = req.body;

    try {
        const contract = new ethers.Contract(contractAddress, abi, wallet);
        const tx = await contract[functionName](...args);
        await tx.wait();
        res.status(200).json({ status: "success", txHash: tx.hash });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

app.listen(4000, () => console.log("🟢 Backend running on http://localhost:4000"));
