import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {children}
    <footer style={{ textAlign: 'center', marginTop: '2em' }}>
      <hr />
      <span>A project by Sam Uzoma 🎉</span>
    </footer>
  </div>
);

export default Layout;
