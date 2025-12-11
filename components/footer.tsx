import { JSX, SVGProps } from 'react'

const navigation = [

  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/madhuka-malshan-759119301/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/madhuka2002',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/madhukaaththana1',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 32 32' {...props}>
        <path
          fillRule='evenodd'
          d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234"
        />
      </svg>
    )
  },
  {
    name: 'AWSEducate',
    href: 'https://www.credly.com/users/madhuka-malshan',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 512 512' {...props}>
        <path
          fillRule='evenodd'
          d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm115.9 352.6c-9.6 0-17.5-2.1-23.6-6.4-6.1-4.2-9.1-9.6-9.1-16.1 0-5.3 1.7-9.8 5-13.4 3.4-3.7 8-6.5 14-8.6 6-2 13.3-3.1 22-3.1 8.9 0 16.5 1 22.8 3 6.3 2 11.2 4.7 14.6 8.2 3.4 3.5 5.1 7.5 5.1 12.2 0 9.5-5.5 17-16.5 22.4-11 5.4-25.6 8.1-43.7 8.1zm-77.4-129.2h24.7l-69.4 149.5h-24.5zm-158 67.3c0 10.8 3.2 19.2 9.8 25.2 6.5 6 15.5 9 26.8 9 5.2 0 10-.5 14.4-1.6 4.4-1.1 8.6-2.7 12.4-4.8v-17.9h-21.1v-18.2h44.7v54c-4.6 3.3-11.3 6.3-20.2 8.9-8.9 2.6-17.7 3.9-26.4 3.9-17.5 0-31.8-5.1-42.9-15.2-11.1-10.1-16.7-23.4-16.7-39.9 0-16.8 5.7-30.2 17.2-40.1 11.4-10 26.7-15 45.9-15 7.7 0 15.1.7 22.2 2.3 7.1 1.5 13.1 3.6 17.9 6.1l-6.6 19.3c-9.5-5.4-20.1-8.1-31.8-8.1-10.4 0-18.8 3-25.1 9-6.3 6.1-9.5 14.5-9.5 25.4z"
        />
      </svg>
    )
  }
  
  
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Madhuka Malshan. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
