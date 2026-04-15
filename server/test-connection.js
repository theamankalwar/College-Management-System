import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Testing MongoDB Atlas connection...");
console.log(
  "Connection string:",
  process.env.MONGODB_URI.replace(/:[^:@]+@/, ":****@"),
);

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Connection failed:");
    console.error("Error:", error.message);

    if (error.message.includes("ENOTFOUND")) {
      console.log("\n💡 Possible issues:");
      console.log("   - Check your internet connection");
      console.log("   - Verify the cluster URL is correct");
    } else if (error.message.includes("Authentication failed")) {
      console.log("\n💡 Possible issues:");
      console.log("   - Check your username and password");
      console.log("   - Make sure password has no < > brackets");
      console.log("   - URL encode special characters in password");
    } else if (error.message.includes("timed out")) {
      console.log("\n💡 Possible issues:");
      console.log("   - Your IP address is not whitelisted");
      console.log("   - Go to MongoDB Atlas → Network Access");
      console.log("   - Add your IP or allow 0.0.0.0/0 (all IPs)");
    }

    process.exit(1);
  });
