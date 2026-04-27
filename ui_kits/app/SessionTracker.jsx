// SessionTracker.jsx — today's count + tick marks
function SessionTracker({ done, goal, current }) {
  const ticks = [];
  for (let i = 0; i < goal; i++) {
    let cls = 'tick';
    if (i < done) cls += ' done';
    else if (i === done && current) cls += ' now';
    ticks.push(<div key={i} className={cls}/>);
  }
  return (
    <div className="tracker">
      <div className="tracker-head">
        <span className="t-label">today</span>
        <span className="tracker-count">{done}<span className="tracker-of"> / {goal}</span></span>
      </div>
      <div className="ticks">{ticks}</div>
    </div>
  );
}
window.SessionTracker = SessionTracker;
