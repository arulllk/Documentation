# 📘 Joi Error Codes Explained: `any.required` and `any.only`

This document explains in detail what `any.required` and `any.only` mean in Joi validation, when they are triggered, and how to handle them effectively in your backend code.

---

## 🔍 `any.required`

### 🔧 What It Means:

`any.required` is the error code Joi uses when a **required field is completely missing** from the input object.

### 💡 When It Triggers:

- The key (field) is **not present at all** in the request body.

### ✅ Example:

```js
const schema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Please add title of your product'
  })
});
```

### ❌ This will trigger:

```json
{}  // title is missing
```

### ✅ This will NOT trigger:

```json
{ "title": "" } // title exists, but is an empty string
```

(However, you may want to also use `.empty().messages({ 'string.empty': 'Title cannot be empty' })` for this case.)

---

## 🔍 `any.only`

### 🔧 What It Means:

`any.only` is the error code Joi uses when the value **does not match** any of the allowed values defined using `.valid()`.

### 💡 When It Triggers:

- The input value is **not one of the exact choices** allowed.

### ✅ Example:

```js
const schema = Joi.object({
  category: Joi.string().valid('electronics', 'books', 'fashion', 'home').required().messages({
    'any.only': 'Category must be one of electronics, books, fashion, or home'
  })
});
```

### ❌ This will trigger:

```json
{ "category": "sports" } // Not in the valid list
```

### ✅ This will NOT trigger:

```json
{ "category": "electronics" } // Valid
```

---

## 🧠 Summary

| Error Code     | Trigger Condition                                            | Description                                       |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| `any.required` | Field is **missing entirely**                                | Ensures required fields are included in the input |
| `any.only`     | Field value **does not match** allowed options in `.valid()` | Validates exact, specific allowed values          |

Use these error codes to provide meaningful, custom messages to help users and developers understand why their input was rejected.

---

Let me know if you'd like more Joi error codes explained in this format!

