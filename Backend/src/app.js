const express = require("express");
const cors = require("cors");
const passport = require("passport");
const connectDB = require("./config/db");
const path = require("path");
const providerRoutes = require("./routes/ProviderRoutes");
// Import routes
const authRoutes = require("./routes/auth");


// Initialize app
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(
  cors({
    origin: "", // Your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
require("./config/passport");



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/providers", providerRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? {} : err,
  });
});

module.exports = app;
