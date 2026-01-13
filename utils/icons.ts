

export function getIconUrl(iconName: string): string {
  // Map icon names to actual SVG paths
  const iconMap: Record<string, string> = {
    'nextjs': '/icons/nextjs.svg',
    'tailwindcss': '/icons/tailwind.svg',
    'figma': '/icons/figma.svg',
    'prisma': '/icons/prisma.svg',
    'supabase': '/icons/supabase.svg',
    'stream': '/icons/stream.svg',
    'nextauth': '/icons/nextauth.svg',
    'laravel': '/icons/laravel.svg',
    'xampp': '/icons/xampp.svg',
    'bootstrap': '/icons/bootstrap.svg',
  };
  
  return iconMap[iconName.toLowerCase()] || `/icons/${iconName.toLowerCase()}.svg`;
}
