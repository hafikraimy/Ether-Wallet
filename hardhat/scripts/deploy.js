const { ethers } = require("hardhat");

async function main() {
  const EtherWalletContract = await ethers.getContractFactory("EtherWallet");

  const etherWalletContract = await EtherWalletContract.deploy();

  await etherWalletContract.deployed();

  console.log("EtherWallet contract deployed to: ", etherWalletContract.address);

  console.log("sleeping...");

  await sleep(10000); 
  
  await hre.run("verify:verify", {
    address: etherWalletContract.address,
    constructorArguments: [],
  });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
