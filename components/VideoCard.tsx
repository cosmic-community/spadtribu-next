import { Video } from '@/types'

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumbnail = video.metadata?.thumbnail;
  
  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(video.metadata.video_url);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.metadata.video_title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : thumbnail ? (
          <img
            src={`${thumbnail.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={video.metadata.video_title}
            className="w-full h-full object-cover"
            width="400"
            height="225"
          />
        ) : null}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {video.metadata.video_title}
          </h3>
          {video.metadata.duration && (
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
              {video.metadata.duration}
            </span>
          )}
        </div>
        
        {video.metadata.description && (
          <p className="text-gray-600 text-sm">
            {video.metadata.description}
          </p>
        )}
      </div>
    </div>
  )
}