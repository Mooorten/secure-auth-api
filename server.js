import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDatabase } from "./src/database/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();