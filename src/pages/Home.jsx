import { useState } from 'react';
import { searchForShows } from '../api/tvMaze';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  console.log(searchOptions);
  const onSearchInputChange = event => {
    setSearchString(event.target.value);
  };

  const onRadioChange = event => {
    setSearchOptions(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();
    try {
      setApiDataError(null);
      if (searchOptions === 'shows') {
        const result = await searchForShows(searchString);
        setApiData(result);
      } else {
        const result = await searchForShows(searchString);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div> error occured : {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <label>
          Shows
          <input
            type="radio"
            name="search-options"
            value="shows"
            onChange={onRadioChange}
            checked={searchOptions === 'shows'}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-options"
            value="actors"
            onChange={onRadioChange}
            checked={searchOptions === 'actors'}
          />
        </label>
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
