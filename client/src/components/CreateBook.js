import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function CreateBook(props) {
  const [bookInfo, setBookInfo] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setBookInfo({ [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      bookInfo,
    };

    axios
      .post("http://localhost:8000/api/books", data)
      .then((res) => {
        setBookInfo({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!", err);
      });
  }

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={isbn}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={published_date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={publisher}
                  onChange={handleChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
