function getTotalBooksCount(books) {
  //return a number that represents books.length
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  /*
  return a number that = # of books objects where 

  */
  let result1 = books.filter((bookObj) => bookObj.borrows.some((isFalse) => isFalse.returned === false));
  return result1.length;
}

// return an array of 5 or less book objects that are the most common genres from most common to least
// each object will have a "name" key representing the genre name
// each object will have a "count" key representing the # of books under that genre
// genres: Historical Fiction, Science, Classics, Travel, Young Adult, Nonfiction 

//.map the books array and return multiple objects {name:"", count: } if conditions are met
//the conditions to return an object:
//if name
//let name equal to a book genre 
//let count equal to plus 1 
//if name is already equal to genre, then..
//just add one to the count of the exisiting genre's count
//return a shortened array containing five or fewers objects
 
function getMostCommonGenres(books) {
//get all the genres from the books array
 let genreArr = books.map((bookObj)=> bookObj.genre);
//create a commonGenreObj object to hold all genres and their counts {name:"", count: }
//set a count variable for Historical Fiction
let hfCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Historical Fiction") hfCount += 1;});
//set a count variable for Science
let sCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Science") sCount += 1;});
//set a count variable for Classics
let cCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Classics") cCount += 1;});
//set a count variable for Travel
let tCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Travel") tCount += 1;});
//set a count variable for Young Adult
let yaCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Young Adult") yaCount += 1;});
//set a count variable for Nonfiction
let nfCount = 0;
genreArr.forEach(genre =>{
  if (genre === "Nonfiction") nfCount += 1;});

let result = 
[
  {name:"Historical Fiction", count: hfCount},
  {name:"Science", count:sCount},
  {name:"Classics", count:cCount},
  {name:"Travel", count:tCount},
  {name:"Young Adult", count:yaCount},
  {name:"Nonfiction", count:nfCount},  
];

let orderedResult = result.sort((a,b)=> b.count - a.count);
let shortResult = orderedResult.splice(0,5);
return shortResult;
}

function getMostPopularBooks(books) {
  //order the books array first from most borrowed to least borrowed
  let orderedBooks = books.sort((aBook, bBook)=> bBook.borrows.length - aBook.borrows.length);
  //use the .map method to create a new array 
  let result = orderedBooks.map((bookObj)=>{
  //the return for this array will be multiple objects
  //{name: , count: }
  //name === books.title
  //count === books.borrows.length
    return {name:bookObj.title, count:bookObj.borrows.length}
  });
  let shortResult = result.splice(0,5);
  return shortResult;
}

function getMostPopularAuthorsHelper(books){
  let orderedBooks = books.sort((aBook, bBook)=> bBook.borrows.length - aBook.borrows.length);
  return orderedBooks;
}

function getAuthorById(authors, id) {
  //return an author object
  //id === authors.id
  let result;
  for (let author of authors) {
    if (author.id === id) {
      result = author;
    }
  }
  return result;
}

function getMostPopularAuthors(books, authors) {
  //order the books array first from most borrowed to least borrowed
  let orderedBooks = getMostPopularAuthorsHelper(books);
  //get all the borrows of each author
  let mostPopById = orderedBooks.map((bookObj)=>{
  //create an empty object
  let authorCountObj = {name:'', count:0};
  let authorName = authors.find((authorObj)=>{
   return authorObj.id === bookObj.authorId;
  })
  if(bookObj.authorId !== authorCountObj.name){
    authorCountObj.name = `${authorName.name.first} ${authorName.name.last}`;
    authorCountObj.count = bookObj.borrows.length;
  //if bookObj.authorId === authorCountObj.name
  }
    return authorCountObj;
  })
  let shortMostPopById = mostPopById.splice(0,5);
  return shortMostPopById;
//  let result = shortMostPopById.map((popObj)=>{
//   authors.forEach(authorObj => {
//     if(authorObj.id === popObj.name) {
//       return popObj.name = `${authorObj.name.first} ${authorObj.name.last}`;
//     }
//   });

//   })

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
