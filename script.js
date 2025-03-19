// Sample books in the library
let books = 
[
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald",year: 1925, isAvailable: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949,isAvailable: true },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year:1960, isAvailable: true }
];
// Function to render books on the page
function displayBooks () 
{
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear existing content
  books.forEach (book => 
    {
    let bookDiv = document.createElement ("div");
    bookDiv.classList.add("book");
    
    bookDiv. innerHTML =`
    <h2>${book.title}</h2>
    <p><strong>Author :</strong> ${book.author}</p>
    <p><strong>Year :</strong> ${book.year}</p>
    <p><strong>Status :</strong> ${book.isAvailable ? "Available" :"Borrowed"} </p>
    <button class="borrow" ${!book.isAvailable ? "disabled" : ""}
    onclick="borrowBook(${book.id} )"> Borrow </button>
    <button class="return" ${book.isAvailable ? "disabled" : ""}
    onclick="returnBook (${book.id})"> Return </button>`;
    libraryDiv.appendChild(bookDiv);
    });
}
// Function to borrow a book
function borrowBook(bookId) 
{
  let book = books.find(b => b.id === bookId);
  if (book && book. isAvailable) 
  {
    book.isAvailable = false;
    alert (`You have borrowed ${book. title}.`);
    displayBooks ();
  }
}
// Function to return a book
function returnBook (bookId) 
{
let book = books.find(b => b.id === bookId) ;
  if (book && !book.isAvailable) 
  {
  book.isAvailable = true;
  alert (`You have returned ${book. title} .`);
  displayBooks ();
  }
}
function newbook() 
{
  // Get input values
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = parseInt(document.getElementById("year").value);
  const newId = books.length + 1;
  //validate
  if (!title || !author || isNaN(year)) {return;}
  //add new object 
  const newBook = { id: newId,title: title,author: author,year: year,isAvailable: true };
  // Add to library
  books.push(newBook);
  // remove input
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
  // Display success message
  alert(`${title} by ${author} has been added.`);
  // Refresh book display
  displayBooks();
}  
// Initial display of books
displayBooks ();
