import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col w-full'>
      <section></section>
      <section>
        <div>
          <h3>Connect with us</h3>
          <p>
            Historic Germantown is more than our home; it’s our inspiration. We
            take pride in being part of a culturally rich and progressive
            community. Our offices are located in the 18th-century
            Clarkson-Watson House, once headquarters to Thomas Jefferson and the
            office of the U.S. Attorney General. Come get to know us. Email or
            call to set up an appointment today.
          </p>
          <img
            src='https://roachjustice.com/wp-content/uploads/2017/06/Contact-an-Attorney.png'
            alt=''
          />
        </div>

        <div>
          <form>
            <div className='flex flex-col'>
              <label>First Name</label>
              <input
                type='text'
                name='firstNameEL'
                placeholder='John'
                className=''
                required
              />
            </div>
            <div className='flex flex-col'>
              <label>Last Name</label>
              <input
                type='text'
                name='lastNameEl'
                placeholder='Doe'
                className=''
                required
              />
            </div>
            <div className='flex flex-col'>
              <label>Email*</label>
              <input
                type='email'
                name='emailEl'
                placeholder='John'
                className=''
                required
              />
            </div>
            <div className='flex flex-col'>
              <label>Phone</label>
              <input
                type='phone'
                name='phoneEl'
                placeholder='+1 0000....'
                className=''
                required
              />
            </div>
            <div className='flex flex-col'>
              <label>How can we help</label>
              <textarea
                name='textAreaEl'
                placeholder='I want to know more about ...'
              ></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
