function findAccountById(accounts, id) {
  //return if accounts.id === id
  let result;
  for (let account of accounts) {
    if (account.id === id) {
      result = account;
    }
  }
  return result;
}

function sortAccountsByLastName(accounts) {
  //return a sort() by last name
  return accounts.sort((nameA, nameB) => {
    return nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase()
      ? -1
      : 1;
  });
}

//return a # that equals the # of times account.id === books.borrows.id
//declare a new variable accountId to hold account.id
//check if any books.borrows.id === accountId, if true >> add 1 to a result
function getTotalNumberOfBorrows(account, books) {
  let accountId = account.id;
  //loop through each books object in books array
  let result = books.reduce((accum, bookObj) => {
    //loop through the borrows array
    //check within the borrows array if any id === accountId
    let id = bookObj.borrows.some((borrowObj) => borrowObj.id === accountId);
    //if borrows.id === accountId then add 1 to the accum
    if (id) accum++;
    //accum value = result
    return accum;
  }, 0);
  return result;
}

//return an array of all book objects(+ author information) that account has checked out
function getBooksPossessedByAccount(account, books, authors) {
  //filter through books
  let booksCheckedOut = books.filter((bookObj) => {
    //loop through each borrows object
    //check if borrows.id === account id and the book is not returned
    let isBorrowed = bookObj.borrows.some((borrowsObj) => borrowsObj.id === account.id && borrowsObj.returned === false);
  //if is borrowed === true then find the author 
  if (isBorrowed) { 
    //loop through authors array to find the matching author id
    let foundAuthor = authors.find((authorsObj)=>{
    //check if bookObj author id === authors object.id
     return bookObj.authorId === authorsObj.id;
    })
    return bookObj.author = foundAuthor;
  }
})
  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
