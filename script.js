document.addEventListener("DOMContentLoaded", () => {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const carouselInner = document.querySelector(".carousel-inner");

    let index = 0;

    next.addEventListener("click", () => {
        if (index < carouselInner.children.length - 1) {
            index++;
            carouselInner.style.transform = `translateX(-${index * 200}px)`;
        }
    });

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            carouselInner.style.transform = `translateX(-${index * 200}px)`;
        }
    });

    document.querySelector(".play-button").addEventListener("click", () => {
        alert("Playing video (Feature yet to be implemented)");
    });
});
// ... (Existing JavaScript code for carousel and video) ...

// Mobile Navigation Menu (if needed)
const menuIcon = document.querySelector('.menu-icon'); // Add a menu icon in HTML
const nav = document.querySelector('nav');

if (menuIcon) {  // Check if menuIcon exists (it's optional)
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('show'); // Toggle a 'show' class on the nav
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // ... (Your existing carousel and play button code) ...

    // Cart Modal Functionality
    const cartIcon = document.querySelector('.header-icons img:nth-child(2)'); // Select the second image (cart icon)
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const continueShoppingButton = document.querySelector('.continue-shopping');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Sample cart data (replace with your actual data fetching logic)
    let cartData = []; // Or fetch from local storage, API, etc.

    function updateCartModal() {
        if (cartData.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItems.innerHTML = ''; // Clear previous items
        } else {
            emptyCartMessage.style.display = 'none';
            cartItems.innerHTML = ''; // Clear previous items

            cartData.forEach(item => { // Replace with your logic to create cart item elements
                const itemDiv = document.createElement('div');
                itemDiv.textContent = item.name + ' - $' + item.price;
                cartItems.appendChild(itemDiv);
            });
        }
    }

    if (cartIcon && cartModal && closeButton && continueShoppingButton) {
        cartIcon.addEventListener('click', () => {
            updateCartModal();
            cartModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeButton.addEventListener('click', () => {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        continueShoppingButton.addEventListener('click', () => {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // ... (Rest of your existing JavaScript code) ...
});

document.addEventListener("DOMContentLoaded", () => {
    // ... (Your existing carousel, play button, etc. code) ...

    // Cart Modal Functionality
    const cartIcon = document.querySelector('.header-icons img:nth-child(2)');
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const backToMenuButton = document.querySelector('.back-to-menu'); // Updated button selector
    const cartItems = document.getElementById('cart-items');
    const emptyCartContainer = document.getElementById('empty-cart-container'); // Get the container

    // Sample cart data (replace with your actual data fetching logic)
    let cartData = [];

    function updateCartModal() {
        if (cartData.length === 0) {
            emptyCartContainer.style.display = 'flex'; // Show the container
            cartItems.innerHTML = ''; // Clear any previous cart items
        } else {
            emptyCartContainer.style.display = 'none'; // Hide the container
            cartItems.innerHTML = ''; // Clear previous items

            cartData.forEach(item => { // Replace with your logic to create cart item elements
                const itemDiv = document.createElement('div');
                itemDiv.textContent = item.name + ' - $' + item.price;
                cartItems.appendChild(itemDiv);
            });
        }
    }

    if (cartIcon && cartModal && closeButton && backToMenuButton) { // Check for the new button
        cartIcon.addEventListener('click', () => {
            updateCartModal();
            cartModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeButton.addEventListener('click', () => {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        backToMenuButton.addEventListener('click', () => { // Event listener for the new button
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Add any "Back to Menu" logic here (e.g., redirect)
        });
    }

    // ... (Rest of your existing JavaScript code) ...
});


document.addEventListener("DOMContentLoaded", () => {
    // ... (Your existing carousel, play button, cart modal code) ...

    // Request a Dish Modal Functionality
    const requestDishButton = document.querySelector('.request-dish-button');
    const requestModal = document.getElementById('request-modal');
    const requestCloseButton = requestModal.querySelector('.close-button');
    const requestForm = document.getElementById('request-form');
    const cancelButton = requestModal.querySelector('.cancel-button'); // Select Cancel button

    if (requestDishButton && requestModal && requestCloseButton && requestForm && cancelButton) { // Add cancelButton check
        requestDishButton.addEventListener('click', () => {
            requestModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        requestCloseButton.addEventListener('click', () => {
            requestModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        cancelButton.addEventListener('click', () => { // Cancel button functionality
            requestModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        requestForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Handle form submission here
            alert("Request submitted (Feature not yet implemented)");

            requestModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // ... (Rest of your existing JavaScript code) ...
});
