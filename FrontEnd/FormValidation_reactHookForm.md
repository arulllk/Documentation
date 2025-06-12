# 📋 React Hook Form + Yup Validation - Beginner-Friendly Explanation

## 🚀 Goal of this Component

You're building a **form** that:
- Collects `Full Name`, `Email`, `Age`, `Password`, and `Confirm Password`.
- Uses **validation** to make sure the input is correct.
- Shows **error messages** when the user enters invalid data.
- Submits the data when everything is valid.


## 🔧 Tools Being Used

### 1. React Hook Form (`useForm`)
A popular React library for forms that:
- Manages form state (like what the user typed)
- Tracks errors
- Handles submission

### 2. Yup
A validation library to define rules like:
- "Email must be valid"
- "Password must be at least 4 characters"

### 3. yupResolver
Connects **Yup** and **React Hook Form** so they work together.

## 🛠️ Step-by-Step Code Walkthrough

### 1. **Import Required Libraries**

```js
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
```

### 1. **Create Validation schema in yup**<br>
- Sample code to add blog
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

    # 📌 Understanding the useForm Linking Process in React Hook Form

This document explains the following line of code from a form built using React Hook Form and Yup:

```js
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});
```

---

## ✅ What This Line Does

This line sets up the **linking process** between:

- Your form inputs,
- React Hook Form (for state management and handling),
- And Yup (for validation).

### 🧩 Breakdown of Each Part

| Part | Explanation |
|------|-------------|
| `useForm()` | Initializes React Hook Form. It takes configuration like the validation resolver. |
| `resolver: yupResolver(schema)` | This connects the Yup validation schema to the form. It tells React Hook Form to use Yup rules for validation. |
| `register` | A function used to link each form input (like text fields) to the form's internal state. |
| `handleSubmit` | A function used to wrap your form's `onSubmit`. It checks validation before calling your handler. |
| `formState: { errors }` | Contains all current validation errors. Use this to display error messages next to each input. |

---

## 💬 In Simple Words

> "This is the linking process that connects our form to the React Hook Form system and sets up validation using Yup."

When you write this line, you’re telling React:

- "I have a form. Track its state."
- "Use these validation rules (Yup schema) to check the form."
- "Let me access errors, and connect each input using `register`."

---

## 🔁 Example in Context

```js
const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('fullName')} />
    {errors.fullName && <p>{errors.fullName.message}</p>}
  </form>
);
```

---

## 🧠 Summary

You **can absolutely say**:

> _"This is the linking process that connects our form with React Hook Form and enables validation with Yup."_

It’s a key step that powers your whole form's functionality. 🙌

---

Let me know if you want to extend this explanation into a bigger tutorial or printable cheatsheet!

