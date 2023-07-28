// Sample JSON data representing the products
const productsData = [
    {
        "id": 1,
        "name": "kirixx 1",
        "view": "https://payhip.com/b/tMPeh",
        "image": "./img/product/Krixx.png",
        "link": "https://mega.nz/folder/KwA1jaxR"
    },
    {
        "id": 2,
        "name": "SNAKE EDITING PACK 3",
        "view": "https://payhip.com/b/boHUE",
        "image": "./img/product/snake.png",
        "link": "https://mega.nz/folder/HwpAGbSJ#weCbdJpzd9jnaeVd1yp7aQ"
    },
    {
        "id": 3,
        "name": "Vini Pack",
        "view": "https://payhip.com/b/boHUE",
        "image": "./img/product/vini.png",
        "link": "https://mega.nz/folder/HwpAGbSJ#weCbdJpzd9jnaeVd1yp7aQ"
    }
    ,
    {
        "id": 4,
        "name": "Fyemaj Pack #1",
        "view": "",
        "image": "./img/product/Fyemajpack1.png",
        "link": "https://mega.nz/file/ECBhVJIY#4FEsuwQQHxWD0nSIkaTJp2dOi37tNbyNv2_VL3PvQgY"
    }
];

// Function to create and append product elements
function createProductElement(product) {
    const productItem = document.createElement('div');
    productItem.classList.add('col-lg-4', 'col-md-6', 'col-sm-6');
    productItem.innerHTML = `
    <div class="product__item">
      <div class="product__item__pic set-bg" data-setbg="">
        <img src="${product.image}">
        <ul class="product__item__pic__hover">
          <li><a href="${product.view}" target="_blank"><i class="fa fa-eye"></i></a></li>
          <li><a href="${product.link}" target="_blank"><i class="fa fa-download"></i></a></li>
        </ul>
      </div>
      <div class="product__item__text">
        <h5>${product.name}</h5>
      </div>
    </div>
  `;

    return productItem;
}

// Function to load products and display them on the page
function loadProducts() {
    const productsContainer = document.getElementById('productsContainer');

    productsData.forEach((product) => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}


// Function to filter products based on the search query
function filterProducts(searchQuery) {
    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    renderFilteredProducts(filteredProducts);
}

// Function to render filtered products
function renderFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; // Clear previous products

    filteredProducts.forEach((product) => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

// Call the loadProducts function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    // Handle search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.trim();
        filterProducts(searchQuery);
    });
});






