// For topic selector in search tool
import React from 'react';
import Select from 'react-select';
import { useQueryParam, StringParam } from 'use-query-params';

const FilterSelector = params => {
  // Get topic URL parameter
  const [param, setParam] = useQueryParam(params.title ? params.title : "Topic", StringParam);

  const handleChange = selectedOption => {
    params.setState({ selectedOption });
    // Set URL Parameter
    setParam(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };
  console.log(params.option)
  return (
    <div className="filter-selector">
      {params.title}
      <Select
        value={params.option.selectedOption}
        onChange={handleChange}
        options={params.options}
        isSearchable={true}
        isMulti={false}
        isDisabled={params.disabled}
        name={params.title}
      />
    </div>
  );
}

export default FilterSelector