# Hackerearth-hackathon-smart-assistance
# 🤖 AI-Powered Smart Contract Assistant

An AI-driven assistant that allows users to interact with Ethereum smart contracts via natural language.

## 🌐 Live Demo (Localhost Setup)
1. Run the backend using Node.js & Ethers.js
2. Open frontend React app
3. Input natural language commands like:
   - "Stake 0.5 ETH"
   - "Transfer my NFT to Alice"
   - "Vote yes on DAO proposal"

## 💡 Features
- Natural language → ABI transaction mapping
- `eth_call` safety simulation
- Wallet connection (MetaMask, WalletConnect)
- Ethers.js integration with testnet (BlockDAG / Ethereum)

## 🧱 Tech Stack

| Layer     | Technology                         |
|-----------|-------------------------------------|
| AI Model  | Mistral 7B / LLaMA, HuggingFace     |
| Frontend  | React.js, Tailwind CSS              |
| Backend   | Node.js, Express.js, ethers.js      |
| Blockchain| BlockDAG Testnet / Ethereum         |

## 🛠️ Setup Instructions

### 1. Backend
```bash
cd backend
npm install
# Add your .env with PRIVATE_KEY and RPC_URL
node server.js
