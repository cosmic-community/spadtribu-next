# Professional Association Hub

![App Preview](https://imgix.cosmicjs.com/0bd6d0f0-d03f-11f0-9f4a-931d397d1861-photo-1552664730-d307ca884978-1764762962506.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, comprehensive professional association website built with Next.js 16 that showcases your organization's services, team, testimonials, videos, and events. This platform serves as the central hub for member engagement and professional development.

## ✨ Features

- **Dynamic Service Showcase**: Display professional development workshops, certification programs, and networking events
- **Team Directory**: Showcase your leadership team with professional bios and contact information
- **Member Testimonials**: Build trust with authentic member success stories
- **Video Library**: Share educational content and promotional videos
- **Event Calendar**: Promote upcoming events with full details and registration links
- **Responsive Design**: Beautiful experience across all devices
- **SEO Optimized**: Built-in metadata and semantic HTML for better search visibility
- **Fast Performance**: Optimized images with imgix and Next.js 16 App Router
- **Type-Safe Development**: Full TypeScript implementation with strict typing

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69302456d5a5a92b05b828ad&clone_repository=6930282cd5a5a92b05b82901)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for an association website with services, team members, testimonials, videos, and calendar with events"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with your bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Events

```typescript
const { objects: events } = await cosmic.objects
  .find({ type: 'events' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses your existing Cosmic content model with five content types:

1. **Services** - Professional development offerings
2. **Team Members** - Leadership and staff profiles
3. **Testimonials** - Member success stories
4. **Videos** - Educational and promotional content
5. **Events** - Upcoming events and workshops

All content is fetched server-side for optimal performance and SEO. Updates made in your Cosmic dashboard are reflected immediately on your website.

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy!

## 📝 License

MIT License - feel free to use this project for your association or organization.

<!-- README_END -->