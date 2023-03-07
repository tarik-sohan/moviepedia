import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();

  return <div>Show id is {showId}</div>;
};

export default Show;
