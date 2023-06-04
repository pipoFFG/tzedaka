import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


const Layout = ({ children, isLogged }) => {
  return (
    <>
        <Head>
            <title>Tzedaká</title>
            <link rel="shortcut icon" href="/public/favicon.png" />
        </Head>
      <Navbar isLogged={isLogged} />
        <main>
            {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
