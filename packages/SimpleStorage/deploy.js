const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "0xab4d40af1155cae1ec11f3f2fa6797a8ba8690e420c8779c7e2dc13f76dacebb",
    provider
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");

  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main();
