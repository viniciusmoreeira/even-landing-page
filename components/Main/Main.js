import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaStar, FaApple, FaGooglePlay } from 'react-icons/fa';

import s from './main.module.scss';

export default function Main() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.title}>
          The program statistically proven to <span>increase savings</span> and
          <span> reduce employee turnover.</span>
        </div>

        <Fade cascade direction='top' damping='0.3' className={s.logos}>
          <img src='/images/allstate.png' alt='' />
          <img src='/images/kronos.png' alt='' />
          <img src='/images/sams.png' alt='' />
          <img src='/images/walmart.png' alt='' />
        </Fade>

        <div className={s.outer_box}>
          <div className={s.inner_box}>
            <h1>E</h1>
            <h1>V</h1>
            <h1>E</h1>
            <h1>N</h1>
          </div>
        </div>

        <Fade cascade direction='top' damping='0.3' className={s.subtitle}>
          <h2>Join industry leading teams using Even.</h2>
          <p>
            Over 400,000 happy employees are already on the road to financial
            wellness. Join them.
          </p>
        </Fade>

        <Fade cascade className={s.app}>
          <div className={s.iphone}>
            <img src='/images/iphone.png' alt='' />
          </div>

          <div className={s.app_title}>
            <h2>
              Get paid <br />
              on demand.
            </h2>
            <p>
              Send your pay to your bank account in one business day, or pick it
              up instantly at any U.S Walmart. No hidden fees, no loans, no
              interest.
            </p>

            <div className={s.app_store}>
              <div className={s.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>
                4.9 <span>out of 5</span>
              </h3>
              <p>16.7k reviews</p>
              <button>
                <FaApple />
                <p>
                  Download on the <span>AppStore</span>
                </p>
              </button>

              <div className={s.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>
                4.8 <span>out of 5</span>
              </h3>
              <p>16.6k reviews</p>
              <button>
                <FaGooglePlay />
                <p>
                  GET IT ON <span>GooglePlay</span>
                </p>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
