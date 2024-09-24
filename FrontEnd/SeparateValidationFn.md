## Seperate Function

We can have seperate function if the logic gets more complex we can have a seperate function and call it iniside text function

#### Seperate Function. 
```js
function isValidFileType(file) {
  if (!file) {
    return false; // Return false if no file is provided
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return allowedTypes.includes(file.type);
}
```


#### calling the function inside test function
```js
yup
  .mixed()
  .test(
    'fileType',
    'Unsupported file type. Please upload a JPEG, PNG, or GIF file.',
    isValidFileType
  );
``` 


  



    
