// import libraries 
import express from 'express';
// import functions
import loginRoute from './routes/login.js';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middleware/error.js';
const port = 5173;
// init app
const app = express();
app.use(express.json());
// connect to DB
connectDB();
// use loginRoute
app.use('/', loginRoute);
// error handling
app.use(errorMiddleware);
// listen to port
app.listen(port, () => {
    console.log(`server is working on port http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map