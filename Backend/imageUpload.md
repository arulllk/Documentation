# File Upload Using Multer and Cloudinary

## Overview
This document provides a step-by-step guide on how to upload files in a Node.js environment using Multer for local storage and Cloudinary for cloud storage.

## Installation
Before proceeding, ensure you have installed the required dependencies:
```sh
npm install multer cloudinary dotenv fs
```

## Step 1: Setting Up Multer for Local File Upload

Multer is a middleware used for handling file uploads in Node.js applications. Below, we configure Multer to store uploaded files in a local directory. <br>
Create file named `multer.middleware.js` in middleware folder and add below codes

### Importing Multer
```js
const multer = require('multer');
```

### Configuring Storage for Local Uploads
```js
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/temp') // Directory where files will be stored
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname) // Keeping the original filename
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
```

### Explanation:
- **diskStorage**: Configures the destination and filename of uploaded files.
- **destination**: Defines the folder where uploaded files will be saved.
- **filename**: Ensures that uploaded files retain their original names.
- **upload**: Initializes Multer with the defined storage settings.

---

## step 2 adding the middleware to 
Need to import the upload in main `server.js` file

```js
 const upload = require('./middleware/multer.middleware');
 ```

 and then we can add the middleware to the router like the below code

 ```js
 app.use('/api/v1/blog',  upload.single('image'), blogRouter)
 ```


## Step 3: Uploading Files to Cloudinary
Cloudinary is a cloud-based media management service that simplifies image and video uploads.<br>
Create `uploadOnCloudinary.js`  file in utils folder and need to add below line in this file

### Importing Required Modules
```js
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
```

### Configuring Cloudinary
Create a `.env` file and add your Cloudinary credentials:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Now, configure Cloudinary in your application:
```js
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
```

### Uploading a File to Cloudinary
```js
const uploadOnCloudinary = async (filePath, folder) => {
    try {
        if (!filePath) return null;
        
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
            folder: folder
        });
        
        console.log('File uploaded successfully:', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(filePath); // Delete the local file if upload fails
        console.error('Cloudinary upload error:', error);
        return null;
    }
};

module.exports = { uploadOnCloudinary };
```

### Explanation:
- **uploadOnCloudinary**: Asynchronous function to upload files to Cloudinary.
- **filePath**: Local path of the file to be uploaded.
- **folder**: Cloudinary folder where the file should be stored.
- **resource_type: "auto"**: Detects the file type automatically.
- **fs.unlinkSync(filePath)**: Deletes the local file if the upload fails, preventing unnecessary storage consumption.

---


## Step 4: use the utility file in blog controller
#### Importing uitilty file
```js
const {uploadOnCloudinary} = require('../utils/cloudinary');  
```
#### Adding required lines
```js
const imagePath = req.file.path3
const result = await uploadOnCloudinary(imagePath,'Blog'); 
const newBlog = new Blog({title , content, topic, seoTitle, seoDescription, altImage , slug , image:result.secure_url}) 
await newBlog.save();
```



## Conclusion
1. We set up **Multer** to store uploaded files locally.
2. We configured **Cloudinary** to store files in the cloud.
3. We created an **upload function** to handle cloud uploads and clean up local storage.

Now, you can integrate these modules into your Express.js application to handle file uploads seamlessly. 🚀

