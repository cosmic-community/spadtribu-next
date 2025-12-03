import { Event } from '@/types'

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const eventImage = event.metadata?.event_image;
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {eventImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${eventImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={event.metadata.event_name}
            className="w-full h-full object-cover"
            width="400"
            height="200"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {event.metadata.event_name}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <p className="flex items-center">
            <span className="font-semibold mr-2">📅</span>
            {formatDate(event.metadata.event_date)}
          </p>
          
          {(event.metadata.start_time || event.metadata.end_time) && (
            <p className="flex items-center">
              <span className="font-semibold mr-2">🕐</span>
              {event.metadata.start_time}
              {event.metadata.end_time && ` - ${event.metadata.end_time}`}
            </p>
          )}
          
          {event.metadata.location && (
            <p className="flex items-center">
              <span className="font-semibold mr-2">📍</span>
              {event.metadata.location}
            </p>
          )}
        </div>
        
        <div 
          className="text-gray-700 text-sm mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: event.metadata.description }}
        />
        
        {event.metadata.registration_link && (
          <a
            href={event.metadata.registration_link}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  )
}