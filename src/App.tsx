import './App.css'

function App() {
  return (
    <>
      <header id="site-header">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true"></span>
          Fieldnotes
        </a>
        <nav>
          <a href="#">Home</a>
          <a href="#" className="active">
            Blog
          </a>
          <a href="#">About</a>
        </nav>
      </header>

      <article id="post">
        <div className="post-meta-top">
          <span className="tag">Design</span>
          <span className="dot">·</span>
          <time dateTime="2026-08-17">Aug 17, 2026</time>
          <span className="dot">·</span>
          <span>6 min read</span>
        </div>

        <h1>
          The Quiet Discipline of <span className="accent">Good Design</span>
        </h1>
        <p className="subtitle">
          Why restraint, not decoration, is what separates work that lasts
          from work that merely looks nice on day one.
        </p>

        <div className="post-author">
          <div className="who">
            <div className="avatar">SS</div>
            <div>
              <div className="author-name">Sajal Sahu</div>
              <div className="author-role">Product Engineer</div>
            </div>
          </div>
          <div className="actions">
            <button type="button" className="action-btn">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 20s-7-4.35-9.5-8.8C.8 7.9 2.2 4.5 5.6 4.5c2 0 3.4 1.1 4.4 2.7 1-1.6 2.4-2.7 4.4-2.7 3.4 0 4.8 3.4 3.1 6.7C19 15.65 12 20 12 20Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              128
            </button>
            <button type="button" className="action-btn">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 7a3 3 0 1 0-2.83-4H12a3 3 0 0 0 .05 3.9l-5.6 3.24a3 3 0 1 0 0 3.72l5.6 3.24A3 3 0 1 0 15 17a2.98 2.98 0 0 0-.95.16l-5.6-3.25a3.04 3.04 0 0 0 0-1.82l5.6-3.25c.3.1.62.16.95.16Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Share
            </button>
          </div>
        </div>

        <div className="cover" aria-hidden="true">
          <span className="cover-badge">Featured Essay</span>
        </div>

        <div className="prose">
          <p className="lead">
            Good design rarely announces itself. It shows up as the button
            that was exactly where you expected it, the page that loaded
            before you noticed the wait, the form that never made you guess
            what it wanted. The best work in this field is quiet, and that
            quietness is often mistaken for simplicity of effort rather than
            simplicity of outcome.
          </p>

          <h2>Start with constraints</h2>
          <p>
            Every project arrives with limits: a deadline, a screen size, a
            brand palette, a team's skill set. Treating these as obstacles to
            route around is the first mistake. Constraints are the raw
            material of good decisions — they narrow the field of options
            until the right one is easier to see.
          </p>

          <aside className="callout">
            <strong>Takeaway.</strong> Constraints aren't the enemy of
            creativity — they're where it starts.
          </aside>

          <blockquote>
            <span className="quote-mark" aria-hidden="true">
              "
            </span>
            Simplicity is the ultimate sophistication.
            <cite>— Leonardo da Vinci</cite>
          </blockquote>

          <h2>Consistency beats novelty</h2>
          <p>
            A design system earns trust one repeated pattern at a time. Users
            don't notice when a spacing scale is followed correctly; they
            notice instantly when it isn't. A few habits keep that trust
            intact:
          </p>
          <ul>
            <li>Reuse existing components before reaching for a new one.</li>
            <li>Let type and color do the hierarchy work, not size alone.</li>
            <li>Test the layout at its smallest and largest breakpoints.</li>
          </ul>

          <h2>Ship, then refine</h2>
          <p>
            Perfection at the concept stage is a trap — it delays the only
            feedback that matters, which comes from real use. Ship something
            small, watch how it behaves in the world, and let that evidence
            guide the next iteration. Good design is a conversation, not a
            verdict.
          </p>
        </div>

        <div className="post-tags">
          <span>#design</span>
          <span>#product</span>
          <span>#craft</span>
        </div>
      </article>

      <section id="related">
        <h3>More essays</h3>
        <div className="related-grid">
          <a className="related-card" href="#">
            <span className="tag">Product</span>
            <h4>Why most redesigns fail in the first month</h4>
            <span className="meta">4 min read</span>
          </a>
          <a className="related-card" href="#">
            <span className="tag">Craft</span>
            <h4>The case for boring technology</h4>
            <span className="meta">7 min read</span>
          </a>
          <a className="related-card" href="#">
            <span className="tag">Design</span>
            <h4>Typography is 90% of your interface</h4>
            <span className="meta">5 min read</span>
          </a>
        </div>
      </section>

      <footer id="post-footer">
        <div className="newsletter">
          <h3>Get new essays in your inbox</h3>
          <p>One short read, twice a month. No noise.</p>
          <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <p className="copyright">Fieldnotes — thanks for reading.</p>
      </footer>
    </>
  )
}

export default App
