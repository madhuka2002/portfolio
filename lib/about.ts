import fs from 'fs/promises'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import Skills from '@/components/skills'
import Education from '@/components/education'


export async function getAboutContent() {
  const filePath = path.join(process.cwd(), 'content', 'about.mdx')
  const source = await fs.readFile(filePath, 'utf8')

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
    components: { Skills, Education} // Pass components explicitly
  })

  return { content }
}
