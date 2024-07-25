import Image from 'next/image'
import Link from 'next/link'

export default function LogoDashboard() {
  return (
    <Link 
      href="/"
      className='flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6'
      >
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <h1 className='text-lg font-bold'>
          Adgear Cars
        </h1>
    </Link>
  )
}
