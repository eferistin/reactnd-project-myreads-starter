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

  render() {
    return (
    //  <BookLibrary />
     
     <div>
      <Route exact path="/" component={ BookLibrary } />
      <Route exact path="/search" component={ SearchPage } />
    </div>
    )
  }
}

export default App;
