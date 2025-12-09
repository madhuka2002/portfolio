import Image from 'next/image'
import authorImage from '@/public/images/authors/madhuka.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello, I&#39;m Madhuka Malshan.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Motivated Computer Science with Software Engineering undergraduate at Coventry University, with a strong
passion for Software Development, AI & ML Engineering, Data Science, and scalable technologies...
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
