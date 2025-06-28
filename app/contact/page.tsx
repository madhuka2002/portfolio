'use client'

import { Mail, Phone, MapPin, Linkedin, Github, User } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Connect Me</h2>

        <div className='bg-muted rounded-2xl shadow-lg p-6 mb-10'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full'>
              <User className='w-8 h-8 text-primary' />
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Madhuka Malshan</h3>
              <p className='text-muted-foreground text-sm'>Full Stack Developer</p>
            </div>
          </div>

          <ul className='space-y-3 text-base text-muted-foreground'>
            <li className='flex items-center gap-2'>
              <Mail className='w-5 h-5 text-primary' />
              <a href='mailto:madhukaaththanayaka@gmail.com' className='hover:underline text-foreground'>
                madhukaaththanayaka@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <Phone className='w-5 h-5 text-primary' />
              +94 758973807
            </li>
            <li className='flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-primary' />
              Malabe, Colombo, Sri Lanka
            </li>
            <li className='flex items-center gap-2'>
              <Linkedin className='w-5 h-5 text-blue-600' />
              <a
                href='https://www.linkedin.com/in/madhuka-malshan-759119301'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline text-foreground'
              >
                LinkedIn Profile
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <Github className='w-5 h-5 text-black' />
              <a
                href='https://github.com/madhuka2002'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline text-foreground'
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
{/* 
        <ContactForm /> */}
      </div>
    </section>
  )
}
