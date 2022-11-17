const { run } = require("hardhat");

async function main() {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: "0x28eac0cab251c58ceec6dad180ce7e23d10c9716",
      constructorArguments: [
        "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        "2607",
        "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f",
        "120",
        "100000000000000000",
        "500000",
      ],
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
