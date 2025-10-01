import { useState, useEffect } from 'react';
import { MapPin, Phone, Package, CheckCircle } from 'lucide-react';
import { supabase, FoodListing } from '../lib/supabase';

interface ShareFoodPageProps {
  onNavigate: (page: string) => void;
}

export default function ShareFoodPage({ onNavigate }: ShareFoodPageProps) {
  const [listings, setListings] = useState<FoodListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    provider_name: '',
    provider_contact: '',
    food_type: '',
    quantity: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const { data, error } = await supabase
        .from('food_listings')
        .select('*')
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setListings(data || []);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('food_listings').insert([formData]);

      if (error) throw error;

      setSuccess(true);
      setFormData({
        provider_name: '',
        provider_contact: '',
        food_type: '',
        quantity: '',
        location: '',
        description: '',
      });

      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
        fetchListings();
      }, 2000);
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('Failed to create listing. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
            Share Surplus Food
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Do you have extra food? Help reduce waste and feed those in need by
            listing your surplus food here.
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            {showForm ? 'View Listings' : 'List Your Food'}
          </button>
        </div>

        {showForm ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Create Food Listing
            </h2>

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Food listing created successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.provider_name}
                  onChange={(e) =>
                    setFormData({ ...formData, provider_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe / Doe Farm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Contact (Phone or Email)
                </label>
                <input
                  type="text"
                  required
                  value={formData.provider_contact}
                  onChange={(e) =>
                    setFormData({ ...formData, provider_contact: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+254 712 345 678 or email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Type of Food
                </label>
                <input
                  type="text"
                  required
                  value={formData.food_type}
                  onChange={(e) =>
                    setFormData({ ...formData, food_type: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Fresh vegetables, Maize, Dairy products"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Quantity Available
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 50 kg, 100 items"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="City/Town and area"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any other information about the food..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
              >
                {submitting ? 'Submitting...' : 'Submit Listing'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Available Food Listings
            </h2>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                <p className="mt-4 text-gray-600">Loading listings...</p>
              </div>
            ) : listings.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <Package size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-xl text-gray-600">No food listings yet.</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 text-green-600 font-semibold hover:text-green-700"
                >
                  Be the first to list food!
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {listing.food_type}
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Available
                      </span>
                    </div>

                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Package size={18} className="text-green-600" />
                        <span className="font-medium">Quantity:</span>
                        <span>{listing.quantity}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-green-600" />
                        <span className="font-medium">Location:</span>
                        <span>{listing.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone size={18} className="text-green-600" />
                        <span className="font-medium">Contact:</span>
                        <span className="text-sm">{listing.provider_contact}</span>
                      </div>
                    </div>

                    {listing.description && (
                      <p className="mt-4 text-gray-600 text-sm border-t pt-4">
                        {listing.description}
                      </p>
                    )}

                    <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                      Listed by: {listing.provider_name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
