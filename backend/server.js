// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
import connectDb from './utils/db.js';
import projectRoutes from './Routes/routes.project.js';
import userRoutes from "./Routes/routes.auth.js";
import contactRoutes from "./Routes/routes.contact.js";
import memberRoutes from "./Routes/routes.member.js";
import { errorHandler, notFound } from './middleware/errorHandler.js';
import { generalRateLimit } from './middleware/rateLimiter.js';

const app = express();

// Trust proxy for rate limiting (if behind reverse proxy)
app.set('trust proxy', 1);

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://ninja-junction.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

// Handle preflight
app.options("*", cors());

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Apply general rate limiting to all routes
app.use(generalRateLimit);

app.get('/', (req, res) => res.send('Ninja server is running..'));

// API routes
app.use('/api/projects', projectRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/members", memberRoutes);

// Error handling middleware (must be after routes)
app.use(notFound);
app.use(errorHandler);

connectDb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
