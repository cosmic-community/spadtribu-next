// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    pricing?: string;
    learn_more_link?: string;
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    title: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    phone?: string;
  };
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    member_name: string;
    quote: string;
    company?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Video type
export interface Video extends CosmicObject {
  type: 'videos';
  metadata: {
    video_title: string;
    description?: string;
    video_url: string;
    thumbnail?: {
      url: string;
      imgix_url: string;
    };
    duration?: string;
  };
}

// Event type
export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    event_name: string;
    description: string;
    event_date: string;
    start_time?: string;
    end_time?: string;
    location?: string;
    event_image?: {
      url: string;
      imgix_url: string;
    };
    registration_link?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}