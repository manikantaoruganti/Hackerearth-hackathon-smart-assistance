// backend/intent_mapper.js

const intentDB = {
  "stake_eth": {
    contractAddress: "0xStakingContract",
    functionName: "stake",
    abi: [/* your ABI here */]
  },
  "transfer_nft": {
    contractAddress: "0xNFTContract",
    functionName: "safeTransferFrom",
    abi: [/* your ABI here */]
  }
};

function mapIntentToContract(intentKey, args) {
  const config = intentDB[intentKey];
  if (!config) throw new Error("Intent not supported");

  return {
    contractAddress: config.contractAddress,
    functionName: config.functionName,
    abi: config.abi,
    args: args
  };
}

module.exports = { mapIntentToContract };
