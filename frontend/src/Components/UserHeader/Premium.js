import React from 'react';
import './Premium.css';

function Premium() {
  return (
    <div className="Premium">
      <header className="Premium-header">
        <h1>Premium Membership</h1>
      </header>
      <main className="premium-content">
        <div className="membership-grid">
          <div className="membership-card">
            <h2>Free Account</h2>
            <ul>
              <li>Create basic polls</li>
              <li>View poll results</li>
              <li>Poll duration up to 3 days</li>
            </ul>
          </div>
          <div className="membership-card">
            <h2>Gold Membership</h2>
            <ul>
              <li>Create basic polls</li>
              <li>View poll results</li>
              <li>Poll duration up to 7 days</li>
              <li>Add images to your polls</li>
            </ul>
          </div>
          <div className="membership-card">
            <h2>Platinum Membership</h2>
            <ul>
              <li>Create basic polls</li>
              <li>View poll results</li>
              <li>Poll duration up to 7 days</li>
              <li>Add images to your polls</li>
              <li>Compare your products with other trending products</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Premium;
