import React from 'react';
import s from './header.module.scss';

export default function Header() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.nav}>
          <a href='/'>Even</a>
        </div>
        <div className={s.hero}>
          <div className={s.box_one} />
          <div className={s.box_two} />
        </div>
        <div className={s.title}>Turning paychecks into progress.</div>
      </div>
    </>
  );
}
