import React, {Component} from 'react'
import Book from './Book';

class BookCategory extends Component{
    componentWillMount(){
        console.log(this.props.books);
    }
    
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            // check if there are books then for each book provides an id for the key
                            this.props.books && this.props.books.map(abook => <Book  key={abook.id} {...abook}/>)
                    
                        }
                        
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookCategory;