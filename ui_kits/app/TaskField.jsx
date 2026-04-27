// TaskField.jsx — single optional input above the timer
function TaskField({ value, onChange, disabled }) {
  return (
    <div className="task-field">
      <span className="t-label">task</span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="what are you working on?"
        disabled={disabled}
      />
    </div>
  );
}
window.TaskField = TaskField;
