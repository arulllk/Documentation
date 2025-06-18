# 🛡️ Backend Validation with Joi - Step-by-Step Guide

This document explains how to implement backend validation using Joi in an Express-based Node.js application, specifically for a Product schema.

---

## ✅ Step 1: Install Joi

```bash
npm install joi
```

---

## ✅ Step 2: Create the Joi Schema

Create a new file: `validators/productValidator.js`

```js
const Joi = require('joi');

const productJoiSchema = Joi.object({
  title: Joi.string()
    .min(5)
    .max(200)
    .required()
    .messages({
      'string.base': 'Title must be a string',
      'string.empty': 'Please add title of your product',
      'string.min': 'Title must be greater than 5 characters',
      'string.max': 'Title must be less than 200 characters',
      'any.required': 'Please add title of your product',
    }),

  category: Joi.string()
    .valid('electronics', 'books', 'fashion', 'home')
    .required()
    .messages({
      'any.only': 'Category must be one of electronics, books, fashion, or home',
      'any.required': 'Please select the category of the product',
    }),

  mrp: Joi.number()
    .min(0)
    .optional()
    .messages({
      'number.base': 'MRP must be a number',
      'number.min': 'MRP cannot be negative',
    }),

  sellingPrice: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': 'Selling price must be a number',
      'number.positive': 'Selling price must be a positive number',
      'any.required': 'Please add selling price',
    }),

  summary: Joi.string().optional(),

  rating: Joi.number().min(0).max(5).optional(),

  reviewsCount: Joi.number().min(0).optional(),

  altText: Joi.string().optional(),

  slug: Joi.string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .required()
    .messages({
      'string.pattern.base': 'Slug must be URL-friendly (lowercase, hyphens, no spaces)',
      'any.required': 'Slug is required',
    })
});

module.exports = productJoiSchema;
```

---

## ✅ Step 3: Create Middleware for Validation

Create a new file: `middlewares/validateProduct.js`

```js
const productJoiSchema = require('../validators/productValidator');

function validateProduct(req, res, next) {
  const { error } = productJoiSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

module.exports = validateProduct;
```

---

## ✅ Step 4: Use Middleware in the Route

In your product route file: `routes/product.js`

```js
const express = require('express');
const router = express.Router();
const validateProduct = require('../middlewares/validateProduct');

router.post('/products', validateProduct, async (req, res) => {
  // Continue with saving the product
  res.status(201).json({ message: 'Product added successfully' });
});

module.exports = router;
```

---

## 🔍 Explanation of Validation Error Codes

- `string.base`: Value is not a string.
- `string.empty`: Value is an empty string.
- `string.min`: String is shorter than the specified minimum.
- `string.max`: String is longer than the specified maximum.
- `any.required`: Key is missing completely from input.
- `number.base`: Value is not a number.
- `number.positive`: Value must be greater than 0.
- `any.only`: Value does not match allowed values.
- `string.pattern.base`: Value does not match the given regex.

---

## ✅ Summary

- Joi schemas define the validation rules.
- Middleware intercepts and checks incoming request bodies before reaching controllers.
- Customized messages improve the developer and user experience.

This ensures your backend stays robust, avoids bad data reaching the database, and keeps errors user-friendly.

