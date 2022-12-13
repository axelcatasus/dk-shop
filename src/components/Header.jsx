import * as React from 'react';
import { Link } from 'gatsby';
import { header } from './header.module.scss';

const Header = () => {
  return (
    <header className={header}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </header>
  );
}

export default Header;