export default function Toolbar({
  eraser,
  image,
  setImage,
  setTool,
  color,
  setColor,
}) {
  const handleClick = (selected) => {
    setTool(selected);
  };

  const handleColor = (e) => {
    console.log('e', e.target.value);
    setColor(e.target.value);
    setTool('pencil');
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
      <input type="color" value={color} onChange={(e) => handleColor(e)} />
      <button onClick={() => handleClick('eraser')}>Eraser</button>
      <button onClick={() => handleClear()}>Clear All</button>
      <button onClick={() => handleClick('rainbow')}>Rainbow</button>
    </div>
  );
}
//color palette
