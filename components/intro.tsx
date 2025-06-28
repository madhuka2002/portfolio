import Image from 'next/image'
import authorImage from '@/public/images/authors/madhuka.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello, I&#39;m Madhuka Malshan.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Colombo, Sri Lanka.
          I deep interest in learning and researching emerging technologies, with passion for 
          invention and continuous improvement..
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Madhuka Malshan'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
