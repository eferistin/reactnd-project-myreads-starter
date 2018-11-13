import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger';

class Book extends Component{
    componentWillMount(){
        console.log(this);
    }
    state={}
    render(){
        var bookInfo = this.props.books;//shortens code
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>

            <ShelfChanger/>
            </div>
            {/* <div className="book-title">{bookInfo.title}</div>
            <div className="book-authors">{bookInfo.authors ? bookInfo.authors[0] : "Ghost Writer, no author."}</div> */}
        </div>
        
        )
    }
}

export default Book;