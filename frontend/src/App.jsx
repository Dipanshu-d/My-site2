import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const summarize = async () => {
    const res = await fetch('http://localhost:5000/summarize',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({text})
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div>
      <h1>AI Notes Summarizer</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={summarize}>Summarize</button>
      <pre>{summary}</pre>
    </div>
  );
}
