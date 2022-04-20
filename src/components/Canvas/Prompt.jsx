import React, { useEffect, useState } from 'react';
import styles from '../../views/Canvas/Canvas.css';

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
    <div className={styles.Prompt}>
      {noun && (
        <span className={prompt}>
          You could draw a(n) {adjective} {noun}!
        </span>
      )}
      <button className={styles.canvasButton} onClick={handleClick}>
        Generate a prompt!
      </button>
    </div>
  );
}
