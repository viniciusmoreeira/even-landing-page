import React from 'react';
import s from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.inner}>
          <div className={s.left}>
            <h3>Even</h3>
            <h4>© {new Date().getFullYear()} Even Responsible Finance, Inc.</h4>
          </div>
          <div className={s.right}>
            <div className={s.searchbox}>
              <input
                type='text'
                placeholder='Stay in the loop - sign up for email updates'
              />
              <button>Sign Up</button>
            </div>
            <div className={s.sections}>
              <ul>
                <h4>Platform</h4>

                <li>Earned wage access</li>
                <li>Automatic Savings</li>
                <li>Student Loans</li>
                <li>Financial Couseling</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>

              <ul>
                <h4>Science</h4>

                <li>COVID-19 Response</li>
                <li>Product</li>
                <li>Security</li>
              </ul>

              <ul>
                <h4>Employees</h4>

                <li>App</li>
                <li>FAQs</li>
                <li>Podcasts</li>
                <li>Help Center</li>
                <li>Community</li>
              </ul>

              <ul>
                <h4>About</h4>

                <li>Our Story</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={s.links}>
              <span>Press</span>/<span>Security</span>/
              <span>Terms & Conditions</span>/<span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
