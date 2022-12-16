import * as React from 'react';
import { Link } from 'gatsby';
import { hamburger, hamburgerIcon, closeIcon, mobileNav, modal} from './hamburger-menu.module.scss';

const HamburgerMenu = ( {nodes} ) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={hamburger}>
        {!menuOpen ? 
        <button 
          className={hamburgerIcon}
          onClick={() => toggleMenu()}
          aria-label="Menu Toggle"
        /> : 
        <button 
          className={closeIcon}
          onClick={() => toggleMenu()}
          aria-label="Menu Toggle"
        />}
      </div>
      {menuOpen &&
      <div className={modal} onClick={() => setMenuOpen(false)} onKeyDown={(e) => e.key !== 'Tab' ? setMenuOpen(false) : ''} role="button" tabIndex={1}>
        <nav className={mobileNav}>
          {nodes.map((node) => 
            <Link to={node.pathName}>
              {node.navigationAlias}
            </Link>
          )}
        </nav>
      </div>}
    </>
  );
}

export default HamburgerMenu;

