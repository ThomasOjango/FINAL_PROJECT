/*
  # Zero Hunger Kenya - Database Schema

  ## Overview
  Creates tables for managing food sharing listings and donation tracking for the Zero Hunger initiative in Kenya.

  ## New Tables
  
  ### `food_listings`
  - `id` (uuid, primary key) - Unique identifier for each food listing
  - `provider_name` (text) - Name of the person/organization offering food
  - `provider_contact` (text) - Phone number or email for contact
  - `food_type` (text) - Type of food being offered (e.g., vegetables, grains, dairy)
  - `quantity` (text) - Amount of food available
  - `location` (text) - Where the food can be collected
  - `description` (text) - Additional details about the food
  - `is_available` (boolean) - Whether the listing is still active
  - `created_at` (timestamptz) - When the listing was created
  
  ### `donations`
  - `id` (uuid, primary key) - Unique identifier for each donation
  - `donor_name` (text) - Name of the donor
  - `donor_email` (text) - Email address of the donor
  - `donation_type` (text) - Either 'food' or 'money'
  - `amount` (text) - For money donations, the amount; for food, the description
  - `payment_method` (text) - Mobile money, PayPal, or drop-off location
  - `message` (text) - Optional message from the donor
  - `created_at` (timestamptz) - When the donation was made

  ## Security
  - Enable RLS on both tables
  - Allow public read access to food listings (so people can see available food)
  - Allow public insert for both tables (so anyone can post listings or donate)
  - No update/delete policies (to maintain integrity and prevent abuse)
*/

-- Create food_listings table
CREATE TABLE IF NOT EXISTS food_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_name text NOT NULL,
  provider_contact text NOT NULL,
  food_type text NOT NULL,
  quantity text NOT NULL,
  location text NOT NULL,
  description text DEFAULT '',
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  donor_email text NOT NULL,
  donation_type text NOT NULL,
  amount text NOT NULL,
  payment_method text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE food_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for food_listings
CREATE POLICY "Anyone can view available food listings"
  ON food_listings FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create food listings"
  ON food_listings FOR INSERT
  WITH CHECK (true);

-- RLS Policies for donations
CREATE POLICY "Anyone can create donations"
  ON donations FOR INSERT
  WITH CHECK (true);