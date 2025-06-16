import React from 'react';

const data = [
  ['🐢 2–6 months to launch', '⚡ 7-Day MVP'],
  ['💸 Burn cash before validation', '💰 Free website'],
  [
    '👻 Devs ghost you, agencies delay',
    '👨‍💻 Dedicated Dashboard and fast response',
  ],
  ['😨 Need Huge Money', '🚀 Small subscription'],
  [
    '💀 Hidden fees everywhere',
    '🧾 No Hidden Fees – Straight pricing, no games',
  ],
  ['🧱 You pay extra for domain and hosting', '🌐 Free Domain + Hosting'],
];

function FeaturesTable() {
  return (
    <div
      className='bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center px-4'
      style={{
        backgroundImage: 'url(./Assets/TableBG.png)',
      }}
    >
      <h1 className='text-black text-5xl font-extrabold text-center'>
        Features we offer
      </h1>

      {/* Desktop Table */}
      <div className='hidden md:block  shadow-sm max-w-5xl mx-auto my-10  rounded-3xl overflow-hidden'>
        <div className='card-body bg-base-100 p-5 md:p-10 '>
          <div className='overflow-x-hidden rounded-xl border-2  border-gray-400'>
            <table className='table w-full'>
              <thead className='bg-gray-200 text-black'>
                <tr>
                  <th>❌ Without Naviqate</th>
                  <th>✅ With Naviqate</th>
                </tr>
              </thead>
              <tbody>
                {data.map(([without, withNavi], i) => (
                  <tr key={i}>
                    <td>{without}</td>
                    <td>{withNavi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card Mode */}
      <div className='md:hidden flex flex-col gap-4 max-w-md mx-auto mt-10'>
        <div className='flex flex-col bg-[rgba(0,0,0,0.3)] text-white backdrop-blur-2xl border border-gray-400 rounded-2xl shadow p-4'>
          <h2 className='text-xl font-semibold mb-2'>❌ Without Naviqate</h2>
          {data.map(([without], i) => (
            <p
              key={i}
              className='py-1 border-b border-gray-300 last:border-none'
            >
              {without}
            </p>
          ))}
        </div>
        <div className='flex flex-col bg-[rgba(0,0,0,0.3)] text-white backdrop-blur-2xl border border-gray-400 rounded-2xl shadow p-4'>
          <h2 className=' text-xl font-semibold mb-2'>✅ With Naviqate</h2>
          {data.map(([, withNavi], i) => (
            <p
              key={i}
              className='py-1 border-b border-gray-300 last:border-none'
            >
              {withNavi}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesTable;
