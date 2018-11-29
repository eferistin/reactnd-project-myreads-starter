import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookLibrary from './components/BookLibrary';
import SearchPage from './components/SearchPage';

class App extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }

  //}

  constructor(props) {// initialized state for all BookLibrary/Shelf component to be an array to hold books
    super(props);
    this.state = {
       books: []
    }
 }

    componentWillMount(){
      //access the book api, send a fetch method for full collection to populate the site
      // must use arrow function or else it breaks
      
      BooksAPI.getAll()
      .then(responseCollected => {
         this.setState({books:responseCollected});
         console.log('books retrieved');
         console.log(this.state.books);
      })
    } 

    shelfSwapper = (thatBook,myNewShelf)=> {BooksAPI.update(thatBook,myNewShelf);
      this.setState((state,props)=>{
        const books = state.books;
        const theNewbooks = books.map(book =>{
          if(book.id===thatBook.id){
            book.shelf= myNewShelf
          }
          return book;
        })
        return {books:theNewbooks}
      })
    }
  render() {
    const {books} = this.state;
    return (
    //  <BookLibrary />
     
     <div>
      <Route exact path="/" exact render={() => (<BookLibrary books={this.state.books} /> )}/>
      <Route exact path="/search" exact render={() => (<SearchPage books={this.state.books} /> ) } shelfSwapper={this.shelfSwapper}/>
    </div>
    )
  }
}

export default App;
