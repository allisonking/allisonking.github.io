// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';
import favicon from '../../../static/favicon.ico';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
