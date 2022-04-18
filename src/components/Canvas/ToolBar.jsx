export default function Toolbar({ eraser, image, setImage, setTool }) {
  const handleClick = (selected) => {
    setTool(selected);
  };

  const handleClear = () => {
    const array = image.colorArray.map((item, index) => {
      return eraser.colorArray[index];
    });
    const newImage = { ...image, colorArray: array };
    setImage(newImage);
  };

  return (
    <div className="Toolbar">
      <button onClick={() => handleClick('pencil')}>Pencil</button>
      <button onClick={() => handleClick('eraser')}>Eraser</button>
      <button onClick={() => handleClear()}>Clear All</button>
      <button onClick={() => handleClick('rainbow')}>Rainbow</button>
    </div>
  );
}
//rainbow //color palette //clear all
