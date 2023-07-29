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
        "name": "Nhantaii - Project file bundle 1",
        "view": "https://payhip.com/b/Pbyeu",
        "image": "./img/product/nhantai.png",
        "link": "https://mega.nz/folder/alYhEbKD#9_T45MqtTxQNbwSVn18tow"
    }
    ,
    {
        "id": 4,
        "name": "Fyemaj Pack #1",
        "view": "",
        "image": "./img/product/fye.png",
        "link": "https://mega.nz/file/ECBhVJIY#4FEsuwQQHxWD0nSIkaTJp2dOi37tNbyNv2_VL3PvQgY"
    }
    ,
    {
        "id": 5,
        "name": "Nhantaii - Mini Pack 1",
        "view": "https://payhip.com/b/Vdzuq",
        "image": "./img/product/nhantaiminipack.png",
        "link": "https://mega.nz/folder/PsZylC6I#NMrYu2QRhq_KeoPRMG6pGA"
    }
    ,
    {
        "id": 6,
        "name": "Shrimpy pack 1",
        "view": "https://payhip.com/b/sBzr9",
        "image": "./img/product/shrimpypack.png",
        "link": "https://cdn.discordapp.com/attachments/1087340727366848522/1102174881040310313/Shrimpy_pack_1.zip"
    }
    ,
    {
        "id": 6,
        "name": "kytn Pack 4",
        "view": "https://payhip.com/b/xtaQZ",
        "image": "./img/product/kytn.png",
        "link": "https://cdn.discordapp.com/attachments/1087340727366848522/1102175375628435496/KYTN_PACK_4.rar"
    }
    ,
    {
        "id": 7,
        "name": "Qiwick's Pack ",
        "view": "https://payhip.com/b/PArWB",
        "image": "./img/product/Qiwick.png",
        "link": "https://cdn.discordapp.com/attachments/1087340727366848522/1102159884407017482/Qiwicks_Pack.rar"
    }
    ,
    {
        "id": 8,
        "name": "Pai's Editing Pack #1 ",
        "view": "https://payhip.com/b/CUaTx",
        "image": "./img/product/Pai.png",
        "link": "https://cdn.discordapp.com/attachments/1087340727366848522/1102158884661121084/Pais_Editing_Pack_1.rar"
    }
    ,
    {
        "id": 9,
        "name": "LUCCI PACK 1 ",
        "view": "https://payhip.com/b/E1MlJ",
        "image": "./img/product/LUCCI.png",
        "link": "https://mega.nz/folder/T05UGI5R#RnT_ZJuEufAXw9Zfnr_coQ"
    }
    ,
    {
        "id": 10,
        "name": "Glitch pack 2 by @99glitches ",
        "view": "https://payhip.com/b/dv41u",
        "image": "./img/product/Glitch.png",
        "link": "https://mega.nz/folder/GkoU0LYZ#Kocx9vCCCI-_sMB9IZQOig"
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






