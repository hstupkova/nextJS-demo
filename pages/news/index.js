// our-domain.com/news

import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
