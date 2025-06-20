import React from "react";
import "./App.css";

export default function BookLottiePage() {
  return (
    <div className="smooth-container" style={{boxShadow: '0 8px 48px 0 rgba(67, 230, 176, 0.10)', background: 'linear-gradient(135deg, #FFFFFF 60%, #FFB86C 100%)'}}>
      <h1 className="smooth-title" style={{color: '#43E6B0'}}>Welcome! 🌿</h1>
      <p className="smooth-desc">
        Relax and enjoy your reading journey.<br/>
        This page is designed to be stress-free, with soft colors and smooth UI/UX.<br/>
        Take a deep breath and explore your favorite books!
      </p>
      <button className="smooth-btn">Start Exploring</button>
    </div>
  );
}
