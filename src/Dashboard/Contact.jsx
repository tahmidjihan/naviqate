import React from 'react';
import Logo from '../Components/logo';
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaLink } from 'react-icons/fa';

function Contact() {
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 lg:pl-16 xl:p-10 overflow-x-hidden container'>
        {' '}
        <h2 className='text-xl md:text-2xl'>Contact</h2>
        <div className='py-2'>
          <div className='card w-full h-full rounded-3xl cyan-shadow bg-base-100 card-sm shadow-sm'>
            <div className='card-body p-5 h-full'>
              <div className='flex justify-between items-center border-b-3 border-cyan-500 pb-3'>
                <div className='flex items-center gap-2'>
                  <img src='.././Assets/icon.png' className='w-10' alt='' />
                  <h4 className='font-bold text-gray-600 text-2xl'>
                    Chat With Us
                  </h4>
                </div>
                <div className='flex gap-5 text-cyan text-3xl'>
                  <FaInstagram />
                  <FaEnvelope />
                  <FaPhoneAlt />
                </div>
              </div>
              <div className='flex flex-col h-full min-h-screen md:min-h-[600px] gap-5 mt-5 justify-between'>
                <div>
                  <div className='card rounded-2xl bg-base-300'>
                    <div className='card-body'>
                      <div className='flex items-center gap-2'>
                        <img
                          src='.././Assets/icon.png'
                          className='w-10'
                          alt=''
                        />
                        <h4 className='font-bold text-gray-600 text-2xl'>
                          Chat With Us
                        </h4>
                      </div>
                      <div>
                        <span>
                          *The conversation goes to a real human for possessing
                          and answering. Many question could be answered with
                          AI. For any mistake we will be accountable.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    className='textarea w-full focus:outline-none focus:border-0 focus:ring-2 focus:ring-cyan-500'
                    rows=''
                    placeholder='Type or message here'
                  ></textarea>
                  <div className='flex justify-between items-center'>
                    <input
                      type='file'
                      className='file-input file-input-sm my-2'
                    />
                    <button className='btn primary-btn'>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
