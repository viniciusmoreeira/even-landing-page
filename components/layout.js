import React from 'react';
import { NextSeo } from 'next-seo';

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title='Even - We help people'
        description='Turning paychecks into progress'
        canonical='https://viniciusmoreeira.now.sh/'
        hrefLang='en'
        openGraph={{
          url: 'https://viniciusmoreeira.now.sh/',
          title: 'Even - We help people',
          description: 'Turning paychecks into progress',
          images: [
            {
              url: 'https://i.imgur.com/HX4hg5T.png',
              width: 800,
              height: 600,
              alt: 'Website Logo',
            },
          ],
          site_name: 'Even - We help people',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      {children}

      <div>
        <span>© {new Date().getFullYear()} Footer.</span>
      </div>
    </>
  );
}
