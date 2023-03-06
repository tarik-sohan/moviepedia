import { useState } from 'react';
import { searchForShows } from '../api/tvMaze';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = event => {
    setSearchString(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShows(searchString);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div> error occured : {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
