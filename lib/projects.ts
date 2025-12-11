import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    // Try exact match first
    let filePath = path.join(rootDirectory, `${slug}.mdx`)
    
    // If file doesn't exist, try case-insensitive search
    if (!fs.existsSync(filePath)) {
      const files = fs.readdirSync(rootDirectory)
      const matchingFile = files.find(
        file => file.toLowerCase() === `${slug.toLowerCase()}.mdx`
      )
      
      if (matchingFile) {
        filePath = path.join(rootDirectory, matchingFile)
      } else {
        console.error(`Project file not found: ${slug}.mdx`)
        return null
      }
    }
    
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    
    if (!fileContent || fileContent.trim() === '') {
      console.error(`Project file is empty: ${filePath}`)
      return null
    }
    
    const { data, content } = matter(fileContent)
    
    if (!content || content.trim() === '') {
      console.warn(`Project content is empty for: ${slug}`)
    }
    
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error)
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
