const { ethers } = require("hardhat");

const FEE = ethers.utils.parseEther("1");
const INTERVAL = 3610; // for production - 60 minutes
// const INTERVAL = 120; // for testing - 2 minutes
//
/**
 * aaaaaaaaaaaa
 */
module.exports = { INTERVAL, FEE };
