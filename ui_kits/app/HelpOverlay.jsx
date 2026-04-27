// HelpOverlay.jsx — full keyboard reference
function HelpOverlay({ open, onClose }) {
  if (!open) return null;
  const groups = [
    { title: 'session', rows: [
      [['SPACE'], 'start or pause'],
      [['ESC'], 'stop · or close any overlay'],
      [['→'], 'skip the current break'],
    ]},
    { title: 'duration', rows: [
      [['1'], '25 minute pomodoro'],
      [['2'], '50 minute pomodoro'],
      [['3'], '90 minute pomodoro'],
      [['⇧','B'], 'long break (15 min)'],
    ]},
    { title: 'navigation', rows: [
      [['⌘','K'], 'command palette'],
      [['?'], 'this overlay'],
    ]},
  ];
  return (
    <div className="overlay" onClick={onClose}>
      <div className="help" onClick={e => e.stopPropagation()}>
        <div className="help-head">
          <h2 className="t-h2" style={{margin:0}}>keyboard</h2>
          <span className="t-small">press <kbd className="kbd">ESC</kbd> to close</span>
        </div>
        <div className="help-grid">
          {groups.map(g => (
            <div className="help-col" key={g.title}>
              <span className="t-label">{g.title}</span>
              {g.rows.map((r, i) => (
                <div className="help-row" key={i}>
                  <span className="help-keys">
                    {r[0].map((k, j) => <kbd className="kbd" key={j}>{k}</kbd>)}
                  </span>
                  <span className="help-label">{r[1]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.HelpOverlay = HelpOverlay;
