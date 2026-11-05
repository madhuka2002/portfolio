'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems } from '@/lib/profile'
import { ThemeToggle } from '@/components/theme-toggle'

export default function SinglePageHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl'>
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
        <a href='#home' className='font-serif text-xl font-bold tracking-tight' onClick={() => setIsOpen(false)}>
          Madhuka<span className='text-[hsl(var(--brand))]'>.</span>
        </a>

        <div className='hidden items-center gap-1 lg:flex'>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className='nav-link'>
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className='flex items-center gap-1 lg:hidden'>
          <ThemeToggle />
          <button
            type='button'
            className='rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground'
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsOpen(open => !open)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id='mobile-navigation' className='border-t border-border/60 bg-background px-5 py-4 lg:hidden'>
          <div className='mx-auto grid max-w-6xl grid-cols-2 gap-1'>
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className='rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground'
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
