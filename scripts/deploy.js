import hre from "hardhat";

const FandE = await hre.ethers.deployContract("FunctionsAndErrors");
await FandE.waitForDeployment();

console.log(`${await FandE.getAddress()}`);
