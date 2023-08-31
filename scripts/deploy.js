const hre = require("hardhat");

async function main() {
  
  const [deployer] = await ethers.getSigners();

  console.log("Deploying token contract with the account:", deployer.address);

  const token = await ethers.deployContract("MySwissToken");

  console.log("New Swisstronik token address:", await token.getAddress());
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
