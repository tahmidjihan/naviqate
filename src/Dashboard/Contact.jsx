import React from 'react';

function Contact() {
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl'>Contact</h2>
        <div className='py-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='card w-96 bg-base-100 card-sm shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title'>Small Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
