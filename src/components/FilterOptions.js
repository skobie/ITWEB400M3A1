import React from 'react';

const FilterOptions = ({ filterTasks }) => {
  const handleFilterChange = (e) => {
    filterTasks(e.target.value);
  };

  return (
    <div>
      <h3>Filter Options</h3>
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
    </div>
  );
};

export default FilterOptions;