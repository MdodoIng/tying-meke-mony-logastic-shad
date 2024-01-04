import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const HeadSEO = ({ site = {}, page = {}, schema }: any) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="description"
        content="Discover our top-quality exports and unparalleled customer service. As a trusted exporting company, we pride ourselves on delivering excellence in every shipment. Browse our extensive range of products today and experience the difference."
      />
      <link rel="icon" href="micon.png" sizes="any" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.lineicons.com/3.0/lineicons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script src="https://cdn.tailwindcss.com" />

      {/*  */}

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" href="../../assets/icons/icon.png" sizes="any" />

      <link rel="apple-touch-icon" href="../../assets/icons/icon.png" />
      <meta property="og:description" content="Discover our top-quality exports and unparalleled customer service. As a trusted exporting company, we pride ourselves on delivering excellence in every shipment. Browse our extensive range of products today and experience the difference." />
      <meta name="twitter:description" content="Discover our top-quality exports and unparalleled customer service. As a trusted exporting company, we pride ourselves on delivering excellence in every shipment. Browse our extensive range of products today and experience the difference." />
      <meta property="og:image" content="../../assets/icons/icon.png" />
      <meta name="twitter:image" content="../../assets/icons/icon.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Aldan international" />
    </Head>
  );
};

export default HeadSEO;
