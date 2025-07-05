// backend/simulate.js
const { ethers } = require("ethers");

async function simulateTransaction({ contractAddress, abi, functionName, args, providerUrl }) {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const contract = new ethers.Contract(contractAddress, abi, provider);
  try {
    const result = await contract.callStatic[functionName](...args);
    return { success: true, result };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = { simulateTransaction };
