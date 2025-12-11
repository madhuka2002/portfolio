import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  if (!date || date.trim() === '') return ''
  
  // Handle YYYY-MM-DD format explicitly to avoid timezone issues
  let dateObj: Date
  if (/^\d{4}-\d{2}-\d{2}$/.test(date.trim())) {
    // Parse YYYY-MM-DD format explicitly
    const [year, month, day] = date.trim().split('-').map(Number)
    dateObj = new Date(year, month - 1, day) // month is 0-indexed
  } else {
    // Try parsing other date formats
    dateObj = new Date(date)
  }
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.warn(`Invalid date format: ${date}`)
    return date // Return original string if invalid
  }
  
  return dateObj.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
