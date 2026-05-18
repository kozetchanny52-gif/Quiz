const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

function getBookInformation(catalog){
    return catalog.title+" By "+catalog.author
}
let titles_authors=library.map(getBookInformation)
console.log("Books in the library:")
console.log(titles_authors.join("\n\n"))

function getSummaries(catalog){
    return catalog.about
}
let summaries=library.map(getSummaries)
console.log("Summaries:")
console.log(summaries.join("\n\n"))

console.log("\nList of books by Arvid Kahl:\n")

let books_by_arvid=library.filter((b)=>b.author=="Arvid Kahl").map((author)=>author.title).join("\n")
console.log(books_by_arvid)

for (let book of library){
    let book_author=book.author
    console.log("List of books by "+book_author+":\n")
    console.log(library.filter((b)=>b.author==book_author).map((author)=>author.title).join("\n\n"))
    console.log("\n")
}
for (let book of library){
    let book_title=book.title
    console.log("\nTotal number of pages of  by:"+book_title+"\n")
    console.log(library.filter((b)=>b.title==book_title).map((author)=>author.pages).reduce((acc, curr) => acc + curr, 0))
    console.log("\n")
}