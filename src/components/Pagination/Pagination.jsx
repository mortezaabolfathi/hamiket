import React from 'react';
import { Link } from 'react-router-dom';
const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              <Link to={`/admin/products/${number}`} className="p-4">
              <div className="">{number}</div>
              </Link>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;