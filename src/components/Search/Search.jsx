import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities, fetchLocationData } from '../../api/index';
import { Button } from '@mui/material';

const Search = ({ onSearchChange, addLocation }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <div className='search-wrap'>
      <AsyncPaginate
        placeholder="Search for cities"
        debounceTimeout={600}
        value={searchValue}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
      />
      <Button onClick={()=> searchValue && addLocation(searchValue)}>Add</Button>
    </div>
  );
};

export default Search;
