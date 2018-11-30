import React, {Component} from 'react'

class ShelfChanger extends Component{
    constructor(props) {
        super(props)

        this.state = {
           category:''
        }
     }
    
        componentDidMount=()=>{
            this.setState({category: this.props.shelf})
        }
        swapShelf=(event)=>{
            const shelf =event.target.value;
            this.props.swapShelf=(this.props.books,shelf);
            this.setState({shelf});
        }

    render(){
        const {shelf}=this.state;
        return (
            <div className="book-shelf-changer">
            <select value={shelf} onChange={this.swapShelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        )
    }
}

export default ShelfChanger;