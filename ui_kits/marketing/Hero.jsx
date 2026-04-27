// Hero.jsx — oversized timer numerals on paper
function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        <span className="t-label">a pomodoro timer</span>
      </div>
      <div className="hero-num">25:00</div>
      <h1 className="hero-headline">Twenty-five minutes.<br/>That's it.</h1>
      <div className="hero-cta">
        <a className="btn-primary" href="../app/index.html">
          start <kbd className="kbd dark">SPACE</kbd>
        </a>
        <span className="hero-meta">no accounts. no sync. nothing to install.</span>
      </div>
    </section>
  );
}
window.Hero = Hero;
