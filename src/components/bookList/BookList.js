import React, {Component} from "react";
import BookListItem from "../bookListItem/BookListItem";
import './bookList.css'
import {connect} from "react-redux";
import WithBookStoreService from "../hoc/WithBookStoreService";
import {booksLoaded} from "../../actions";
import {bindActionCreators} from "redux";

class BookList extends Component {
    componentDidMount() {
        const { bookStoreService } = this.props;
        const data = bookStoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return(
            <ul>
                {
                    books.map((book) => {
                        return(
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded
    }, dispatch)
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))