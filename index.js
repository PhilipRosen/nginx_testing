import express from "express";

// --- Configuration ---
// Define the ports for the two servers
// You could also use environment variables: process.env.PORT1 || 3000
const PORT1 = 3000;
const PORT2 = 3001;

// --- Server 1 Setup ---
const app1 = express(); // Create the first Express application instance

// Define a simple route for the root path on Server 1
app1.get("/", (req, res) => {
  res.send(`Hello from Server 1 running on port ${PORT1}!`);
});

// Add another example route for Server 1
app1.get("/info", (req, res) => {
  res.json({ server: "Server 1", port: PORT1, status: "Running" });
});

// Start Server 1 and listen on its specified port
app1.listen(PORT1, () => {
  console.log(`✅ Server 1 is listening on http://localhost:${PORT1}`);
});

// --- Server 2 Setup ---
const app2 = express(); // Create the second Express application instance

// Define a simple route for the root path on Server 2
app2.get("/", (req, res) => {
  res.send(`Greetings from Server 2 operating on port ${PORT2}!`);
});

// Add another example route for Server 2
app2.get("/status", (req, res) => {
  res.send(`Server 2 (Port ${PORT2}) is UP!`);
});

// Start Server 2 and listen on its specified port
app2.listen(PORT2, () => {
  console.log(`✅ Server 2 is listening on http://localhost:${PORT2}`);
});

// --- Keep Node process running ---
console.log("🚀 Two Express servers initiated. Press Ctrl+C to stop.");

// Optional: Handle process termination gracefully (though not strictly required for this example)
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down servers...");
  // You could add cleanup logic here if needed
  process.exit(0);
});
