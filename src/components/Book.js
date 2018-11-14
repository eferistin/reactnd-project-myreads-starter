import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger';

class Book extends Component{
    componentWillMount(){
        console.log(this);
    }
    state={}
    render(){
        var bookInfo = this.props;//shortens code
        var bookPic = bookInfo.imageLinks.thumbnail ? bookInfo.imageLinks.thumbnail : ''; //shortens, if there is a picture use it
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookPic})` }}></div>

            <ShelfChanger/>
            </div>
            <div className="book-title">{bookInfo.title}</div>
            {/* //if there are authors put the value in, if not put ghost writer */}
            <div className="book-authors">{bookInfo.authors ? bookInfo.authors[0] : "Ghost Writer, no author."}</div>
        </div>
        
        )
    }
}

export default Book;