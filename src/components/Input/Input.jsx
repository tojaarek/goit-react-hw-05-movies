import { Field, Button } from './Input.styled';

const Input = ({ inputValue, onSubmit }) => {
  return (
    <form>
      <Field
        type="text"
        name="query"
        value={inputValue}
        onSubmit={event => onSubmit(event.target.value)}
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Input;
