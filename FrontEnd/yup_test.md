 
## Mixed test()

### File Size Validation
```js
.test(
    'fileSize', /* this text name this will help on debuggin time */
    'File size is too large. Maximum size is 2MB.',
    (value) => value && value.size <= 2000000 // 2MB limit
    )
``` 

#### This is a simple arrow function used to check if a file is smaller than 2MB. 
- `fileSize`: Unique name fo the test this will be help us in debugging
- **Error message** Displayed if the file is too large according to our condition
- **Validation function** third is the validation function

    **Further explanation for below code**
    ```js
    (value) => value && value.size <= 2000000
    ```
    - `value`: This represents the file that the user uploads. It’s an object with properties like size (the file size in bytes).
    - `value &&`: This checks if the file (value) exists. If value is null or undefined, the rest of the function won’t run.
    - `value.size <= 2000000`: This checks if the file’s size is less than or equal to 2,000,000 bytes (which is equal to 2MB). <br> <br>

### File Type Validation
#### This arrow function is used to check if a file is of a valid type (e.g., JPEG, PNG, or GIF). Let’s break down each part of the code to understand how it works:

```js
.test(
    'fileType',
    'Unsupported file type. Please upload a JPEG, PNG, or GIF file.',
    (value) =>
        value &&
        ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
    ),
``` 
- `fileType`: Unique name fo the test this will be help us in debugging
- **Error message** Displayed if the file is too large according to our condition
- **Validation function** third is the validation function
- `['image/jpeg', 'image/png', 'image/gif'].includes(value.type)`
    - This checks if the type property of value (which is the file’s MIME type) is in the array `['image/jpeg', 'image/png', 'image/gif']`.
    - `value.type` is the type of the file we are uploading could be something like `"image/jpeg"`
    - `.includes()` this method returns true if `value.type` is one of the elements in the array (i.e., it is a valid file type) and false otherwise.
