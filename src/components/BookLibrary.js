import React, {Component} from 'react'
import BookCategory from './BookCategory';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
// import PropTypes from 'prop-types'

class BookLibrary extends Component{
 
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }
  
    render(){
      // var bookFilter = this.props;//shortens code
      const { books } = this.props
        return(
            <div className="app">

              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    
                      <BookCategory name="Currently Reading" books={books.filter(abook=>abook.shelf==="currentlyReading")}/>
                      <BookCategory name="Want to Read" books={books.filter(abook=>abook.shelf==="wantToRead")}/>
                      <BookCategory name="Read" books={books.filter(abook=>abook.shelf==="read")}/>
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