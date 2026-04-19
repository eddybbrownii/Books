function renderBooks(filter) {
    const booksWrapper = document.querySelector('.books');
    const books = getBooks();
    if (filter === 'LOW_TO_HIGH') {
        console.log(filter)
        const filterBooks = books.sort((a, b) => a.originalPrice - b.originalPrice);
        console.log(filterBooks)
    }
    else if (filter === 'HIGH_TO_LOW') {
        console.log(filter)
        const filterBooks = books.sort((a, b) => b.originalPrice - a.originalPrice);
        console.log(filterBooks)
    }
    else if (filter === 'RATING') {
        books.sort((a, b) => b.rating - a.rating);
    }

const booksHTML = books
    .map((book) => {
        return `
        <div class="book">
            <figure class="book-image-wrapper">
                <img class="book__img" src="${book.image}" alt="${book.title}">
            </figure>
        <div class="book__title">
            ${book.title}
        </div>
        <div class="book__ratings">
            ${ratingsHTML(book.rating)}
        </div>
        <div class="book__price"><span>
            $${book.originalPrice.toFixed(2)}</span>
        </div>
        </div>`;
    })
    .join('');
    booksWrapper.innerHTML = booksHTML;
}
function ratingsHTML(rating) {
let ratingHTML = '';
    for (let i = 1; i <= Math.floor(rating); i++) {
        ratingHTML += `<i class="fas fa-star"></i>\n`
    }
    
    if (!Number.isInteger(rating)) {
        ratingHTML += `<i class="fas fa-star"></i>\n`
    }
    return ratingHTML;
    }

function filterBooks(event) {
        renderBooks(event.target.value);
    }


setTimeout(() => {
    renderBooks();
});

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}
