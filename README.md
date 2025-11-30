 🍽️ Restaurant Website UI

Live Website:https://restaurant-rouge-eight.vercel.app/

A modern, responsive **restaurant website UI** built with **Next.js**.  
This project focuses solely on the frontend, showcasing components for menus, reservations, authentication, and more.  

---

 📝 Project Overview

This UI project includes:  

- **Homepage:** Nabvar, Hero, Combo, Popular, Blog, and AboutUs sections.  
- **Reusable components** (used across pages): `Section`, `Footer`, `Navbar`, `Button`, `Feedback`.  
- **Page-specific components**: `MenuCard`, `FoodCard`, `Reservation_table`, `Promo`, `Menu`, etc.  
  Authentication pages: Login & Register.  
- **Reservation page**: Table booking layout.  
- Fully responsive design for desktop and mobile.  


---

📂 Project Structure
restaurant/
├── app/
│ ├── components/
│ │ ├── AboutUs.js
│ │ ├── BlogSection.js
│ │ ├── Button.js
│ │ ├── Combo.js
│ │ ├── Feedback.js
│ │ ├── FoodCard.js
│ │ ├── Footer.js
│ │ ├── Hero.js
│ │ ├── Menu.js
│ │ ├── MenuCard.js
│ │ ├── Navbar.js
│ │ ├── Popular.js
│ │ ├── Promo.js
│ │ ├── Reservation_table.js
│ │ └── Section.js
│ ├── Home/page.js
│ ├── Login/page.js
│ ├── Menu/page.js
│ ├── Register/page.js
│ ├── reservation/page.js
│ └── page.js (root)
├── public/ # static assets (images, icons)
├── package.json
├── next.config.js
└── README.md


---

## 🚀 Getting Started  

### Prerequisites  
- Node.js (>=14) and npm/yarn/pnpm installed  

### Installation  

```bash
# Clone the repository
git clone https://github.com/Ganavi0608/restaurant.git

# Navigate into the project
cd restaurant

# Install dependencies
npm install       # or yarn / pnpm install

# Start development server
npm run dev       # or yarn dev / pnpm dev

