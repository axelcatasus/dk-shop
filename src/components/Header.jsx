import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HamburgerMenu from './HamburgerMenu';
import { header } from './header.module.scss';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
      {!isTabletOrMobile && nodes.map((node) => {
        return (
          <Link to={node.pathName} key={node.pathName}>
            {node.navigationAlias}
          </Link>
        )
      })}
      {isTabletOrMobile && <HamburgerMenu nodes={nodes} />}
    </header>
  );
}

export default Header;