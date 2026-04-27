// Timer.jsx — the big numerals + status chip
const { useState, useEffect, useRef } = React;

function fmt(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function StatusChip({ mode, remaining }) {
  if (mode === 'idle')    return <span className="chip idle"><span className="dot"/>idle</span>;
  if (mode === 'focus')   return <span className="chip focus"><span className="dot"/>focus · {fmt(remaining)}</span>;
  if (mode === 'break')   return <span className="chip break"><span className="dot"/>break · {fmt(remaining)}</span>;
  if (mode === 'done')    return <span className="chip done"><span className="dot"/>done</span>;
  return null;
}

function Timer({ mode, remaining, total, task }) {
  const display = mode === 'idle' ? fmt(total) : fmt(remaining);
  return (
    <div className="timer-wrap">
      <StatusChip mode={mode} remaining={remaining} />
      <div className={`timer-num ${mode === 'focus' ? 'running' : ''}`}>{display}</div>
      {task && <div className="timer-task">{task}</div>}
    </div>
  );
}

window.Timer = Timer;
