import React, {Component} from 'react'
import Book from './Book';
import {Link} from 'react-router-dom'
import ShelfChanger from './ShelfChanger';

class Searchpage extends Component{
    state={query: ''}
    
    render(){
      const { books } = this.props
        return(
            
          <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        )
    }
}
export default Searchpage;