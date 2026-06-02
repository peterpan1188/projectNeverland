export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  metrics?: string;
  consultationFocus?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  features: string[];
  tools: string[];
  useCase: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceTitle: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientCompany: string;
  businessStage: 'startup' | 'enterprise' | 'growth' | 'idea';
  struggleNotes: string;
  estimatedQuote: number;
  status: 'confirmed' | 'pending' | 'completed';
  meetingLink: string;
  createdAt: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
