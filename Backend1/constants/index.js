const { ethers } = require("hardhat");

const FEE = ethers.utils.parseEther("1");
// const INTERVAL = 3600; // for production - 60 minutes
const INTERVAL = 120; // for testing - 2 minutes

module.exports = { INTERVAL, FEE };