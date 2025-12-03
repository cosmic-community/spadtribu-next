import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const photo = member.metadata?.photo;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {photo && (
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-full h-full object-cover"
            width="300"
            height="300"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.metadata.full_name}
        </h3>
        
        <p className="text-blue-600 font-medium mb-3">
          {member.metadata.title}
        </p>
        
        {member.metadata.bio && (
          <p className="text-gray-600 mb-4 text-sm">
            {member.metadata.bio}
          </p>
        )}
        
        <div className="space-y-1 text-sm">
          {member.metadata.email && (
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${member.metadata.email}`} className="text-blue-600 hover:underline">
                {member.metadata.email}
              </a>
            </p>
          )}
          
          {member.metadata.phone && (
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span>{' '}
              <a href={`tel:${member.metadata.phone}`} className="text-blue-600 hover:underline">
                {member.metadata.phone}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}