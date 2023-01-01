function TextBoxBlock({ text }) {
  return (
    <div className="textboxblock">
      <div className="textboxblock__box"></div>
      <p className="textboxblock__text">{text}</p>
    </div>
  );
}

export default TextBoxBlock;
