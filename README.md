# Umoja Hub

A mobile-friendly web platform addressing SDG Goal 2 (Zero Hunger) in Kenya. Umoja Hub connects farmers, donors, and communities to fight hunger through food sharing, donations, and education.

## Features

### Homepage
- Clear introduction to the mission of ending hunger
- Quick access to all main features
- SDG Goal 2 statistics and impact metrics

### Share Food Page
- Farmers, shops, and individuals can list surplus food
- Simple form to post available food items with quantity and location
- Browse all available food listings in the community
- Direct contact information for food providers

### Donate Page
- Support with financial contributions via M-Pesa, Airtel Money, PayPal, or bank transfer
- Donate food items with convenient drop-off locations
- Real-time impact metrics showing what donations can achieve
- Multiple food collection centers across Kenya (Nairobi, Mombasa, Kisumu, Nakuru)

### Tips & Education Page
- Affordable healthy eating tips and strategies
- Food waste reduction techniques
- Guidance on supporting local farmers
- Community resources and agricultural extension contacts
- Quick reference tips for daily nutrition

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx       # Main navigation component
├── pages/
│   ├── HomePage.tsx         # Landing page
│   ├── ShareFoodPage.tsx    # Food sharing platform
│   ├── DonatePage.tsx       # Donation center
│   └── TipsPage.tsx         # Tips and education
├── lib/
│   └── supabase.ts          # Supabase client and types
├── App.tsx                  # Main app component
└── index.css                # Global styles
```

## Database Schema

### food_listings
- `id`: UUID primary key
- `provider_name`: Name of food provider
- `provider_contact`: Phone or email
- `food_type`: Type of food available
- `quantity`: Amount available
- `location`: Collection location
- `description`: Additional details
- `is_available`: Active status
- `created_at`: Timestamp

### donations
- `id`: UUID primary key
- `donor_name`: Donor name
- `donor_email`: Donor email
- `donation_type`: 'food' or 'money'
- `amount`: Donation amount or food description
- `payment_method`: Payment method or drop-off location
- `message`: Optional donor message
- `created_at`: Timestamp

## Security

- Row Level Security (RLS) enabled on all tables
- Public read access for food listings
- Public insert access for listings and donations
- No updates or deletes to maintain data integrity

## Drop-off Locations

- **Nairobi**: Uhuru Highway, Nairobi CBD (Mon-Fri: 8AM-6PM, Sat: 9AM-2PM)
- **Mombasa**: Nyerere Avenue, Mombasa (Mon-Sat: 8AM-5PM)
- **Kisumu**: Oginga Odinga Street, Kisumu (Mon-Fri: 9AM-5PM)
- **Nakuru**: Kenyatta Avenue, Nakuru (Mon-Sat: 8AM-6PM)

## Design Features

- Fully responsive mobile-first design
- Accessible color scheme with high contrast ratios
- Clear navigation and intuitive user interface
- Large, touch-friendly buttons
- Bright, welcoming color palette
- Smooth transitions and hover states

## Contributing

This project is open to contributions. Feel free to submit pull requests or report issues.

## License

MIT License - feel free to use this for your community initiatives.

## Support SDG Goal 2

Together, we can end hunger, achieve food security, improve nutrition, and promote sustainable agriculture. By 2030, let's create a food-secure Kenya where no one goes hungry.

**Umoja Hub** - *Unity for Zero Hunger*
