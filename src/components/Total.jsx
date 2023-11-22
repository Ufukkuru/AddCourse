import React from 'react';
import { useSelector } from 'react-redux';

function Total() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) =>
    data
      .filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + parseFloat(course.cost), 0))

  return (
    <>
      <div className='text-3xl text-white relative right-0'>
        Total price: {totalCost}
      </div>
    </>
  );
}

export default Total;
