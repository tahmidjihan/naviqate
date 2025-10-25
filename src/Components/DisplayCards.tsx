function DisplayCard({ className = '' }: { className: String }) {
  return (
    <div
      className={`${className} p-5 border min-h-[250px] border-cyan-200 rounded-2xl bg-cyan-50`}
    >
      <div className=''>
        <h3 className='font-bold mb-2 ubuntu-font text-2xl'>Project Title</h3>
        <p className='text-gray-600'>
          This is a brief description of the project. It gives an overview of
          what the project is about.
        </p>
      </div>
    </div>
  );
}

export default DisplayCard;
