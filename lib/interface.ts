// WorkExperienceDTO.ts
export interface WorkExperience {
  id: string;
  role: string;
  company?: string | null;
  startDate: string; // ISO string
  endDate?: string | null;
  description?: string | null;
  pin: string[];
  location?: string | null;
  skills: string[];
}

export interface OrganizationExperience {
  id: string;
  role: string;
  organization: string;
  startDate: string; // ISO string
  endDate?: string | null;
  description?: string | null;
  pin: string[];
  location?: string | null;
}