import { Service } from '@/types'

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const featuredImage = service.metadata?.featured_image;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            className="w-full h-full object-cover"
            width="400"
            height="200"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.metadata.service_name}
        </h3>
        
        <div 
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: service.metadata.description }}
        />
        
        {service.metadata.pricing && (
          <p className="text-blue-600 font-semibold mb-4">
            {service.metadata.pricing}
          </p>
        )}
        
        {service.metadata.learn_more_link && (
          <a
            href={service.metadata.learn_more_link}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  )
}