# Inventory Management App

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blueviolet)
![React Icons](https://img.shields.io/badge/React%20Icons-4.11.0-green)

A modern inventory management application built with React and Tailwind CSS that allows you to track products and categories.

## Features

- 📦 **Product Management**
  - Add, edit, and delete products
  - Adjust product quantities
  - View all products in a paginated table

- 🗂️ **Category Management**
  - Create and manage product categories
  - Assign products to categories

- 🔍 **Search & Filter**
  - Search products by name
  - Sort products by:
    - Newest/Oldest
    - Name (A-Z/Z-A)

- 📊 **Pagination**
  - Browse products in pages
  - 5 products per page

## Components

1. **App** - Main component that manages state and renders other components
2. **Navbar** - Application header with title and product count
3. **FormCategory** - Form to add new product categories
4. **FormProduct** - Form to add new products
5. **ProductList** - Displays all products with search, sort, and pagination functionality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-app.git
   cd inventory-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Add a Category**
   - Click "Add new Category"
   - Fill in the category name and description
   - Click "Add Category"

2. **Add a Product**
   - Select a category from the dropdown
   - Enter product name and quantity
   - Click "Add Product"

3. **Manage Products**
   - Use + and - buttons to adjust quantities
   - Click the edit icon to modify product details
   - Click the trash icon to delete a product

4. **Search & Sort**
   - Use the search bar to find products by name
   - Use the sort dropdown to change the display order

## Technologies Used

- React 18
- Tailwind CSS
- React Icons
- Vite (for development)

## License

This project is open source and available under the [MIT License](LICENSE).