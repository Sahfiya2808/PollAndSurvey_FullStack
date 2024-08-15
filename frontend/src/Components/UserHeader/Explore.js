import React from 'react';
import './Explore.css';

function Explore() {
  return (
    <div className="Explore">
      <header className="Explore-header">
        <h1>Explore Categories and Poll Types</h1>
      </header>
      <main>
        <section className="Explorecategories">
          <h2>Categories</h2>
          <ul>
            <li>Education</li>
            <li>Social Media</li>
            <li>Government</li>
            <li>Agriculture</li>
            <li>Health Care</li>
            <li>Technology</li>
            <li>Entertainment</li>
          </ul>
        </section>
        <section className="Explorepoll-types">
          <h2>Poll Types</h2>
          <ul>
            <li>
              <h3>Single Poll</h3>
              <p>Allow participants to select one option from a list of choices.</p>
            </li>
            <li>
              <h3>Multi Poll</h3>
              <p>Allow participants to select multiple options from a list of choices.</p>
            </li>
            <li>
              <h3>Yes/No Poll</h3>
              <p>Allow participants to choose between a simple yes or no response.</p>
            </li>
            <li>
              <h3>Poll with Image</h3>
              <p>Include images as part of the poll options or questions.</p>
            </li>
            <li>
              <h3>Poll with Comments</h3>
              <p>Allow participants to leave comments along with their votes.</p>
            </li>
            <li>
              <h3>Matrix Poll</h3>
              <p>Allow participants to rate multiple items using a matrix format.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Explore;
