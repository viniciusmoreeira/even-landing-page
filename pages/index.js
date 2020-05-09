import React from 'react';
import { NextSeo } from 'next-seo';

import { Header, Main, About, Resources } from '../components';

export default () => (
  <>
    <NextSeo
      title='Even - We help people'
      description='Turning paychecks into progress'
      canonical='https://even-landing-page.now.sh/'
      hrefLang='en'
      openGraph={{
        url: 'https://even-landing-page.now.sh/',
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

    <Header />
    <Main />
    <About />
    <Resources />

    <div>
      <span>© {new Date().getFullYear()} Even Responsible Finance, Inc.</span>
    </div>
  </>
);
