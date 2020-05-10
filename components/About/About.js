import React from 'react';
import { FaPlay } from 'react-icons/fa';

import Lottie from './Lottie';

import s from './about.module.scss';

export default function About() {
  return (
    <>
      <div className={s.superior}>
        <div className={s.inner}>
          <div className={s.left}>
            <h3>We help people</h3>
            <ul>
              <li>save</li>
              <li>plan</li>
              <li>borrow</li>
              <li>spend</li>
            </ul>
            <h3>wisely.</h3>
          </div>

          <Lottie />

          <div className={s.right}>
            <p>
              Takes the guesswork out of budgeting so employees can stay on top
              of bills.
            </p>

            <div>
              <h4>Meet La'Shumbra</h4>
              <div className={s.video_holder}>
                <img src='/images/video.png' alt='' />
                <FaPlay />
              </div>
              <p>
                See how Automatic Savings helped La'Shumbra when she needed it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.inferior}>
        <div className={s.inner}>
          <div className={s.title}>
            <div>
              <h1>We don't:</h1>

              <h2>
                Sell data. Sell ads. Earn interest on your money. <span></span>
              </h2>
            </div>

            <div className={s.block}>
              <div />

              <div>
                <h3>
                  To create the opportunity for every single person to have
                  access to the toolset they need to make progress, we needed to
                  fundamentally rethink the financial system model. We only make
                  money on your subscription which aligns our incentives with
                  your best interest.
                  <button>How we make money</button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
