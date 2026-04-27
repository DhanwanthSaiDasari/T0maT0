// Pitch.jsx — three short serif paragraphs
function Pitch() {
  const items = [
    {
      label: 'what it is',
      body: 'A pomodoro timer. You press space, you work for twenty-five minutes, you stop. There is one screen. There are no settings.',
    },
    {
      label: 'what it isn\u2019t',
      body: 'Not a productivity suite. Not a habit tracker. Not a coach. There are no streaks to lose, no dashboards to study, no notifications you didn\u2019t ask for.',
    },
    {
      label: 'how to use it',
      body: 'Open the page. Optionally type what you\u2019re working on. Press space. When the bell rings, take a break or don\u2019t. The timer doesn\u2019t care.',
    },
  ];
  return (
    <section className="pitch">
      {items.map((it, i) => (
        <div className="pitch-row" key={i}>
          <span className="t-label">{it.label}</span>
          <p className="pitch-body">{it.body}</p>
        </div>
      ))}
    </section>
  );
}
window.Pitch = Pitch;
