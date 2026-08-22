const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    return count;
  };

  return (
    <div>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
