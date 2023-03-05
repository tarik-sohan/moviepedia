import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.text}>
            {
              <Link to={item.to} key={item.text}>
                {item.text}
              </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
