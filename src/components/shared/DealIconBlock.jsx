function DealIconBlock({ img, text, img1 }) {
  return (
    <div className="dealiconblock">
      <img src={img} className="dealiconblock__image" />
      <div className="shadow_section">
        <img src={img1} className="shadow_Icon" />
      </div>

      <h3 className="dealiconblock__text">{text}</h3>
    </div>
  );
}

export default DealIconBlock;
