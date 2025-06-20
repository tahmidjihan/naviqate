import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: 'I forgot my password. What should I do?',
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: 'How do I update my profile information?',
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ];
  return (
    <div
      className='bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center px-4'
      style={{
        backgroundImage: 'url(./Assets/FaqBG.png)',
      }}
    >
      <h1 className='text-black text-5xl font-extrabold text-center'>
        Frequently Asked Questions
      </h1>

      <div className='hidden md:block  shadow-sm max-w-5xl mx-auto my-10  rounded-3xl overflow-hidden'>
        <div className='card-body bg-base-100 p-5 md:p-10 '>
          <div className='overflow-x-hidden rounded-xl '>
            <div className='join join-vertical bg-base-100'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='join-item border-b border-gray-300 p-4'
                >
                  <div className='collapse collapse-arrow join-item border-base-300 border'>
                    <input type='radio' name='my-accordion-4' />
                    <div className='collapse-title font-semibold'>
                      {faq.question}
                    </div>
                    <div className='collapse-content'>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
