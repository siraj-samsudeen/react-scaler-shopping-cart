# Replicate the Shopping Cart Project done by Ayush in live class

## Tasks

1. Create Header Component which displays the categories data from the fake store API
2. Add onClick Handler to Header Items to select a category
3. Display the Product List for the selected category
    3.1. Lift selectedCategory state up to parent Component to share it with ProductList
    3.2. Create ProductList Component which fetches the products for the category and displays them
    3.3. Extract Product Component from ProductList
    3.4. Extract Category Component from Header
4. Implement loading and error states for the API calls
    4.1 for fetching categories
    4.2 for fetching products
5. Create custom hook for fetching data from API
    5.1 Refactor ProductList component to use the hook useAPI