// Товары магазина.
// Формат строки:
// [id, "название", цена, "категория", "картинка", "iframe", "иконка статистики", "id товара", "уникальный id", "раздел (store/packs)", "подкатегория", доступен]
const PRODUCTS = [
    [1, "13 звёзд", 20, "Подарки", "https://storage.botpapa.me/files/bda806a0-262f-11f1-bef9-f1ec7a2c6e45.jpeg", "https://app.botpapa.me/website/%40PlacedMarketBot/st13n", "https://storage.botpapa.me/files/3622b940-c492-11f0-b4a0-d13431a40d5b.png", "92470372", "stars_13", "store", "gifts", true],
    [2, "21 звезда", 34, "Подарки", "https://storage.botpapa.me/files/73481e20-c161-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st21n", "https://storage.botpapa.me/files/42fb9a60-c492-11f0-b4a0-d13431a40d5b.png", "92470373", "stars_21", "store", "gifts", true],
    [3, "43 звезды", 66, "Подарки", "https://storage.botpapa.me/files/c4c7c1a0-262f-11f1-bef9-f1ec7a2c6e45.png", "https://app.botpapa.me/website/%40PlacedMarketBot/st43n", "https://storage.botpapa.me/files/d3caca30-c491-11f0-b4a0-d13431a40d5b.png", "92470374", "stars_43", "store", "gifts", true],
    [4, "85 звёзд", 129, "Подарки", "https://storage.botpapa.me/files/9cf74b30-0c2d-11f1-b904-772788f215dd.png", "https://app.botpapa.me/website/%40PlacedMarketBot/st85n", "https://storage.botpapa.me/files/fb446170-c491-11f0-b4a0-d13431a40d5b.png", "92470375", "stars_85", "store", "gifts", true],
    [5, "100 звёзд", 135, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st100n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470362", "stars_100", "store", "stars", true],
    [6, "150 звёзд", 189, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st150n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470363", "stars_150", "store", "stars", true],
    [7, "250 звёзд", 315, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st250n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470364", "stars_250", "store", "stars", true],
    [8, "350 звёзд", 439, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st350n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470365", "stars_350", "store", "stars", true],
    [9, "500 звёзд", 625, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st500n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470366", "stars_500", "store", "stars", true],
    [10, "750 звёзд", 929, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st750n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470367", "stars_750", "store", "stars", true],
    [11, "1000 звёзд", 1235, "Звёзды", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st1000n", "https://storage.botpapa.me/files/36335080-c491-11f0-b4a0-d13431a40d5b.png", "92470368", "stars_1000", "store", "stars", true],
    [12, "1500 звёзд", 1839, "Звёзды", "https://storage.botpapa.me/files/06081dc0-c77d-11f0-aa62-f3a4d21b862b.png", "https://app.botpapa.me/website/%40PlacedMarketBot/st1500n", "https://storage.botpapa.me/files/695c6410-c491-11f0-b4a0-d13431a40d5b.png", "92470369", "stars_1500", "store", "stars", true],
    [13, "2500 звёзд", 3065, "Звёзды", "https://storage.botpapa.me/files/cc0782b0-c0a0-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st2500n", "https://storage.botpapa.me/files/7e9c2630-c491-11f0-b4a0-d13431a40d5b.png", "92470370", "stars_2500", "store", "stars", true],
    [14, "5000 звёзд", 6129, "Звёзды", "https://storage.botpapa.me/files/cc0782b0-c0a0-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/st5000n", "https://storage.botpapa.me/files/7e9c2630-c491-11f0-b4a0-d13431a40d5b.png", "92470371", "stars_5000", "store", "stars", true],
    [15, "1 месяц", 289, "Premium", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/pr1m", "", "premium_1m", "premium_1m", "packs", "premium", false],
    [16, "3 месяца", 869, "Premium", "https://storage.botpapa.me/files/1ec68810-c2d7-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/pr3m", "", "premium_3m", "premium_3m", "packs", "premium", true],
    [17, "6 месяцев", 1189, "Premium", "https://storage.botpapa.me/files/06081dc0-c77d-11f0-aa62-f3a4d21b862b.png", "https://app.botpapa.me/website/%40PlacedMarketBot/pr6m", "", "premium_6m", "premium_6m", "packs", "premium", true],
    [18, "12 месяцев", 2099, "Premium", "https://storage.botpapa.me/files/cc0782b0-c0a0-11f0-b4a0-d13431a40d5b.jpg", "https://app.botpapa.me/website/%40PlacedMarketBot/pr12m", "", "premium_12m", "premium_12m", "packs", "premium", true],
];

// Ссылка на общую для всех карточек иконку корзины
const CART_ICON_URL = "https://storage.botpapa.me/files/52a92dc0-cd42-11f0-aa62-f3a4d21b862b.svg";
const STORE_LINK = "https://t.me/PlacedMarketBot";

function renderProductCard(row) {
    const [
        order, name, price, category, image, iframe, statIcon,
        productId, uniqueId, section, subcategory, available
    ] = row;

    const isPacks = section === "packs";
    const dataCategory = isPacks ? "premium" : "all";
    const dataLink = isPacks ? "" : STORE_LINK;
    const collectionText = isPacks ? "Telegram Premium" : "";
    const hiddenStyle = isPacks ? ' style="display: none;"' : "";

    const priceButtonClasses = ["price-button"];
    if (isPacks && !available) priceButtonClasses.push("disabled");

    const cartButtonClasses = ["cart-button"];
    if (isPacks) cartButtonClasses.push("disabled");

    const collectionAttr = isPacks ? ` data-card-collection="${collectionText}"` : "";

    return `
                <div class="card"${hiddenStyle} data-category="${dataCategory}" data-subcategory="${subcategory}" data-order="${order}" data-price="${price}" data-name="${name}" data-image="${image}" data-iframe="${iframe}" data-stat-icon="${statIcon}" data-stat-link="" data-link="${dataLink}" data-nft-id="" data-product-id="${productId}" data-available="${available ? 'on' : 'off'}" data-unique-id="${uniqueId}" data-section="${section}"${isPacks ? ` data-collection-text="${collectionText}"` : ""}>
                    <div class="card-image-container">
                        <div class="card-image-wrapper">
                            <div class="card-image-slider">
                                <div class="card-image-slide">
                                    <img src="${image}" alt="${name}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-title">${name}</div>
                        <div class="card-buttons">
                            <button class="${priceButtonClasses.join(' ')}" data-modal="checkoutOrderModal" data-card-price="${price}" data-card-name="${name}" data-card-image="${image}" data-card-iframe="${iframe}" data-card-nft-id=""${collectionAttr} data-card-product-id="${productId}">${price}₽</button>
                            <button class="${cartButtonClasses.join(' ')}" data-action="addToCart">
                                <img src="${CART_ICON_URL}" alt="Корзина" class="cart-icon">
                            </button>
                        </div>
                    </div>
                </div>`;
}

function renderProducts() {
    const container = document.getElementById("cardsContainer");
    if (!container) return;
    container.innerHTML = PRODUCTS.map(renderProductCard).join("\n");
}

renderProducts();