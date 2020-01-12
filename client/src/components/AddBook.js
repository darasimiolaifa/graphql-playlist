import React, { Component } from "react";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";
import { graphql, compose } from "react-apollo";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      genre: "",
      authorId: "",
      selectedAuthor: "default"
    };
  }
  displayAuthors() {
    const data = this.props.getAuthorsQuery;
    let response = [];
    if (data.loading) {
      response.push(
        <option key="Loading" disabled>
          {" "}
          Loading authors...{" "}
        </option>
      );
    } else {
      response = data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {" "}
            {author.name}{" "}
          </option>
        );
      });
    }
    response.unshift(
      <option key="default" value="default">
        Select Author
      </option>
    );
    return response;
  }
  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    this.setState({
      name: "",
      genre: "",
      authorId: "",
      selectedAuthor: "default"
    });
  }
  render() {
    return (
      <form id="add-bbok" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre</label>
          <input
            type="text"
            value={this.state.genre}
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author</label>
          <select
            onChange={e =>
              this.setState({
                authorId: e.target.value,
                selectedAuthor: e.target.value
              })
            }
            value={this.state.selectedAuthor}
          >
            {this.displayAuthors()}{" "}
          </select>{" "}
        </div>
        <button> + </button>{" "}
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
