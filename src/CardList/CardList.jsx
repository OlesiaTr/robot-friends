// Components
import { CardItem } from "../CardItem/CardItem";

export const CardList = ({ data }) => {
  return (
    <ul className="list flex flex-wrap justify-center">
      {data.map(({ id, ...otherProps }) => {
        return (
          <li key={id}>
            <CardItem {...otherProps} />
          </li>
        );
      })}
    </ul>
  );
};
