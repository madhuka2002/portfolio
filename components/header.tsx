// import Link from 'next/link'
// import { ThemeToggle } from './theme-toggle'

// export default function Header() {
//   return (
//     <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
//       <nav className='container flex max-w-3xl items-center justify-between'>
//         <div>
//           <Link href='/' className='font-serif text-2xl font-bold'>
//             Madhuka.
//           </Link>
//         </div>

//         <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
//           <li className='transition-colors hover:text-foreground'>
//             <Link href='/about'>About</Link>
//           </li>
//           <li className='transition-colors hover:text-foreground'>
//             <Link href='/posts'>Posts</Link>
//           </li>
//           <li className='transition-colors hover:text-foreground'>
//             <Link href='/projects'>Projects</Link>
//           </li>
//           <li className='transition-colors hover:text-foreground'>
//             <Link href='/contact'>Contact</Link>
//           </li>
//         </ul>

//         <div>
//           <ThemeToggle />
//         </div>
//       </nav>
//     </header>
//   )
// }


'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href='/' className='font-serif text-xl font-bold'>
            Madhuka.
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground sm:flex'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/about'>About</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='sm:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Theme Toggle (Always Visible) */}
        <div className='hidden sm:block'>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden absolute inset-x-0 top-full bg-background shadow-md'>
          <ul className='flex flex-col ml-3 items-start gap-4 p-4 text-sm font-light text-muted-foreground'>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link href='/about' onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link href='/posts' onClick={() => setIsOpen(false)}>Posts</Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link href='/projects' onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link href='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li className='w-full'>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
