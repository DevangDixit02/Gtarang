# Gtarang Energy Solutions

A modern Next.js website for a tech consulting company specializing in energy solutions.

## Features

- Responsive design using TailwindCSS
- Multiple page layout with clean UI
- Consulting services showcase
- Pricing plans comparison
- AI solutions page with "Coming Soon" indicator
- Contact form with validation
- Modern animations and transitions

## Technologies Used

- Next.js 14
- TypeScript
- TailwindCSS
- React Hooks
- CSS Animations

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/gtarang.git
cd gtarang
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Main application code
  - `/components` - Reusable UI components
  - `/contact` - Contact page
  - `/pricing` - Pricing plans page
  - `/services` - Services showcase page
  - `/ai-solutions` - AI Solutions page with coming soon tag
  - `page.tsx` - Home page
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles

## Deployment

The website can be easily deployed on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or BitBucket).
2. Import the project to Vercel.
3. Vercel will detect Next.js and set up the build configuration automatically.
4. Deploy!

## Customization

- Update colors in the `tailwind.config.js` file
- Modify content in the respective page files
- Add or remove components as needed
- Update pricing information in the pricing page

## Email Configuration

The website includes a contact form that sends confirmation emails using SendGrid. To set up the email functionality:

1. Create a free SendGrid account at https://signup.sendgrid.com/
2. Create an API key in your SendGrid dashboard
3. Verify your sender identity (the email address you'll send from)
4. Create a `.env.local` file in the root directory with the following:

```bash
# SendGrid Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
EMAIL_FROM=your_verified_sender_email@domain.com

# Contact email for incoming forms
CONTACT_EMAIL=where_to_receive_messages@yourdomain.com
```

5. Replace the placeholder values with your actual SendGrid API key and verified sender email

### Why SendGrid Instead of Gmail?

SendGrid offers several advantages for sending emails from web applications:

- No need for App Passwords or special authentication
- Higher deliverability rates
- Free tier includes 100 emails per day
- Simple API integration
- Better tracking and analytics

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern tech consulting websites
- Icons and graphics from various open-source libraries 