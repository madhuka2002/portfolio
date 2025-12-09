import { getAboutContent } from '@/lib/about'
import Skills from '@/components/skills'
import Education from '@/components/education'

export default async function AboutPage() {
  try {
    const { content } = await getAboutContent()

    return (
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <h1 className='title mb-12 text-foreground'>About Me</h1>

          {content ? (
            <div className='prose dark:prose-invert'>{content}</div>
          ) : (
            <div className='prose dark:prose-invert'>
              <h2>About Me</h2>
              <p>Motivated Computer Science with Software Engineering undergraduate at Coventry University, with a strong
passion for Software Development, AI & ML Engineering, Data Science, and scalable technologies. I am actively
developing my skills in software engineering while exploring how intelligent systems can solve real-world
problems. I also have basic hands-on experience with Docker which helps me understand modern development
and automation workflows. Driven by curiosity and a problem-solving mindset, I aim to build efficient, scalable
solutions and continue expanding my expertise in advanced AI technologies.</p>

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
          <h1 className='title mb-12 text-foreground'>About Me</h1>
          <p>There was an error loading the content. Please try again later.</p>
        </div>
      </section>
    )
  }
}
