import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import './category-select.scss';

const CategorySelect = ({ setCategory, selectedCategory }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        distinct(field: {category: SELECT})
      }
    }
  `);
  
  const categories = data.allContentfulProduct.distinct;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  return (
    <>
      {!isMobile &&<button className={selectedCategory === 'all' ? 'active' : ''} value='all' aria-label='all' onClick={() => setCategory('all')}>All products</button>}
      {!isMobile && categories.map(category => (
        <button className={selectedCategory === category ? 'active' : ''} key={category} value={category} aria-label={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
      {isMobile && <select value={selectedCategory} onChange={e => setCategory(e.target.value)}>
        <option value='all'>All products</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>}
    </>
  );
}

export default CategorySelect;