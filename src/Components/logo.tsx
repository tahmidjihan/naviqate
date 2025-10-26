import iconBeside from '@/assets/naviqate-icon-beside.png';
function Logo({ className }: { className?: string }) {
  return (
    <img
      src={iconBeside}
      alt='Naviqate'
      className={`rounded-3xl ${className} bg-white`}
    />
  );
}

export default Logo;
