function DisplayCard({
  className = '',
  resetClass = false,
  children = (
    <>
      <div className=''>
        <h3 className='font-bold mb-2 ubuntu-font text-2xl'>
          Something Coming Soon
        </h3>
        <p className='text-gray-600'>
          This section is under development. Please check back later for
          updates.
        </p>
      </div>
    </>
  ),
}: {
  className: String;
  resetClass?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`${className} p-5 min-h-[250px] rounded-2xl ${
        !resetClass && 'border-cyan-200 border bg-cyan-50'
      }`}
    >
      {children}
    </div>
  );
}

export default DisplayCard;
