// components/education.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type EducationItem = {
  degree: string
  institution: string
  location: string
  period: string
  description?: string
}

type CertificateItem = {
  name: string
  issuer: string
  date: string
  link?: string
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'National Institute of Business Management',
      location: 'Colombo, Sri Lanka',
      period: '2024 - 2027',
      description: ''
    },
    {
      degree: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management',
      location: 'Colombo, Sri Lanka',
      period: '2024 - 2025',
      description: 'Completed with distinction.(GPA: 3.87)'
    }
  ]

  const certificates: CertificateItem[] = [
    {
      name: 'AI/ML Engineer - Stage 1',
      issuer: 'SLIIT Faculty of Computing',
      date: 'Octomber 2023',
      link: 'https://code.sliit.org/certificates/qix0xmtlsk'
    },
    {
      name: 'SQL (Intermediate) Certificate',
      issuer: 'HackerRank',
      date: 'February 2025',
      link: 'https://www.hackerrank.com/certificates/74819d865fb5'
    },
    {
      name: 'Introduction to Career Skills in Software Development',
      issuer: 'LinkedIn',
      date: 'September 2024',
      link: 'https://www.linkedin.com/learning/certificates/6096e81e34e77280af03fb69014725403396869a4ddd03393e0c70725e3b6bec'
    },
    {
      name: 'Java (Basic) Skills Certification',
      issuer: 'HackerRank',
      date: 'January 2025',
      link: 'https://www.hackerrank.com/certificates/6d34c82a93b0'
    }
  ]

  return (
    <div className="my-8 space-y-8">
      <div>
        <h3 className="font-bold text-xl mb-4">Education</h3>
        <div className="space-y-4">
          {education.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">{item.degree}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.institution} • {item.location}
                </p>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                {item.description && (
                  <p className="mt-2 text-sm">{item.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-4">Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}