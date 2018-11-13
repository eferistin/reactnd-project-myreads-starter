import React, {Component} from 'react'
import BookCategory from './BookCategory';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class BookLibrary extends Component{
  constructor(props) {// initialized state for all BookLibrary/Shelf component to be an array to hold books
    super(props);
    this.state = {
       books: []
    }
 }

    componentWillMount(){
      //access the book api, send a fetch method for full collection to populate the site
      BooksAPI.getAll().then(function (responseCollected){
        //this.setState({book:responseCollected});
        console.log(responseCollected);
      })
    }  
  
    render(){
      var bookFilter = this.state.books;//shortens code
        return(
            <div className="app">

              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    
                      <BookCategory name="Currently Reading" books={bookFilter.filter(abook=>abook.BookCategory==="currentlyReading")}/>
                      <BookCategory name="Want to Read" books={bookFilter.filter(abook=>abook.BookCategory==="wantToRead")}/>
                      <BookCategory name="Read" books={bookFilter.filter(abook=>abook.BookCategory==="read")}/>
                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            }
          </div>
        )
    
    }
}

export default BookLibrary;