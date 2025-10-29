const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-lg p-4 min-w-[160px]'>
        <p className='text-slate-600 font-semibold text-sm mb-2'>{label}</p>
        <div className='space-y-1'>
          {payload.map((entry, index) => (
            <div
              key={index}
              className='flex items-center justify-between gap-4'
            >
              <div className='flex items-center gap-2'>
                <div
                  className='w-3 h-3 rounded-full'
                  style={{
                    backgroundColor: entry.color || '#06b6d4',
                  }}
                />
                <span className='text-slate-500 text-sm'>Visits:</span>
              </div>
              <span className='text-slate-800 font-bold text-sm'>
                {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
