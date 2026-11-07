import Image from 'next/image'
import { ArrowUpRight, ChevronDown, ExternalLink, GitBranch, Globe, Mail, MapPin, Package } from 'lucide-react'

import authorImage from '@/public/images/authors/madhuka.jpg'
import MDXContent from '@/components/mdx-content'
import { getAllProjects } from '@/lib/projects'
import { getAllPosts } from '@/lib/posts'
import { certifications, education, experience, skillGroups } from '@/lib/profile'
import { formatDate } from '@/lib/utils'

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className='mb-10 max-w-2xl'>
      <p className='section-eyebrow'>{eyebrow}</p>
      <h2 className='section-title'>{title}</h2>
      {intro && <p className='mt-4 leading-7 text-muted-foreground'>{intro}</p>}
    </header>
  )
}

export default async function Home() {
  const [projects, posts] = await Promise.all([getAllProjects(), getAllPosts()])

  return (
    <div className='overflow-hidden'>
      <section id='home' className='hero-section scroll-mt-20'>
        <div className='mx-auto grid min-h-[760px] max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_360px] lg:pt-24'>
          <div className='max-w-3xl'>
            <p className='mb-5 flex items-center gap-3 text-sm font-medium text-muted-foreground'><span className='h-px w-10 bg-[hsl(var(--brand))]' />Software Engineer · AI integration</p>
            <h1 className='font-serif text-5xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-7xl'>Hi, I&apos;m Madhuka Malshan.</h1>
            <p className='mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl'>Computer Science student pursuing a BSc (Hons) in Computer Science with Software Engineering at Coventry University. I enjoy turning ideas into useful, reliable software and exploring how AI and automation can improve everyday applications.</p>
            <div className='mt-9 flex flex-wrap gap-3'>
              <a href='#projects' className='primary-link'>Explore my work <ArrowUpRight size={17} /></a>
              <a href='mailto:madhukaaththanayaka@gmail.com' className='secondary-link'>Let&apos;s connect</a>
            </div>
            <div className='mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground'>
              <span><strong className='text-foreground'>{projects.length}</strong> projects</span>
              <span><strong className='text-foreground'>{posts.length}</strong> articles</span>
              <span className='flex items-center gap-2'><MapPin size={15} /> Colombo, Sri Lanka</span>
            </div>
          </div>
          <div className='relative mx-auto w-full max-w-[340px] lg:mx-0'>
            <div className='absolute -inset-4 translate-x-4 translate-y-4 rounded-[2rem] border border-[hsl(var(--brand)/0.45)]' />
            <div className='relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted'>
              <Image src={authorImage} alt='Portrait of Madhuka Malshan' fill priority sizes='(max-width: 1024px) 340px, 360px' className='object-cover object-center grayscale-[15%]' />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-24 text-white'><p className='font-medium'>Available for thoughtful collaborations</p><p className='mt-1 text-sm text-white/70'>Software · AI · Product engineering</p></div>
            </div>
          </div>
        </div>
      </section>

      <main className='mx-auto max-w-6xl px-5 sm:px-8'>
        <section id='experience' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='01 · Experience' title='Building useful things, end to end.' />
          <div className='timeline'>{experience.map(item => <article key={item.role} className='timeline-item'><div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'><div><h3 className='text-xl font-semibold'>{item.role}</h3><p className='mt-1 text-[hsl(var(--brand))]'>{item.company}</p></div><p className='text-sm text-muted-foreground sm:text-right'>{item.period}<br />{item.location}</p></div><p className='mt-5 max-w-3xl leading-7 text-muted-foreground'>{item.description}</p><ul className='mt-5 max-w-3xl space-y-2 text-sm leading-6 text-muted-foreground'>{item.highlights.map(highlight => <li key={highlight} className='flex gap-3'><span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand))]' />{highlight}</li>)}</ul></article>)}</div>
        </section>

        <section id='education' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='02 · Education' title='A foundation in software engineering.' />
          <div className='grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3'>{education.map(item => <article key={item.degree} className='bg-background p-7 sm:p-9'><p className='text-sm text-[hsl(var(--brand))]'>{item.period}</p><h3 className='mt-4 font-serif text-2xl font-semibold'>{item.degree}</h3><p className='mt-3 leading-6 text-muted-foreground'>{item.institution}</p><p className='mt-6 text-sm font-medium'>{item.description}</p>{'modules' in item && item.modules && <p className='mt-4 text-sm leading-6 text-muted-foreground'><span className='font-medium text-foreground'>Key modules:</span> {item.modules}</p>}</article>)}</div>
        </section>

        <section id='skills' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='03 · Skills' title='Tools I use to ship.' intro='A practical toolkit spanning interface design, backend systems, intelligent applications, data, and delivery.' />
          <div className='grid gap-10 md:grid-cols-3'>{skillGroups.map(group => <div key={group.title}><h3 className='mb-4 font-medium'>{group.title}</h3><ul className='flex flex-wrap gap-2'>{group.skills.map(skill => <li key={skill} className='skill-pill'>{skill}</li>)}</ul></div>)}</div>
        </section>

        <section id='projects' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='04 · Projects' title='Selected work—and everything else.' intro={`${projects.length} projects, including every original portfolio entry. Open any card to read the complete MDX case study without leaving this page.`} />
          <div className='space-y-4'>{projects.map((project, index) => (
            <details key={project.metadata.slug} className='content-card group'>
              <summary className='content-summary'>
                <span className='project-index'>{String(index + 1).padStart(2, '0')}</span>
                {project.metadata.image && <span className='relative hidden h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-muted sm:block'><Image src={project.metadata.image} alt='' fill sizes='128px' className='object-cover transition duration-500 group-hover:scale-105' /></span>}
                <span className='min-w-0 flex-1'><span className='block font-serif text-xl font-semibold sm:text-2xl'>{project.metadata.title}</span><span className='mt-2 block max-w-3xl text-sm leading-6 text-muted-foreground'>{project.metadata.summary}</span><span className='mt-3 block text-xs uppercase tracking-[0.16em] text-muted-foreground'>{formatDate(project.metadata.publishedAt ?? '')}</span></span>
                <span className='detail-control'><span className='closed-label'>View details</span><span className='open-label'>Close</span><ChevronDown size={17} className='chevron' /></span>
              </summary>
              <div className='border-t border-border px-5 py-8 sm:px-10 sm:py-10'>
                <div className='mb-7 flex flex-wrap gap-3'>{project.metadata.repository && <a className='inline-link' href={project.metadata.repository} target='_blank' rel='noreferrer'><GitBranch size={15} /> Source code</a>}{project.metadata.liveUrl && <a className='inline-link' href={project.metadata.liveUrl} target='_blank' rel='noreferrer'><ExternalLink size={15} /> Live project</a>}</div>
                <div className='prose max-w-none dark:prose-invert'><MDXContent source={project.content} /></div>
              </div>
            </details>
          ))}</div>
        </section>

        <section id='blog' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='05 · Blog' title='Notes from the work.' intro='Every original article is here in full. Expand an entry to read it on this page.' />
          <div className='divide-y divide-border border-y border-border'>{posts.map(post => (
            <details key={post.metadata.slug} className='article-row group'>
              <summary className='flex cursor-pointer list-none items-start gap-5 py-7 [&::-webkit-details-marker]:hidden'><time className='hidden w-28 shrink-0 pt-1 text-sm text-muted-foreground sm:block'>{formatDate(post.metadata.publishedAt ?? '')}</time><span className='min-w-0 flex-1'><span className='block font-serif text-xl font-semibold sm:text-2xl'>{post.metadata.title}</span><span className='mt-2 block text-sm leading-6 text-muted-foreground'>{post.metadata.summary}</span><span className='mt-3 block text-xs text-muted-foreground sm:hidden'>{formatDate(post.metadata.publishedAt ?? '')}</span></span><span className='mt-1 rounded-full border border-border p-2 text-muted-foreground transition group-hover:border-foreground/30 group-hover:text-foreground'><ChevronDown size={17} className='chevron' /></span></summary>
              <article className='pb-12 sm:pl-[132px]'>{post.metadata.image && <div className='relative mb-8 aspect-[16/8] overflow-hidden rounded-2xl bg-muted'><Image src={post.metadata.image} alt='' fill sizes='(max-width: 768px) 100vw, 800px' className='object-cover' /></div>}<div className='prose max-w-none dark:prose-invert'><MDXContent source={post.content} /></div></article>
            </details>
          ))}</div>
        </section>

        <section id='certifications' className='portfolio-section scroll-mt-20'>
          <SectionHeading eyebrow='06 · Certifications' title='Continuous learning, documented.' />
          <div className='grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3'>{certifications.map(([name, issuer, date, href]) => <a key={name} href={href} target='_blank' rel='noreferrer' className='group bg-background p-6 transition hover:bg-accent/55'><span className='flex items-start justify-between gap-5'><Package size={19} className='mt-1 shrink-0 text-[hsl(var(--brand))]' /><ArrowUpRight size={17} className='text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground' /></span><h3 className='mt-6 font-medium leading-6'>{name}</h3><p className='mt-3 text-sm text-muted-foreground'>{issuer} · {date}</p></a>)}</div>
        </section>

        <section id='contact' className='portfolio-section scroll-mt-20'>
          <div className='contact-panel'><p className='section-eyebrow text-white/60'>07 · Contact</p><div className='mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end'><div><h2 className='max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl'>Have an idea worth building?</h2><p className='mt-5 max-w-2xl text-lg leading-8 text-white/65'>I&apos;m open to software engineering opportunities, collaborations, and conversations about useful technology.</p></div><a href='mailto:madhukaaththanayaka@gmail.com' className='contact-button'><Mail size={18} /> Email me</a></div><div className='mt-14 flex flex-wrap gap-5 border-t border-white/15 pt-7 text-sm text-white/60'><a href='https://www.linkedin.com/in/madhuka-malshan/' target='_blank' rel='noreferrer' className='social-link'><Globe size={17} /> LinkedIn</a><a href='https://github.com/madhuka2002' target='_blank' rel='noreferrer' className='social-link'><GitBranch size={17} /> GitHub</a><a href='https://www.npmjs.com/package/@quantheonix/chatbot' target='_blank' rel='noreferrer' className='social-link'><Package size={17} /> npm</a></div></div>
        </section>
      </main>
      <footer className='border-t border-border py-8 text-center text-sm text-muted-foreground'>© {new Date().getFullYear()} Madhuka Malshan. Built with Next.js and MDX.</footer>
    </div>
  )
}
