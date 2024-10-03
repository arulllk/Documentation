import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as yup from 'yup';

function ImageUpload() {
  const [filePreview, setFilePreview] = useState(null);

  // Custom validation for file type and size
  const sampleSchema = yup.object().shape({
    image: yup
      .mixed()
      .required('Please add an image')
      .test(
        'fileSize',
        'File size is too large. Maximum size is 2MB.',
        (value) => value && value.size <= 2000000 // 2MB limit
      )
      .test(
        'fileType',
        'Unsupported file type. Please upload a JPEG, PNG, or GIF file.',
        (value) =>
          value &&
          ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      ),
  });

  const onSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  const formik = useFormik({
    initialValues: {
      image: null, // Set initial value as null
    },
    validationSchema: sampleSchema,
    onSubmit,
  });

  // Custom handleChange function for file input
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image', file); // Set file object in formik state
    if (file) {
      setFilePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
    //manually set the field as touch
    formik.setFieldTouched('image',true,true)   
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset className="flex flex-col relative">
        <label className="mb-2 font-bold text-sm">Image Required</label>
        <div className="flex gap-4">
          {filePreview && (
            <div className="uploaded-img-cont flex items-center overflow-hidden border p-2">
              <img
                src={filePreview}
                alt="Uploaded Preview"
                className="w-auto h-20 object-cover"
              />
            </div>
          )}
          <div className="image-upload-cont">
            <label
              htmlFor="myFile"
              className="w-full h-full flex items-center justify-center gap-4 cursor-pointer flex flex-col p-4 border border-dashed"
            >
              <FontAwesomeIcon icon={faUpload} className="text-2xl" />
              <span className="w-44 text-xs text-center">
                Drop your images here or{' '}
                <span className="text-bolt-blue">click to browse</span>
              </span>
              <input
                type="file"
                id="myFile"
                name="image" // Use the name 'image' to match Formik's initial value
                className="absolute invisible opacity-0"
                onChange={handleFileChange} // Use custom handleFileChange function
              />
            </label>
            {formik.errors.image && formik.touched.image && (
              <p className="text-red-500 text-xs mt-2">{formik.errors.image}</p>
            )}
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ImageUpload;
