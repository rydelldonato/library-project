function findAuthorById(authors, id) {
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

function findBookById(books, id) {
  //return if books.id === id
  let result;
  for (let book of books) {
    if (book.id === id) {
      result = book;
    }
  }
  return result;
}

// function partitionBooksByBorrowedStatus(books) {
//   //return an array with two arrays inside of it
//   //declare an empty array that we will return
//   //first array= books.filter().some()book objects if books.borrows.returned === false
//   //second array= books.filter().every()book objects if books.borrow.returned === true
//   let result1 = books.filter((bookObj) =>
//     bookObj.borrows.some((isFalse) => isFalse.returned === false)
//   );
//   let result2 = books.filter((bookObj) =>
//     bookObj.borrows.every((isTrue) => isTrue.returned === true)
//   );
//   return [result1, result2];
// }

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc,book)=> {
    const [borrowed, returned] = acc;
    const recent = book.borrows[0];
    // if (recent.returned) returned.push(book);
    // else borrowed.push(book);
    recent.returned ? returned.push(book) : borrowed.push(book)
    return acc;
  }, [[], []])
}

function getBorrowersForBook(book, accounts){
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id)
    return {...borrows, ...account}
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

//function getBorrowersForBook(book, accounts) {
  //return an array of account objects that === book.borrows.id's
  //map the returned array to add book.borrows.returned property and value
  //declare borrowedArr = book.borrows
  //if accounts.id can be found in any of borrowedArr.id then return that account object
  //create a new copy of this array to include borrowedBook.returned propety and value

  // let borrowedArr = book.borrows;
  // let result = accounts.filter((accountObj) => {
  //   return borrowedArr.some((borrowedObj) => {
  //     return accountObj.id === borrowedObj.id;
  //   });
  // });
  // for (let i = 0; i < borrowedArr.length; i++) {
  //   let mappedResult = result.map((account) => {
  //     return (account.returned = borrowedArr[i].returned);
  //   });
  //   return mappedResult;
  // }

  // shortMappedResult = mappedResult.splice(0, 10);
  // return shortMappedResult;
// }

//return an array of accounts objects if books[book].borrows.id === accounts.id
//.map to add returned value from books array
//create a variable whoBorrowed = books[book].borrows.id
//1 let result = accounts.filter() return accounts.id === whoBorrowed
//result.map(()=>) I want to create a new copy array that will add the books[book].borrows.returned
//

// let bookBorrowed = book.borrows[0].id;
// let foundAccount = accounts.filter((accountObj)=>accountObj.id === bookBorrowed && book.borrows[0].returned === false);
// let result = foundAccount.map((accountObj)=>{
//   accountObj.returned = book.borrows[0].returned;
//   return accountObj;
// })
// let shortResult = result.splice(0, 10);
// return shortResult;
