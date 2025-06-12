# 🧱 Full-Stack eCommerce Backend Week 1 Plan

## 🗓️ Week: June 11, 2025 Onward

Your focus this week is building a real backend with Express and MongoDB, synced to your frontend (Next.js).

---

## ✅ Day 3: Setup Express + MongoDB + Basic API Route

**Goal**: Create a working backend that connects to MongoDB and returns a test response.

### Tasks:
- Create a `server` (or `backend`) folder.
- Set up an Express app (`server.ts` or `index.ts`).
- Connect to MongoDB using `mongoose.connect`.
- Add a test route: `GET /api/ping` → returns `{ "success": true }`.

---

## ✅ Day 4: Create First Schema (Product) & Seed 2 Products

**Goal**: Model your first data and return product list via API.

### Tasks:
- Create `models/Product.ts` with fields:
  - `name`, `price`, `image`, `description`, `category`
- Create `routes/product.ts`.
  - Route: `GET /api/products`
  - Fetch all products from MongoDB
- (Optional) Add a script to seed 2–3 sample products.

---

## ✅ Day 5: Setup Frontend Product Fetching

**Goal**: Connect frontend to backend and show product list.

### Tasks:
- Call `/api/products` from frontend (Next.js).
- Render product name and price.
- Handle loading state.

---

## ✅ Day 6: GET Product by ID

**Goal**: Backend route for product details page.

### Tasks:
- Add route: `GET /api/products/:id`
- Call this route from frontend using the product ID.
- Display product details in UI.

---

## ✅ Day 7: POST Product (Admin Only)

**Goal**: Start admin-only backend features.

### Tasks:
- Add route: `POST /api/products`
- Allow product creation via Postman (skip login for now).
- Add basic validation (e.g. name is required).

---

## 🔜 Next Week Preview

- Add authentication using JWT.
- Protect admin routes.
- Add Users, Orders, and Cart models.
