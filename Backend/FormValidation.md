# How to do form validation #

### Install Yup and Formik plugins



#### Step 1  - Making Schema 
- Making Schema in a separate folder `named Schemas` we can have a multiple schema in a one folder and we can import all the schema inside `index.js` file

    #### Sample Schema code (Add Blog) 
    ```js
    import * as yup from 'yup';
    export const blogSchema = yup.object().shape({
        title:yup.string().required('Title cant be empty').min(5,'Title must be 5 characters long').max(40,'Title cannot exceed 40 characters long'),
        content:yup.string().required('Blog cant be empty'),
        topic:yup.string(),
        seoTitle:yup.string(),
        seoDescription:yup.string(),
        image:yup.string().required('please add image'),
        altImage:yup.string().required('Please alt text to show on image for seo'),
        status:yup.string()
    })
    ```

    #### Importing multiple schema to index file
    ```js
    export { blogSchema } from './Blog';
    export { productSchema } from './Product';
    export { userSchema } from './User';
    ```

#### Step2 - Importing Schema and use it for Form Validation
First imporing formik
second imort blog schema 

 



 
### Install Yup and Formik plugins

```html
<div class="check"></div>

<div class="check"></div>```


**Hint:** Remember to use triple backticks for multiline code blocks.

> **Hint:** Be sure to format your code blocks with proper indentation.

