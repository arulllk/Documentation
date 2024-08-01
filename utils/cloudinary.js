const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (filePath,folder) => {
    if(!filePath) return null;
    if (!fs.existsSync(filePath)) {
        console.log('File does not exists ', filePath);
        return null
    }

    try {
        const response  = await cloudinary.uploader.upload(filePath,{
            resource_type:"auto",
            folder:folder
        })
        console.log('file uploaded successfully ', response.url);
        fs.unlinkSync(filePath);
        return response;
    } catch (error) {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }        
        return null
    }
}

module.exports = { uploadOnCloudinary }