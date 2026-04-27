// Keys.jsx — full keyboard reference, presented as the feature list
function Keys() {
  const groups = [
    { title: 'session', rows: [
      [['SPACE'], 'start or pause'],
      [['ESC'], 'stop'],
      [['→'], 'skip break'],
    ]},
    { title: 'duration', rows: [
      [['1'], '25 min'],
      [['2'], '50 min'],
      [['3'], '90 min'],
      [['⇧','B'], 'long break'],
    ]},
    { title: 'navigation', rows: [
      [['⌘','K'], 'command palette'],
      [['?'], 'all keys'],
    ]},
  ];
  return (
    <section className="keys-section">
      <h2 className="keys-headline">The keys are the interface.</h2>
      <div className="keys-grid">
        {groups.map(g => (
          <div className="keys-col" key={g.title}>
            <span className="t-label">{g.title}</span>
            {g.rows.map((r, i) => (
              <div className="keys-row" key={i}>
                <span className="keys-keys">
                  {r[0].map((k, j) => <kbd className="kbd" key={j}>{k}</kbd>)}
                </span>
                <span className="keys-label">{r[1]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
window.Keys = Keys;
