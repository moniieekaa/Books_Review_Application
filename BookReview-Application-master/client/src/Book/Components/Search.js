import React from "react";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '260px' }}>
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem 2.2rem 0.5rem 2.2rem',
          border: '1px solid #e0e0e0',
          borderRadius: '6px',
          fontSize: '1rem',
          background: '#f5f6fa',
          color: '#22223b',
          outline: 'none',
        }}
      />
      <svg style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#4f8cff' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
