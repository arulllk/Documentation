# Steps to Connect Database and Configure Server using Express and Mongoose

## Connecting to Database

### Step 1: Connection String
#### **Create a .env file** and add the connection string:
```env
MONGO_URI = mongodb+srv://<userId>:<password>@nodeexpressprojects.0zp0qgr.mongodb.net/<DOCUMENTNAME>?retryWrites=true&w=majority

JWT_SECRET = sZmM0fBr1yjkkoSguaNDCWFsrIMX371e
JWT_LIFETIME = 30d
```


- **MONGO_URI**: Connection string for MongoDB Atlas.
- **JWT_SECRET & JWT_LIFETIME**: Used for authentication and security.

#### **Load Environment Variables in Your Project**
```javascript
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });
```


***or simply use below line***

```javascript
require('dotenv').config();
```

## Step 2: Create Database Connection File
### **Inside `db` Folder, Create `connection.js`**
```javascript
const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true    
        })    
        .then(() => console.log('Connected to db'))
        .catch(err => console.log(err));
};

module.exports = connectDB;
```
### **Explanation:**
1. Import Mongoose.
2. Define `connectDB` function that accepts a `url` parameter.
3. Export the function so it can be used elsewhere.

---

## Step 3: Configure Server (Inside `server.js`)
### **Step 3A: Import Dependencies and Connect Database**
```javascript
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
require('express-async-errors');
```
- **`express`**: Framework for creating the server.
- **`connectDB`**: Importing our database connection function.
- **`dotenv` & `express-async-errors`**: Required for environment variables and error handling.

### **Step 3B: Create `start()` Function to Connect DB and Start Server**
```javascript
const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
```
---

## Step 4: Add Middleware
### **Parsing JSON Data**
```javascript
app.use(express.json());
```
### **Create Custom Middleware (Inside `middleware` Folder)**
#### **Not Found Middleware (`not-found.js`)**
```javascript
const notFound = (req, res) => res.status(404).send('Route does not exist');
module.exports = notFound;
```
#### **Error Handler Middleware (`error-handler.js`)**
```javascript
const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

module.exports = errorHandlerMiddleware;
```
### **Use Middleware in `app.js`**
```javascript
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(notFoundMiddleware);
app.use(errorMiddleware);
```
---

## Step 5: Set Up Routes and Controllers
### **Creating Controllers (Inside `controllers` Folder)**
```javascript
const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'Products testing static route' });
};

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'Products testing route' });
};

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};

module.exports = { getAllProductsStatic, getAllProducts };
```
### **Creating Routes (Inside `routes` Folder)**
```javascript
const express = require('express');
const router = express.Router();
const { getAllProductsStatic, getAllProducts } = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
```
---

## Step 6: Register Routes in `app.js`
```javascript
const productRouter = require('./routes/products');
app.use('/api/v1/products', productRouter);
```
---

## Step 7: Add Model and Schema
### **Example Schema (Inside `models` Folder)**
```javascript
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', ProductSchema);
```
---

## 🎉 Final Steps
1. **Run the server**:
   ```sh
   node app.js
   ```
2. **Server Output**:
   ```sh
   Server is listening on port 5000...
   Connected to db
   ```
3. **Test API Endpoints** using Postman or browser:
   ```sh
   GET http://localhost:5000/api/v1/products
   ```

🎉 **You have successfully set up Express, Mongoose, and MongoDB!** 🚀

