import React from "react";

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
    </main>
  );
};

export default IndexPage;
