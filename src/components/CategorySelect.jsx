import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const CategorySelect = ({ setCategory }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        distinct(field: {category: SELECT})
      }
    }
  `);

  return (
    <select onChange={e => setCategory(e.target.value)}>
      <option value="all">All</option>
      {data.allContentfulProduct.distinct.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategorySelect;