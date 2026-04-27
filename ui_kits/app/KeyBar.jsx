// KeyBar.jsx — bottom-fixed shortcut bar
function KeyBar({ mode }) {
  const items = [
    { keys: ['SPACE'], label: mode === 'focus' || mode === 'break' ? 'pause' : 'start' },
    { keys: ['ESC'], label: 'stop' },
    { keys: ['→'], label: 'skip break' },
    { keys: ['⌘', 'K'], label: 'command' },
    { keys: ['?'], label: 'all keys' },
  ];
  return (
    <div className="keybar">
      {items.map((it, i) => (
        <span className="kb-pair" key={i}>
          {it.keys.map((k, j) => <kbd className="kbd" key={j}>{k}</kbd>)}
          <span className="kb-label">{it.label}</span>
        </span>
      ))}
    </div>
  );
}
window.KeyBar = KeyBar;
