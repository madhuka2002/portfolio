import { getAboutContent } from '@/lib/about'
import Skills from '@/components/skills'
import Education from '@/components/education'

export default async function AboutPage() {
  try {
    const { content } = await getAboutContent()

    return (
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <h1 className='title mb-12'>About Me</h1>

          {content ? (
            <div className='prose dark:prose-invert'>{content}</div>
          ) : (
            <div className='prose dark:prose-invert'>
              <h2>About Me</h2>
              <p>I&apos;m a software engineer based in Colombo, Sri Lanka with a passion for creating clean, efficient, and user-friendly web applications.</p>

              <h2>My Skills</h2>
              <Skills />

              <h2>Education & Certificates</h2>
              <Education />
            </div>
          )}
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error in AboutPage:', error)
    return (
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <h1 className='title mb-12'>About Me</h1>
          <p>There was an error loading the content. Please try again later.</p>
        </div>
      </section>
    )
  }
}
