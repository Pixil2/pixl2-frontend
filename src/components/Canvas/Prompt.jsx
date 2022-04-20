import React, { useEffect, useState } from 'react';

export default function Prompt() {
  const [noun, setNoun] = useState('');
  const [adjective, setAdjective] = useState('');

  const handleClick = () => {
    const fetchData = async () => {
      const adj = await fetch(
        'https://random-word-form.herokuapp.com/random/adjective'
      );
      const noun = await fetch(
        'https://random-word-form.herokuapp.com/random/noun'
      );
      const adjRes = await adj.json();
      const nounRes = await noun.json();
      setNoun(nounRes);
      setAdjective(adjRes);
    };
    fetchData();
  };

  return (
    <div className="Prompt">
      <button onClick={handleClick}>Generate a prompt!</button>
      {noun && (
        <span className={prompt}>
          You could draw a(n) {adjective} {noun}!
        </span>
      )}
    </div>
  );
}
