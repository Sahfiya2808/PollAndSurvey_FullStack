import React from 'react';
import './Howitworks.css';

function Howitworks() {
  return (
    <div className="Howitworks">
      <header className="Howitworks-header">
        <h1>How to use SurveySphere</h1>
      </header>
      <div className="Howitworks-content">
        <main>
          <section className="Howsteps">
            <div className="Howstep">
              <h2>1. Fill out the form</h2>
              <p>Choose a title, add a set of answer options, and choose your preferred settings.</p>
            </div>
            <div className="Howstep">
              <h2>2. Post your poll and wait for the public response</h2>
              <p>Collect responses by sharing your poll link or embedding the poll on your site.</p>
            </div>
            <div className="Howstep">
              <h2>3. Get instant results</h2>
              <p>As soon as a vote is cast, the results are updated in real time and can be exported at any time.</p>
            </div>
          </section>

          <img src={"https://cdn.mos.cms.futurecdn.net/XwGMdrA9Q5q8aHxghjpeoL.png"} alt="Create engaging polls" className="howimage-left" />
          <div className="howtext-left">
            <h2>Create engaging online polls for free</h2>
            <p>
              Whether it's a quick poll with friends or the solution to an eternal discussion in your forum,
              [Your App] helps you find the majority opinion quickly and easily.
            </p>
            <p>
              Or are you active on social media and have you always wanted to find out the honest opinion of your followers?
              With [Your App] you can quickly create a free poll without having to register an account.
            </p>
            <p>
              Of course, we also offer a login to use complex poll features and to manage your previous polls,
              but this is not mandatory.
            </p>
          </div>
          <div className="clearfix"></div> {/* Clear floats */}

          <img src={"https://form-publisher.com/blog/content/images/size/w1200/2022/08/How-to-Make-a-Survey-in-Google-Forms.png"} alt="Real-time results" className="howimage-right" />
          <div className="howtext-right">
            <h2>Get your results in real-time</h2>
            <p>
              The results for each poll are updated in real time via server-to-client push communication.
              Who has access to the live results or who can subsequently edit their vote can be adjusted by the poll creator at any time.
            </p>
            <p>
              As soon as a poll has been completed, the results can be exported in Excel or CSV format if required.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Howitworks;
