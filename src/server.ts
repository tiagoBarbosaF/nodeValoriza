import express, { request, response } from "express";

const app = express();

// Routes
app.get("/test", (request, response) => {
    // Request => In
    // Response => Out
    return response.send("Hello first API in NODE");
});

app.post("/test-post", (request, response) => {
    return response.send("Hello method POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running, time to CODE"));