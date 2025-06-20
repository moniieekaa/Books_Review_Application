import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { getAllBooks, getSearchBooks } from "../Core/_request";
import Navbar from "../Components/Navbar";

export default function BookListing() {
  const [books, setBooks] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBooks();
        setBooks(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm) {
        const response = await getSearchBooks(searchTerm);
        setBooks(response);
      } else {
        setBooks((b) => b); // functional update to avoid missing dependency warning
      }
    };

    fetchBooks();
  }, [searchTerm]);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const sortedBooks = [...books].sort((a, b) => {
    if (sortCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "author") {
      return a.author.localeCompare(b.author);
    } else if (sortCriteria === "rating") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        showSearchInput={true}
      />

      <div className="row mt-5 px-4 pt-5 gap-4 justify-content-center pb-5" style={{background: '#f5f6fa', borderRadius: '2rem'}}>
        {currentBooks.map((book) => (
          <Link
            to={`/book/${book._id}`}
            key={book._id}
            className="col-md-5 col-xl-3 card text-decoration-none text-dark"
            style={{background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(67, 230, 176, 0.10)', transition: 'box-shadow 0.2s'}}>
            <div className="d-flex justify-center items-center">
              <img
                src={book.coverImageUrl}
                className="card-img-top h-3/4 w-3/4 mb-0"
                alt="img"
                style={{borderRadius: '1rem', boxShadow: '0 2px 8px rgba(108, 99, 255, 0.08)'}}
              />
            </div>
            <div className="my-3">
              <div className="fs-3 fw-bold" style={{fontFamily: 'Dancing Script, cursive', color: '#4f8cff', textShadow: 'none', letterSpacing: '1px'}}>{book.title}</div>
              <p className="fw-semibold fs-5 mt-1" style={{color: '#22223b', textShadow: 'none'}}>
                {book.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
