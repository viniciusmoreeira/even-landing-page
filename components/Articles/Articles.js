import React from 'react';

import s from './articles.module.scss';

export default function Articles() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.inner}>
          <div className={s.resources}>
            <h5>Resources</h5>

            <div className={s.grid}>
              <div>
                <h6>Survey Your Employees</h6>

                <p>
                  Financial wellness begins with understanding your employees.
                </p>

                <a href=''>Learn how</a>
              </div>

              <div>
                <h6>Guide to Financial Wellness</h6>

                <p>
                  Everything you need to know about Financial Wellness and how
                  to get there.
                </p>

                <a href=''>Read more</a>
              </div>

              <div>
                <h6>When Money Jars Trump 401(k)s</h6>

                <p>
                  For many, building short-term savings is a more immediate
                  priority than planning for the future.
                </p>

                <a href=''>Read more</a>
              </div>
            </div>
          </div>
          <div className={s.news}>
            <h5>Even In the News</h5>

            <div className={s.grid}>
              <div>
                <h4>Bloomberg</h4>

                <p>
                  Walmart's fintech partner helps break paycheck-to-paycheck
                  cycle.
                </p>

                <a href=''>Read more</a>
              </div>

              <div>
                <h4>ebn</h4>

                <p>
                  Kronos, Even partner to offer employees access to advance
                  paydar.
                </p>

                <a href=''>Read more</a>
              </div>

              <div>
                <h4>AP</h4>

                <p>
                  A lifeline for workers who face hardship between paychecks.
                </p>

                <a href=''>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
