# e-plantShopping: Paradise Nursery Shopping Application

## Project Overview
**Paradise Nursery** is a front-end e-commerce application allowing users to browse houseplants, add them to a shopping cart, and manage their purchases. Built with modern web technologies, this app provides a seamless shopping experience with dynamic cart updates, category filtering, and intuitive navigation.

## Key Features
- **Three Page Layout**:
    - **Landing Page**: Attractive background image, company description, and a "Get Started" button linking to products.
    - **Product Listing Page**:
        - 6+ houseplants organized into 3+ categories.
        - Each product displays a thumbnail, name, price, and "Add to Cart" button.
        - Dynamic header with a shopping cart icon showing real-time item count.
    - **Shopping Cart Page**:
        - Displays all cart items with thumbnails, names, unit prices, and quantities.
        - Adjust item quantities via increment/decrement buttons.
        - Delete individual items from the cart.
        - Shows total number of items and total cost.
        - Includes "Continue Shopping" and "Checkout" buttons.

## Technologies Used
- **Frontend**: React.js, JavaScript ES6+, CSS3
- **State Management**: Context API / Redux (optional)
- **Styling**: Responsive design with Flexbox/Grid
- **Deployment**: GitHub Pages

## Getting Started

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/whitgunt77/e-plantShopping.git
    ```

2. Navigate to the project directory:
    ```bash
    cd e-plantShopping
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the App
Start the development server:
    ```
    npm start
    ```
    
This will open in your browser at `http://localhost:3000`.

### Deployment via GitHub Pages
1. Push changes to your GitHub repository.
2. In your repository settings, navigate to **Pages**.
3. Under **Source**, select the branch (e.g., main) and folder (`docs` or root).
4. Your app will deploy to `https://<username>.github.io/e-plantShopping`.

## Project Structure

- **src/**: Contains React components, styles, and assets.
    - components/: Header, ProductCard, CartItem, etc.
    - pages/: LandingPage, ProductList, CartPage.
- **public/**: Static files (e.g., `index.html`, icons).
- **README.md**: This file.

## Usage
1. **Browse Products**: View plants categorized by type (e.g., Succulents). 
2. **Add to Cart**: Click "Add to Cart" on any product.
3. **Manage Cart**:
    - Adjust quantities using +/- buttons.
    - Remove items with the delete button.
    - View total cost and item count in the header.
4. **Checkout**: Proceed to checkout (backend integration optional).

## License
MIT License

---

**Repository Name**: e-plantShopping

**Live Demo**: https://whitgunt77.github.io/e-plantShopping
