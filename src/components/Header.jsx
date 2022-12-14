import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HamburgerMenu from './HamburgerMenu';
import { header, headerLink} from './header.module.scss';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const data = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: {order: ASC}) {
        nodes {
          pathName
          navigationAlias
          order
        }
      }
    }
  `)

  const { allContentfulPage } = data;
  const { nodes } = allContentfulPage;
  
  return (
    <header className={header}>
      {!isMobile && nodes.map((node) => {
        return (
          <Link to={node.pathName} key={node.pathName} className={headerLink}>
            {node.navigationAlias}
          </Link>
        )
      })}
      {isMobile && <HamburgerMenu nodes={nodes} />}
    </header>
  );
}

export default Header;