import { supabase } from "@/lib/supabase"

export function getProjectImageUrl(filename: string): string {
  if (!filename) return '/projects/placeholder.svg'
  
  const { data } = supabase.storage
    .from('projects')  // Your bucket name
    .getPublicUrl(filename)
  
  return data.publicUrl
}

// Optional: If you want to handle different buckets
export function getImageUrl(bucket: string, filename: string): string {
  if (!filename) return '/projects/placeholder.svg'
  
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filename)
  
  return data.publicUrl
}