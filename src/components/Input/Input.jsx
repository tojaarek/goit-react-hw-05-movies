const Input = ({ inputValue, onSubmit }) => {
  return (
    <form>
      <input
        type="text"
        name="query"
        value={inputValue}
        onSubmit={event => onSubmit(event.target.value)}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Input;
