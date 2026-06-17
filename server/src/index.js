import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import adminAuthRoutes from './routes/adminAuth.js';
import roomRoutes from './routes/rooms.js';
import inquiryRoutes from './routes/inquiries.js';
import uploadRoutes from './routes/upload.js';
import aiRoutes from './routes/ai.js';
import analyticsRoutes from './routes/analytics.js';

// Import security middleware
import { securityHeaders, corsOptions, apiLimiter } from './middleware/security.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Apply security headers (Helmet)
app.use(securityHeaders);

// Apply CORS with restrictive origin policy
app.use(cors(corsOptions));

// Apply general API rate limiter
app.use('/api', apiLimiter);

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
// Auth routes (login, logout, refresh)
app.use('/api/admin/auth', adminAuthRoutes);

// Room routes - public routes accessible, admin routes protected by JWT middleware inside
app.use('/api/rooms', roomRoutes);

// Inquiry routes - public routes accessible, admin routes protected by JWT middleware inside
app.use('/api/inquiries', inquiryRoutes);

// Public routes
app.use('/api/upload', uploadRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/analytics', analyticsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Windsor API running on port ${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
