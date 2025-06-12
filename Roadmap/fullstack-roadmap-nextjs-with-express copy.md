
# 🧭 12-Week Fullstack Developer Roadmap (React + Next.js Focused)

## ✅ Pre-requisite (Before Week 1)
Spend 1–2 days reviewing:
- **JavaScript** (arrow functions, async/await, promises, array methods)
- **CSS** (Flexbox, Grid, responsive design)

---

## 🟩 Week 1: Get Started with Next.js + React Basics
**Goal**: Understand component-based architecture using Next.js App Router

### Topics
- Install & setup Next.js (`create-next-app`)
- Pages & file-based routing
- Layouts with `layout.js`
- `useState` & `props`
- JSX & dynamic rendering

### Project Idea
**Profile Card Generator**

---

## 🟩 Week 2: Interactivity with React Hooks
**Goal**: Build reactive components with hooks

### Topics
- `useEffect` for side effects
- Conditional rendering
- Event handling
- Controlled input forms

### Project Idea
**Feedback App**

---

## 🟦 Week 3: Dynamic Routes and Components
**Goal**: Learn routing and dynamic pages

### Topics
- Dynamic routes `[id]/page.tsx`
- `useRouter()`
- `Link` for navigation
- Component splitting

### Project Idea
**Mini Blog Reader**

---

## 🟦 Week 4: Data Fetching in Next.js
**Goal**: Understand SSR/SSG vs client fetching

### Topics
- `getServerSideProps`, `getStaticProps`
- `useEffect` + fetch
- `getStaticPaths`

### Project Idea
**Pokemon Explorer**

---

## 🟨 Week 5: Styling in Next.js
**Goal**: Build styled UIs

### Topics
- CSS Modules
- Tailwind CSS
- Global styles
- Dark mode

### Project Idea
**Portfolio Site**

---

## 🟨 Week 6: Forms, Validation & LocalStorage
**Goal**: Handle user inputs

### Topics
- Controlled forms
- Validation with `react-hook-form`
- `localStorage`

### Project Idea
**Task Tracker**

---

## 🟥 Week 7: APIs with Next.js
**Goal**: Backend with Next.js API routes

### Topics
- API endpoints in `/api`
- POST, GET, DELETE

### Project Idea
**Notes App with API**

---

## 🟥 Week 8: MongoDB Integration
**Goal**: Add database backend

### Topics
- MongoDB Atlas
- Mongoose models

### Project Idea
**Notes App with DB**

---

## 🟧 Week 9: Authentication
**Goal**: Secure login system

### Topics
- `next-auth`
- Protected API routes
- `useSession`

### Project Idea
**Login Portal + Protected Notes App**

---

## 🟧 Week 10: Admin Panel + Role-Based Access
**Goal**: Admin features

### Topics
- Admin dashboard
- Role-based rendering

### Project Idea
**Admin Panel for Notes**

---

## 🟫 Week 11: Fullstack Capstone Project
**Goal**: Build a full app

### Final Project
**Job Board Platform**

---

## 🟫 Week 12: Deployment + Resume + GitHub
**Goal**: Prepare for job search

### Topics
- Vercel deployment
- GitHub cleanup
- Case studies and resume

---

## 🧠 Next.js + React Cheat Sheet

| Concept               | Code Example                                 |
|-----------------------|----------------------------------------------|
| useState              | `const [count, setCount] = useState(0)`      |
| useEffect             | `useEffect(() => { ... }, [])`               |
| Routing               | `<Link href="/about">About</Link>`           |
| Dynamic Route         | `/posts/[id]/page.js`                        |
| useRouter             | `const router = useRouter();`                |
| Server Props          | `getServerSideProps(ctx)`                    |
| Static Props          | `getStaticProps()`                           |
| Static Paths          | `getStaticPaths()`                           |
| API Route             | `/pages/api/hello.js`                        |
| MongoDB Connect       | `mongoose.connect(DB_URL)`                   |

---

## ⚡ Tools & Resources
- Tailwind: https://tailwindcss.com/docs
- MongoDB: https://www.mongodb.com/cloud/atlas
- Vercel: https://vercel.com
- next-auth: https://next-auth.js.org
- Icons: https://lucide.dev/icons
- Forms: `react-hook-form`

---

## 🟥 Week 7 (Updated): APIs with Next.js and Express.js
**Goal**: Build APIs using both Next.js and Express

### Topics
- Creating API routes in `/api`
- Introduction to Express.js (if not known)
- Setting up a simple Express server in Next.js
- Running both Next.js frontend and Express backend (monorepo or proxy setup)
- Calling Express endpoints from the frontend

### Project Idea
**Notes App (Frontend in Next.js, Backend in Express)**

---

## 🟥 Week 8 (Updated): MongoDB Integration with Express.js
**Goal**: Use Express + MongoDB for a real backend

### Topics
- MongoDB Atlas & Mongoose models
- Express routes for CRUD
- Connecting Mongoose with Express app
- Using Express middleware

### Project Idea
**Notes App with Express API + MongoDB**
