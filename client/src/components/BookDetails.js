import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookDetails } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    let { book } = this.props.data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul clasname="other-books">
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookDetails, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
