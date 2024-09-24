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


  ### [yup.mixed() Mixed Explanation](/FrontEnd/yup_mixed.md)

  ### [yup.test() Yup Test Explanation](/FrontEnd/yup_test.md)

  ### [separate validation function](/FrontEnd/SeparateValidationFn.md) 



    
