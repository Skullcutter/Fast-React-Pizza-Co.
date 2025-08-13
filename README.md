# 🍕 Fast React Pizza Co. ⚡

Fast React Pizza Co. is a **demo learning project** designed to practice React fundamentals, component architecture, state management, routing, and API integration. The app simulates a pizza ordering process from browsing a menu to placing a mock order, complete with features like a cart system, priority orders, and order tracking. This project focuses on applying core React concepts and modern development tools while keeping the environment safe and payment-free.


# 🌟 Key Features

- **Dynamic Pizza Menu** — Menu items fetched from a mock API or static data.

- **Cart System** — Add, remove, and adjust pizza quantities.

- **Order Form** — Enter name, phone, address, and mark orders as priority.

- **Order Tracking** — Retrieve an existing order by ID.

- **Priority Fee Calculation** — Adds an extra fee for priority orders.

- **Routing** — Navigate between pages with React Router.

- **Modern UI** — Styled with Tailwind CSS for a clean, responsive interface.

- **Fast Performance** - Optimized loading and smooth user experience.

- **Real-time Pricing** - Live calculation of order totals.


# 🛠️ Tech Stack

- **React 18:** Latest React with concurrent features

- **React Router v6:** Modern routing with data APIs

- **Redux Toolkit:** Simplified Redux state management

- **Tailwind CSS:** Utility-first CSS framework

- **Vite:** Next-generation build tool

- **React Hook Form:** Efficient form handling

- **Geolocation API:** Browser location services

- **Mock API / Static Data** — Data source

  

# 📁 Project Structure
```
src/
├── features/
│ ├── cart/
│ │ ├── Cart.jsx                        # Cart page displaying all selected items
│ │ ├── CartItem.jsx                    # Single pizza item in cart
│ │ ├── CartOverview.jsx                # Cart summary (item count, total price)
│ │ ├── cartSlice.js                    # Redux slice for cart state/actions
│ │ ├── DeleteItem.jsx                  # Remove an item from the cart
│ │ ├── EmptyCart.jsx                   # UI when cart is empty
│ │ └── UpdateItemQuantity.jsx          # Change pizza quantity in cart
│ ├── menu/
│ │ ├── Menu.jsx                        # Full list of available pizzas
│ │ └── MenuItem.jsx                    # Single pizza details in the menu
│ ├── order/
│ │ ├── CreateOrder.jsx                 # Order form with user info & priority option
│ │ ├── Order.jsx                       # Specific order details page
│ │ ├── OrderItem.jsx                   # Single pizza in an order
│ │ ├── SearchOrder.jsx                 # Search orders by ID
│ │ └── UpdateOrder.jsx                 # Update order details/status
│ └── user/
│ ├── CreateUser.jsx                    # Create/register a temporary user profile
│ └── userSlice.js                      # Redux slice for user state
├── services/
│ ├── apiGeocoding.js                   # Convert addresses to GPS coordinates
│ └── apiRestaurant.js                  # Fetch menu/order/restaurant data
├── ui/
│ ├── AppLayout.jsx                     # Root layout with shared components
│ ├── Button.jsx                        # Reusable button
│ ├── Error.jsx                         # Error display component
│ ├── Header.jsx                        # App header/navigation
│ ├── Home.jsx                          # Landing page
│ ├── LinkButton.jsx                    # Styled navigation link
│ ├── Loader.jsx                        # Loading spinner
│ └── UserName.jsx                      # Displays current user name
├── utils/
│ └── helpers.js                        # Utility/helper functions
├── App.jsx                             # Main app component with routing
├── index.css                           # Global styles & Tailwind imports
├── main.jsx                            # App entry point
└── store.js                            # Redux store configuration
```


# 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Skullcutter/Fast-React-Pizza-Co.git
cd Fast-React-Pizza-Co
```

**2. Install dependencies**

```bash
npm install
   # or
yarn install
```

**3. Start the development server**

```bash
npm run dev
   # or
yarn dev
```

**4. Open your browser**
Navigate to `http://localhost:5173` to view the app.

# 🎮 How It Works

**1. Getting Started**

- Enter your name on the homepage to begin ordering.

- No registration or authentication required.

**2. Browse Menu**

- View all available pizzas with ingredients and prices.

- See which pizzas are currently available or sold out.

**3. Build Your Order**

- Add pizzas to your cart.

- Adjust quantities as needed.

- View real-time total pricing.

**4. Place Your Order**

- Enter your phone number and address.

- Option to use GPS for accurate location.

- Mark as priority order for faster delivery (+20% cost).

**5. Track Your Order**

- Receive unique order ID for tracking.

- Check order status and estimated delivery time.

- Modify priority status if needed.


  
# 🎯 Learning Objective

This project demonstrates several important modern React concepts:

### React Router v6

- Data Loading: Router-based data fetching with loaders.

- Actions: Form submissions with router actions.

- Nested Routing: Complex routing architecture.

- Error Boundaries: Route-level error handling.

### State Management

- Redux Toolkit: Modern Redux with RTK Query.

- Local vs Global State: Strategic state placement.

- Async Operations: Handling API calls and loading states.

- State Normalization: Efficient data structure management.

### Modern React Patterns

- Custom Hooks: Reusable logic extraction.

- Compound Components: Complex UI component patterns.

- Render Props: Advanced component composition.

- Context API: Theme and global state management.

  

# 🤝 Contributions

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them.

4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

   

# 🙏 Acknowledgements

- [React Docs](https://react.dev/) for core concepts.

- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management.

- [Tailwind CSS](https://tailwindcss.com/) for rapid UI development.

- [Vite](https://vitejs.dev/) for a fast dev environment.
