export default function Toolbar({ tool, setTool }) {
  const handleClick = (selected) => {
    setTool(selected);
  };

  return (
    <div className="Toolbar">
      <button onClick={() => handleClick('pencil')}>Pencil</button>
      <button onClick={() => handleClick('eraser')}>Eraser</button>
      <button onClick={() => handleClick('clear all')}>Clear All</button>
      <button onClick={() => handleClick('rainbow')}>Rainbow</button>
    </div>
  );
}
//rainbow //color palette //clear all
