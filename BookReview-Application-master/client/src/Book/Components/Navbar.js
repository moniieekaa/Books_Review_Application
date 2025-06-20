import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { UserContext } from "../../context/UserContext";
import { logout } from "../Core/_request";

export default function Navbar({
  searchTerm,
  setSearchTerm,
  sortCriteria,
  setSortCriteria,
  showSearchInput,
}) {
  const { setUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px 0 rgba(31,38,135,0.04)",
        padding: "0.5rem 0",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          gap: "2.5rem",
        }}
      >
        <Link
          to={`/Booklisting`}
          style={{
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#22223b",
            letterSpacing: "1px",
          }}
        >
          Book
          <span style={{ color: "#4f8cff" }}>Nest</span>
        </Link>
        {showSearchInput && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <label
                htmlFor="sortCriteria"
                style={{
                  fontWeight: 500,
                  color: "#22223b",
                  whiteSpace: "nowrap",
                }}
              >
                Sort By:
              </label>
              <select
                id="sortCriteria"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  padding: "0.3rem 1rem",
                  fontSize: "1rem",
                  background: "#f5f6fa",
                  color: "#22223b",
                  marginLeft: "0.5rem",
                }}
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="rating">Average Rating</option>
              </select>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          style={{
            background: "#4f8cff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "0.5rem 1.5rem",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 1px 4px 0 rgba(79,140,255,0.10)",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#22223b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#4f8cff")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
