// backend/server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import connectDb from './utils/db.js';
import projectRoutes from './Routes/routes.project.js';
import userRoutes from "./Routes/routes.auth.js";


const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Ninja server is running..'));

// API routes
app.use('/api/projects', projectRoutes);
app.use("/api/users", userRoutes);

connectDb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
