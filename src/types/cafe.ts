export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'mocktails' | 'small-plates' | 'handhelds' | 'pastas-pizzas' | 'desserts';
  price: number;
  description: string;
  tags?: ('signature' | 'chef-special' | 'jain-friendly' | 'vegan-friendly')[];
  pairingNote?: string;
  badge?: string;
}

export interface ArchitecturalSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  capacity: string;
  vibe: string;
  timeOfDay: string;
}

export interface ReservationData {
  guestName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'courtyard' | 'veranda' | 'lounge' | 'any';
  specialRequests?: string;
  occasion?: string;
}

export interface VerifiedReview {
  id: string;
  author: string;
  context: string;
  text: string;
  highlight: string;
  rating: number;
  date: string;
}
