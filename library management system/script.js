document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('books');
    const addBookForm = document.getElementById('add-book-form');

    // Dummy data for books
    let books = [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '9780743273565',
            available: true,
            issuedDate: 'N/A'
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '9780061120084',
            available: false,
            issuedDate: '2024-07-15'
        }
    ];

    // Function to display books
    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.innerHTML = `
                <div>
                    <strong>${book.title}</strong> by ${book.author} (ISBN: ${book.isbn})
                    <br>
                    Available: ${book.available ? 'Yes' : 'No'}<br>
                    Issued Date: ${book.issuedDate}
                </div>
                <button onclick="removeBook(${index})">Remove</button>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // Function to add a book
    function addBook(title, author, isbn) {
        books.push({ title, author, isbn, available: true, issuedDate: 'N/A' });
        displayBooks();
    }

    // Function to remove a book
    window.removeBook = function(index) {
        books.splice(index, 1);
        displayBooks();
    }

    // Handle form submission
    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const isbn = document.getElementById('book-isbn').value;
        addBook(title, author, isbn);
        addBookForm.reset();
    });
        // Fetch books data from JSON file
        fetch('data/books.json')
        .then(response => response.json())
        .then(data => {
            books = data;
            displayBooks();
        })
        .catch(error => console.error('Error loading books data:', error));


    // Initial display of books
    displayBooks();
});
