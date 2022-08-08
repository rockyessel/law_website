import React from 'react';
import { Link } from 'react-router-dom';

const PracticeArea = () => {
  return (
    <div>
      <section>
        <h3>Practice Areas</h3>
      </section>

      <section className='flex flex-col md:flex-row'>
        <div className='flex flex-wrap gap-8 justify-center'>
          <div className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Sports and Entertainment Law
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              Roach Law, LLC provides contract review and opportunity vetting
              for entertainers and athletes. Marirose has worked for the NFL and
              has represented entertainers, record labels, and athletes.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>

          <div className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Family Law
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              The family law practice at Roach Law is robust, and our lawyers
              handle a broad array of family law issues. We can help you with
              your divorce and all related matters.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>

          <div className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Civil Litigation
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              Our civil litigation attorneys work closely with clients to
              evaluate their potential claims or defenses related to the
              commercial, professional, employment, and personal dispute that is
              the subject of litigation.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>

          <div className='w-[400px] bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Immigration Law
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              We are able to help with everything from helping you to secure the
              types of visas that you might need, assisting you with applying
              for U.S. residency, helping you through the naturalization process
              or defending you in deportation and removal proceedings.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>

          <div className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Business Incorporation
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              Getting your business started does not have to be a complicated
              process. With help from our attorneys, you will be able to
              navigate the legal waters to get closer to establishing your
              business.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>

          <div className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
            <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
              Personal Injury
            </span>
            <img src='/f.jpg' alt='' className='w-[400px]' />
            <p className='px-2 w-full text-center font-medium'>
              If you have been injured because of the negligence of another, you
              may need to get experienced legal help from a personal injury
              lawyer. We represent clients in a variety of personal injury
              matters and work hard to get you what you deserve.
            </p>
            <Link to='/contact'>
              <span className='bg-yellow-800 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                Schedule Consultation
              </span>
            </Link>
          </div>
        </div>

        <div className='p-4 bg-white shadow mb-5 mr-5 flex flex-col gap-2'>
          <h4 className='text-md font-medium inline-flex flex-shrink-0'>
            Organization We Serve
          </h4>
          <ol>
            <li>Activist organizations</li>
            <li>Animal welfare organizations</li>
            <li>Arts organizations</li>
            <li>Business leagues</li>
            <li>Churches</li>
            <li>Colleges & Universities</li>
            <li>Community organizations</li>
            <li>Crowd-funding and fundraising organizations</li>
            <li>Donor-Advised Funds</li>
            <li>Educational institutions, both public and private</li>
            <li>Environmental organizations</li>
            <li>Fraternities and sororities</li>
            <li>“Friends of” organizations</li>
            <li>Grant-making organizations</li>
            <li>Libraries</li>
            <li>Non-charitable nonprofit organizations</li>
            <li>Private foundations</li>
            <li>Private operating foundations</li>
            <li>Public charities</li>
            <li>Religious organizations and groups</li>
            <li>Schools</li>
            <li>Social clubs</li>
            <li>Social services/social welfare organizations</li>
            <li>Supporting Organizations</li>
            <li>Trade associations</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default PracticeArea;
