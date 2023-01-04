export const SearchBar = ({ onChange }) => {
  return (
    <input
      className="pa3 mb3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search robots"
      onChange={onChange}
    />
  );
};
