import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Awsome plugin demo that is very super awsome long title
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
        </h1>
        <p>Amazing plugin that does all the things</p>
        <ol>
          <li>
            List thing <code>one</code>
          </li>
          <li>Second thing to be listed</li>
          <li>
            There is even a <code>third thing</code>, who would have thunk.
          </li>
        </ol>

        <ul>
          <li>
            List thing <code>one</code>
          </li>
          <li>Second thing to be listed</li>
          <li>
            There is even a <code>third thing</code>, who would have thunk.
          </li>
        </ul>
      </header>
      <section>
        <form>
          <fieldset>
            <label htmlFor="email">Your email address:</label>
            <input id="email" name="email" type="email" required />
            <button type="submit">Button</button>
          </fieldset>
        </form>
      </section>
      <section>
        <article>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/Kldx6d5XBSE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <Link to="#">
            <img
              src="https://i.ytimg.com/vi/UGq8cnNTbwI/hqdefault.jpg"
              alt="YouTubeThumbnail"
            />
          </Link>
        </article>
      </section>
    </main>
  );
};

export default IndexPage;
