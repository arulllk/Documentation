## Image Upload

**Step-1 : Importing**

```js
import { useFormik } from 'formik';
import * as yup from 'yup';
```

**Step-2 : Create Schema in Yup**
- this expression  can be on seperate folder 
```js
const sampleSchema = yup.object().shape({
    image: yup
      .mixed()
      .nullable() // Allowed the filed to be intiallly null
      .required('Please add an image')
      .test(
        'fileSize',
        'File size is too large. Maximum size is 2MB.',
        (value) => value && value.size <= 2000000; // 2MB limit
      )
      .test(
        'fileType',
        'Unsupported file type. Please upload a JPEG, PNG, or GIF file.',
        (value) =>
          value &&
          ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      ),
});
```
**nullable() Explanation**
```js
  image: yup.nullable()
``` 
` image: yup.nullable() : ` By doing this we can intitialize this property null other wise we will get image cannot be null error


### [yup.mixed() Mixed Explanation](/FrontEnd/yup_mixed.md)


### [yup.test() Yup Test Explanation](/FrontEnd/yup_test.md)

### [separate validation function](/FrontEnd/SeparateValidationFn.md) 

<br> <br>


**Step-3 : How to set file preview using custom handle function**

  - ### step- 3 A : 
    ```js
      const [filePreview, setFilePreview] = useState(null);
    ```


  - ### step- 3 B:   Create custom handle file change function
    ```js    
    const handleFileChange = (event) => {
      const file = event.currentTarget.files[0];
      formik.setFieldValue('image', file); // Set file object in formik state
      if (file) {
        setFilePreview(URL.createObjectURL(file)); // Create a preview URL for the image
      }
      //manually set the field as touch
      formik.setFieldTouched('image',true,true)   
    };
    ```

    - #### Get the selected file:

      ```js
      const file = event.currentTarget.files[0];
      ```
     

      - `event.currentTarget.files[0]:` 
        - This accesses the first file from the list of selected files. files is an array-like object returned by an `<input type="file" /> ` and  `0` gets the first file (since users can upload multiple files in some cases). 
        - This line captures the first file selected by the user (assuming single file uploads).

    - #### Set the file in Formik's state:
      ```js
      formik.setFieldValue('image', file);
      ```
      - `formik.setFieldValue`: This is a Formik method used to manually set the value of a field in Formik's form state.
      - `image`: The name of the field in the Formik form (likely referring to a file input in the form).
      - `file`: The file object (retrieved in step 1) is assigned to the image field in Formik.
      - `Purpose`: It ensures that Formik knows the file has been selected, so the form can process it (e.g., send the file in a submission).