import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger';

class Book extends Component{
    componentWillMount(){
        console.log(this);
    }
    state={}
    render(){
        var bookInfo = this.props;//shortens code
        var bookPic = bookInfo.imageLinks.thumbnail ? bookInfo.imageLinks.thumbnail : ''; //shorten, if there is a picture use it
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookPic})` }}></div>

            <ShelfChanger/>
            </div>
            {/* <div className="book-title">{bookInfo.books.title}</div>
            <div className="book-authors">{bookInfo.books.authors ? bookInfo.books.authors[0] : "Ghost Writer, no author."}</div> */}
        </div>
        
        )
    }
}

export default Book;