export const CardItem = ({ name, username, email }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img
        src={`https://robohash.org/${username}?size=200x200`}
        alt={username}
        className="mb2 center"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
