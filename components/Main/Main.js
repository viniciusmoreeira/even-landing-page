import React from 'react';
import s from './main.module.scss';

export default function Main() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.title}>
          The program statistically proven to <span>increase savings</span> and
          <span> reduce employee turnover.</span>
        </div>

        <div className={s.logos}>
          <img src='/images/allstate.png' alt='' />
          <img src='/images/kronos.png' alt='' />
          <img src='/images/sams.png' alt='' />
          <img src='/images/walmart.png' alt='' />
        </div>

        <div className={s.outer_box}>
          <div className={s.inner_box}>
            <h1>E</h1>
            <h1>V</h1>
            <h1>E</h1>
            <h1>N</h1>
          </div>
        </div>

        <div className={s.subtitle}>
          <h2>Join industry leading teams using Even.</h2>
          <p>
            Over 400,000 happy employees are already on the road to financial
            wellness. Join them.
          </p>
        </div>
      </div>
    </>
  );
}
