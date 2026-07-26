export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#top" className="logo">
          Chope<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#commute">Meet your commute</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <a href="#signup" className="nav-cta">
          Get early access
        </a>
      </div>
    </nav>
  );
}
