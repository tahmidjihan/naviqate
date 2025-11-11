import iconBeside from '@/assets/Teacupnet-icon-beside.png';
function Logo({ className }: { className?: string }) {
  return (
    <img src={iconBeside} alt='Naviqate' className={`${className} bg-white`} />
  );
}

export default Logo;
