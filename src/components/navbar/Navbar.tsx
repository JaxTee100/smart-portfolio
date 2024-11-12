
import Link from 'next/link'
import NavbarItems from './NavbarItems'
import MobileNavbar from './MobileNavbar'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-2 lg:px-4  bg-slate-950 border z-10'>
        <div className=''  >
          <Link href='/' className='text-white text-xl font-bold shadow-md  p-2 hover:scale-200  transition-all border-2'>Logo</Link></div>
        <div className='lg:hidden z-10'>
            <MobileNavbar />
        </div>
        <div className='hidden lg:flex'>
          <NavbarItems />
        </div>
        
    </div>
  )
}

export default Navbar