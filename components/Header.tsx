export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Professional Association
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">
              Events
            </a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#videos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Videos
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}