// CommandPalette.jsx — ⌘K overlay
const { useEffect: useEffectCP, useState: useStateCP } = React;

function CommandPalette({ open, onClose, onCommand }) {
  const [q, setQ] = useStateCP('');
  const [sel, setSel] = useStateCP(0);
  const all = [
    { id: 'start',  name: 'start a 25 minute pomodoro', keys: ['SPACE'] },
    { id: 'start50',name: 'start a 50 minute pomodoro', keys: ['2'] },
    { id: 'start90',name: 'start a 90 minute pomodoro', keys: ['3'] },
    { id: 'long',   name: 'start a long break (15 min)', keys: ['⇧','B'] },
    { id: 'stop',   name: 'stop current', keys: ['ESC'] },
    { id: 'skip',   name: 'skip current break', keys: ['→'] },
    { id: 'reset',  name: 'reset today\u2019s count', keys: [] },
  ];
  const items = all.filter(x => x.name.toLowerCase().includes(q.toLowerCase()));

  useEffectCP(() => { if (open) { setQ(''); setSel(0); } }, [open]);
  useEffectCP(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s+1, items.length-1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(s-1, 0)); }
      else if (e.key === 'Enter') { e.preventDefault(); if (items[sel]) { onCommand(items[sel].id); onClose(); } }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [open, sel, items, onClose, onCommand]);

  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input">
          <span className="caret">›</span>
          <input
            autoFocus
            value={q}
            onChange={e => { setQ(e.target.value); setSel(0); }}
            placeholder="find or run"
          />
        </div>
        <div className="palette-list">
          {items.map((it, i) => (
            <div className={`palette-item ${i === sel ? 'sel' : ''}`} key={it.id}
                 onMouseEnter={() => setSel(i)}
                 onClick={() => { onCommand(it.id); onClose(); }}>
              <span className="palette-name">{it.name}</span>
              <span className="palette-keys">
                {it.keys.map((k, j) => <kbd className="kbd" key={j}>{k}</kbd>)}
              </span>
            </div>
          ))}
          {items.length === 0 && <div className="palette-empty">nothing matches.</div>}
        </div>
      </div>
    </div>
  );
}
window.CommandPalette = CommandPalette;
