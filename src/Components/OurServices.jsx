import React from 'react';
import {
  FaChartArea,
  FaDesktop,
  FaFolder,
  FaRegFileExcel,
} from 'react-icons/fa';

function OurServices() {
  function HostingCard({ icon, title, description, characteristic }) {
    return (
      <div className='relative mx-auto p-6 w-72 md:w-full lg:w-80 2xl:w-96 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0px_0px_30px] shadow-cyan-500/70 hover:shadow-cyan-500/70 transition-all duration-300'>
        {/* Background corner layers */}
        <div className='absolute -top-3 -right-3 w-[100px] h-[100px] rounded-3xl bg-cyan -z-1'></div>
        <div className='absolute -bottom-3 -left-3 w-[100px] h-[100px] rounded-3xl bg-cyan -z-1'></div>

        {/* Foreground content */}
        <div className='relative text-cyan z-10 text-start space-y-4 py-4 flex flex-col md:flex-row lg:flex-col items-start gap-4'>
          <div className='w-10 h-10 lg:w-12 lg:h-12 2xl:w-12 2xl:h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-md text-cyan'>
            {icon}
          </div>
          <div>
            <span className=' font-extrabold text-2xl'>{title}</span>
            <p className='text-sm text-gray-700 '>{description}</p>
          </div>
        </div>
      </div>
    );
  }
  const services = [
    {
      icon: <FaDesktop className='w-full h-full' />,
      title: 'Web Hosting',
      description: 'Reliable and fast web hosting solutions for your business.',
    },
    {
      icon: <FaChartArea className='w-full h-full' />,
      title: 'Business Dashboard',
      description: 'Visualize, manage, and track everything — no setup needed.',
    },
    {
      icon: <FaFolder className='w-full h-full' />,
      title: 'Website + Hosting',
      description: 'Launch-ready site, mobile-friendly, and yours from Day 1.',
    },
    // {
    //   icon: <FaRegFileExcel className='w-full h-full' />,
    //   title: 'Export & share',
    //   character: 'Disappear according the screen size',
    //   description:
    //     'User-friendly  dashboard that you will have ease on sharing and export data.',
    // },
  ];
  return (
    <>
      <>
        <div className='hero py-32  w-screen mx-auto '>
          <div className='container 2xl:px-30 lg:px-10 md:px-10 flex-col lg:flex-row'>
            <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
              Our Services
            </h3>
            <span className='text-5xl font-bold'>
              One Tool. Zero Headaches.
            </span>
            <p className='max-w-lg mb-8 text-black'>
              Website, dashboard, and database — all done-for-you and ready to
              go. No devs, no setup hell, no Frankenstein toolstack. Just launch
              and start building your business.
            </p>
            <div className='flex flex-col lg:flex-row gap-10 xl:gap-40 md:justify-between py-10'>
              {services.map((service, index) => (
                <HostingCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default OurServices;
