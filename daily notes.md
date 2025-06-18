[
  {
    message: 'Please select the category of the product',
    path: [ 'category' ],
    type: 'any.required',
    context: { label: 'category', key: 'category' }
  },
  {
    message: '"mrp" is required',
    path: [ 'mrp' ],
    type: 'any.required',
    context: { label: 'mrp', key: 'mrp' }
  },
  {
    message: 'Please add selling price',
    type: 'any.required',
    context: { label: 'sellingPrice', key: 'sellingPrice' }
  },
  {
    message: 'Slug is required',
    path: [ 'slug' ],
    type: 'any.required',
    context: { label: 'slug', key: 'slug' }
  }
]

{
    "err": {
        "errors": {
            "category": {
                "name": "ValidatorError",
                "message": "Please select the category of the product",
                "properties": {
                    "message": "Please select the category of the product",
                    "type": "required",
                    "path": "category"
                },
                "kind": "required",
                "path": "category"
            },
            "mrp": {
                "name": "ValidatorError",
                "message": "Please  add mrp of your product",
                "properties": {
                    "message": "Please  add mrp of your product",
                    "type": "required",
                    "path": "mrp"
                },
                "kind": "required",
                "path": "mrp"
            },
            "sellingPrice": {
                "name": "ValidatorError",
                "message": "Please add selling price",
                "properties": {
                    "message": "Please add selling price",
                    "type": "required",
                    "path": "sellingPrice"
                },
                "kind": "required",
                "path": "sellingPrice"
            },
            "altText": {
                "name": "ValidatorError",
                "message": "Path `altText` is required.",
                "properties": {
                    "message": "Path `altText` is required.",
                    "type": "required",
                    "path": "altText"
                },
                "kind": "required",
                "path": "altText"
            },
            "slug": {
                "name": "ValidatorError",
                "message": "Path `slug` is required.",
                "properties": {
                    "message": "Path `slug` is required.",
                    "type": "required",
                    "path": "slug"
                },
                "kind": "required",
                "path": "slug"
            }
        },
        "_message": "Product validation failed",
        "name": "ValidationError",
        "message": "Product validation failed: category: Please select the category of the product, mrp: Please  add mrp of your product, sellingPrice: Please add selling price, altText: Path `altText` is required., slug: Path `slug` is required."
    }
}