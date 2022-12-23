const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloZombie.sol/HelloZombie.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network = 'goerli', API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const helloZombieContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const _zombies = await helloZombieContract.zombies(0);
  // await helloZombieContract.createRandomZombie("First Zombie");
  console.log("Zombies: ", _zombies);

  console.log("Adding zombies");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
