let books = [
    {
        "name": "The Great Gatsby",
        "price": 10.99,
        "publication_date": "April 10, 1925",
        "genre": "Fiction",
        "writer": "F. Scott Fitzgerald"
    },
    {
        "name": "To Kill a Mockingbird",
        "price": 12.99,
        "publication_date": "July 11, 1960",
        "genre": "Fiction",
        "writer": "Harper Lee"
    },
    {
        "name": "1984",
        "price": 9.99,
        "publication_date": "June 8, 1949",
        "genre": "Fiction",
        "writer": "George Orwell"
    },
    {
        "name": "The Hobbit",
        "price": 11.99,
        "publication_date": "September 21, 1937",
        "genre": "Fantasy",
        "writer": "J.R.R. Tolkien"
    },
    {
        "name": "Pride and Prejudice",
        "price": 8.99,
        "publication_date": "January 28, 1813",
        "genre": "Fiction",
        "writer": "Jane Austen"
    },
    {
        "name": "The Catcher in the Rye",
        "price": 10.49,
        "publication_date": "July 16, 1951",
        "genre": "Fiction",
        "writer": "J.D. Salinger"
    },
    {
        "name": "The Alchemist",
        "price": 9.49,
        "publication_date": "1988",
        "genre": "Fantasy",
        "writer": "Paulo Coelho"
    },
    {
        "name": "The Da Vinci Code",
        "price": 14.99,
        "publication_date": "March 18, 2003",
        "genre": "Mystery",
        "writer": "Dan Brown"
    },
    {
        "name": "The Lord of the Rings",
        "price": 29.99,
        "publication_date": "1954-1955",
        "genre": "Fantasy",
        "writer": "J.R.R. Tolkien"
    },
    {
        "name": "Harry Potter and the Philosopher's Stone",
        "price": 15.99,
        "publication_date": "June 26, 1997",
        "genre": "Fantasy",
        "writer": "J.K. Rowling"
    }
]


let expensiveBook = books.filter((book)=>{
    return book.price > 15;
})
// console.log(expensiveBook); 

let FantasyBook = books.filter((bk)=>bk.genre === 'Fantasy');
// console.log(FantasyBook);

let discountedBook = books.map((price)=> (price.price*90)/100)
// console.log(discountedBook);


let totalOrderPrice = books.reduce((total, next) => total + next.price ,0 );
// console.log("Total Order Price: " + totalOrderPrice)



console.log("make a order with 10 percent discount and price shoud be less than 10 and give final price ");


let finalPrice = books.map((prc)=>(prc.price*0.9)).filter((prc)=>prc<10).reduce((acc , price)=> acc + price , 0)
console.log("Final rounded price"+Math.ceil(finalPrice));