// components/skills.tsx
'use client'

import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

type Skill = {
  name: string
  icon?: ReactNode
  level?: number
}

type SkillGroupProps = {
  title: string
  skills: Skill[]
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-card/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              {skill.level && (
                <div className="mt-2 h-1.5 w-full bg-muted overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const frontendSkills = [
    // { name: 'React', level: 90 },
    { name: 'React'},
    { name: 'Next.js'},
    { name: 'TypeScript'},
    { name: 'Tailwind CSS'},
    { name: 'JavaScript'},
    { name: 'HTML/CSS'},
    { name: 'WordPress'},
    { name: 'Shard CN'},
    { name: 'Figma'}
  ]

  const backendSkills = [
    // { name: 'Node.js', level: 85 },
    { name: 'Node.js'},
    { name: 'Express'},
    { name: 'MongoDB'},
    { name: 'SQL'},
    { name: 'REST API'},
    { name: 'Maven'},
    { name: 'SpringBoot'},
    { name: 'Java'}
  ]

  const otherSkills = [
    // { name: 'Git', level: 85 },
    { name: 'Git'},
    { name: 'Figma'},
    { name: 'Agile/Scrum'},
    { name: 'Docker'},
    { name: 'Ansible'},
    { name: 'AI ML'},
    { name: 'Anaconda'}
  ]

  return (
    <div className="my-8">
      <SkillGroup title="Frontend Development" skills={frontendSkills} />
      <SkillGroup title="Backend Development" skills={backendSkills} />
      <SkillGroup title="Tools & Technologies" skills={otherSkills} />
    </div>
  )
}