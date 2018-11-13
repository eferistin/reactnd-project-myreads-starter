import React, {Component} from 'react'
import BookCategory from './BookCategory';
import {Link} from 'react-router-dom'

class BookLibrary extends Component{
    state={}
    render(){
        return(
            <div className="app">

              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    
                      <BookCategory/>
                      <BookCategory/>
                      <BookCategory/>
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