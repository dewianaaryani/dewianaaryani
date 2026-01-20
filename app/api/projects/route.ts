// app/api/projects/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getImageUrl, getProjectImageUrl } from '@/utils/supabaseImage'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: {
        selected: true, // Only show selected projects
      },
      include: {
        testimonials: {
          where: {
            approved: true, // Only show approved testimonials
          },
          include: {
            user: {
              select: {
                name: true,
                company: true,
                jobTitle: true,
                image: true,
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 6, // Limit to 6 projects
    })

    // Transform projects with image URLs
  const transformedProjects = projects.map(project => ({
      id: project.id,
      title: project.name,
      des: project.description,
      img: getProjectImageUrl(project.thumbnail),
      iconLists: project.iconLists.map(icon => getImageUrl('icons', icon)),
      githubRepoLink: project.githubRepoLink,
      liveDemoLink: project.liveDemoLink,
      selected: project.selected,
      testimonialCount: project.testimonials.length,
    }))

    return NextResponse.json(transformedProjects)
    
  } catch (error) {
    console.error('Error fetching projects:', error)
    
    // Return fallback data if database fails
    const fallbackProjects = [
      {
        id: '1',
        title: "KALCER — AI Time Management App",
        des: "Kalana is a smart time-management web app that uses AI...",
        img: "/placeholder-project.png",
        iconLists: ["nextjs", "tailwindcss", "figma"],
        liveDemoLink: "#",
      },
      // Add more fallbacks if needed
    ]
    
    return NextResponse.json(fallbackProjects)
  }
}