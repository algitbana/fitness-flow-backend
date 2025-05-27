import React, { useState } from 'react';

function ProgressDashboard() {
  const [progressEntries, setProgressEntries] = useState([]);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !note) return;

    const newEntry = {
      date,
      note,
      id: Date.now(),
    };

    setProgressEntries([...progressEntries, newEntry]);
    setDate('');
    setNote('');
  };

  return (
    <div className="dashboard-container">
      <form onSubmit={handleSubmit} className="progress-form">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Note:</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="What did you achieve today?"
        />

        <button type="submit">Add Progress</button>
      </form>

      <ul className="progress-list">
        {progressEntries.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.date}:</strong> {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressDashboard;
