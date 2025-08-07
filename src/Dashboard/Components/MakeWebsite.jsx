import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';

const MakeWebsite = () => {
  const { user, getUserData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const primaryColors = [
    { value: '#06b6d4', label: 'Cyan' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#8b5cf6', label: 'Purple' },
    { value: '#ec4899', label: 'Pink' },
    { value: '#ef4444', label: 'Red' },
    { value: '#f97316', label: 'Orange' },
  ];

  const secondaryColors = [
    { value: '#0891b2', label: 'Dark Cyan' },
    { value: '#1d4ed8', label: 'Dark Blue' },
    { value: '#7e22ce', label: 'Dark Purple' },
    { value: '#db2777', label: 'Dark Pink' },
    { value: '#dc2626', label: 'Dark Red' },
    { value: '#ea580c', label: 'Dark Orange' },
  ];

  const selectedPrimary = watch('primary_color');
  const selectedSecondary = watch('secondary_color');

  const onSubmit = async (data) => {
    await getUserData;
    // console.log(getUserData);
    const newData = {
      ...data,
      company_id: getUserData.company_id,
    };
    console.log(newData);
    axios
      .post(`${import.meta.env.VITE_BACKEND}/orderWebsite`, newData)
      .then((res) => {
        console.log(res);
      });
  };

  const inputClass = (hasError) =>
    `custom-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
      hasError ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <div className='bg-cyan-50 min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-cyan-600 mb-4'>
            Get Your Professional Website
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Fill out the form below to order your custom website. We'll get back
            to you within 24 hours to discuss your project.
          </p>
        </header>

        <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='bg-cyan-500 py-4 px-6'>
            <h2 className='text-xl font-semibold text-white'>
              Website Order Form
            </h2>
          </div>

          <form className='p-6 md:p-8' onSubmit={handleSubmit(onSubmit)}>
            {/* Website Details */}
            <section className='mb-8'>
              <h3 className='text-lg font-medium text-cyan-600 mb-4 border-b border-cyan-100 pb-2'>
                Website Details
              </h3>
              <div className='grid grid-cols-1 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Website Type
                  </label>
                  <select
                    {...register('website_type', { required: true })}
                    className={inputClass(errors.websiteType)}
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Select website type
                    </option>
                    <option value='portfolio'>Portfolio Website</option>
                    <option value='business'>Business Website</option>
                    <option value='ecommerce'>E-commerce Store</option>
                    <option value='blog'>Blog</option>
                    <option value='custom'>Custom Web Application</option>
                  </select>
                  {errors.websiteType && (
                    <span className='text-red-500 text-xs mt-1'>
                      Website type is required
                    </span>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Number of Pages
                  </label>
                  <select
                    {...register('pages', { required: true })}
                    className={inputClass(errors.pages)}
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Select number of pages
                    </option>
                    {[...Array(7)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Page{i + 1 > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.pages && (
                    <span className='text-red-500 text-xs mt-1'>
                      Please select number of pages
                    </span>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Required Features
                  </label>
                  <textarea
                    {...register('features', { required: true, minLength: 10 })}
                    rows={3}
                    className={inputClass(errors.features)}
                    placeholder='List all the features you need for your website...'
                  />
                  {errors.features && (
                    <span className='text-red-500 text-xs mt-1'>
                      Please list at least 10 characters
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Color Preferences */}
            <section className='mb-8'>
              <h3 className='text-lg font-medium text-cyan-600 mb-4 border-b border-cyan-100 pb-2'>
                Color Preferences
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Primary Color
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {primaryColors.map((color) => (
                      <label key={color.value} className='relative'>
                        <input
                          type='radio'
                          value={color.value}
                          {...register('primary_color', { required: true })}
                          className='absolute opacity-0 w-0 h-0'
                        />
                        <div
                          className={`w-8 h-8 rounded-full cursor-pointer ${
                            selectedPrimary === color.value
                              ? 'ring-2 ring-offset-2 ring-gray-400'
                              : ''
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.label}
                        />
                      </label>
                    ))}
                  </div>
                  {errors.primary_color && (
                    <span className='text-red-500 text-xs mt-1'>
                      Please select a primary color
                    </span>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Secondary Color
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {secondaryColors.map((color) => (
                      <label key={color.value} className='relative'>
                        <input
                          type='radio'
                          value={color.value}
                          {...register('secondary_color', { required: true })}
                          className='absolute opacity-0 w-0 h-0'
                        />
                        <div
                          className={`w-8 h-8 rounded-full cursor-pointer ${
                            selectedSecondary === color.value
                              ? 'ring-2 ring-offset-2 ring-gray-400'
                              : ''
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.label}
                        />
                      </label>
                    ))}
                  </div>
                  {errors.secondary_color && (
                    <span className='text-red-500 text-xs mt-1'>
                      Please select a secondary color
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className='mb-8'>
              <h3 className='text-lg font-medium text-cyan-600 mb-4 border-b border-cyan-100 pb-2'>
                Additional Information
              </h3>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Project Description
                </label>
                <textarea
                  {...register('description', {
                    required: true,
                    minLength: 10,
                  })}
                  rows={4}
                  className={inputClass(errors.description)}
                  placeholder='Describe your website requirements, target audience, and any specific features you need...'
                />
                {errors.description && (
                  <span className='text-red-500 text-xs mt-1'>
                    Minimum 10 characters required
                  </span>
                )}
              </div>
              <div className='mt-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Reference Websites (URLs)
                </label>
                <textarea
                  {...register('references')}
                  rows={2}
                  className='custom-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
                  placeholder='Enter URLs of websites you like for reference...'
                />
              </div>
              <div className='mt-4'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Upload Files (Optional)
                </label>
                <input
                  type='file'
                  {...register('files')}
                  className='file-input file-input-bordered file-input-cyan w-full'
                  multiple
                />
                <span className='text-xs text-gray-500 mt-1'>
                  You can upload design files, logos, or any other relevant
                  documents.
                </span>
              </div>
            </section>

            {/* Terms and Conditions */}
            <div className='mb-6'>
              <label className='flex items-center gap-2 text-sm'>
                <input
                  type='checkbox'
                  {...register('terms_accepted', { required: true })}
                  className='checkbox checkbox-sm'
                />
                <span>
                  I agree to the{' '}
                  <a href='#' className='text-cyan-600 underline'>
                    Terms and Privacy Policy
                  </a>
                </span>
              </label>
              {errors.terms_accepted && (
                <span className='text-red-500 text-xs mt-1'>
                  You must accept the terms
                </span>
              )}
              <span className='block text-xs text-gray-500 mt-1'>
                * Additional information will be taken from our database.
              </span>
            </div>

            <div className='flex justify-center w-full'>
              <button
                type='submit'
                className='btn w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg'
              >
                Submit Order
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 ml-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeWebsite;
