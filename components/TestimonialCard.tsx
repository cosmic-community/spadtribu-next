import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata?.photo;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.member_name}
            className="w-16 h-16 rounded-full object-cover mr-4"
            width="64"
            height="64"
          />
        )}
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {testimonial.metadata.member_name}
          </h3>
          {testimonial.metadata.company && (
            <p className="text-sm text-gray-600">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic">
        "{testimonial.metadata.quote}"
      </blockquote>
    </div>
  )
}