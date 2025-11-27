
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  color: string;
  imageUrl?: string;
  linkUrl?: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  linkUrl?: string; 
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarColor: string;
  imageUrl?: string;
}
