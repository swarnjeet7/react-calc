function Button(props) {
  const { number, onClick } = props;

  function handleClick() {
    onClick(number);
  }

  return (
    <div className="btn" onClick={handleClick}>
      {number}
    </div>
  );
}

export default Button;
