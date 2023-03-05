import { useState } from 'react';

const Home = () => {
  const [searchString, setSearchString] = useState('');

  const onSearchInputChange = event => {
    setSearchString(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchString}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          onChange={onSearchInputChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
