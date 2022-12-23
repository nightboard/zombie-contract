const { ethers } = require("hardhat");

async function main() {
  const HelloZombie = await ethers.getContractFactory("HelloZombie");
  const hello_zombie = await HelloZombie.deploy();
  console.log("Contract is deployed to address: ", hello_zombie.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
