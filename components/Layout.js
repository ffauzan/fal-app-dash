import React from "react";
import Head from "next/head";
import Header from "./Header";

function Layout({ title, children }) {
  return (
    <div className="bg-[#232E43]">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header/> */}
      <Header />
      {/* <Header3/> */}
      <main className="mx-auto min-h-screen max-w-screen-xl lg:p-2 lg:pt-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;
