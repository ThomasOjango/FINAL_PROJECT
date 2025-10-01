import { useState } from 'react';
import { Heart, MapPin, CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'food' | 'money'>('money');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    amount: '',
    payment_method: '',
    message: '',
  });

  const dropOffLocations = [
    {
      name: 'Nairobi Central Food Bank',
      address: 'Uhuru Highway, Nairobi CBD',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    },
    {
      name: 'Mombasa Community Center',
      address: 'Nyerere Avenue, Mombasa',
      hours: 'Mon-Sat: 8AM-5PM',
    },
    {
      name: 'Kisumu Food Collection Point',
      address: 'Oginga Odinga Street, Kisumu',
      hours: 'Mon-Fri: 9AM-5PM',
    },
    {
      name: 'Nakuru Regional Hub',
      address: 'Kenyatta Avenue, Nakuru',
      hours: 'Mon-Sat: 8AM-6PM',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('donations').insert([
        {
          ...formData,
          donation_type: donationType,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({
        donor_name: '',
        donor_email: '',
        amount: '',
        payment_method: '',
        message: '',
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Failed to record donation. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
            Make a Donation
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your generosity can change lives. Every contribution helps us fight
            hunger and support communities across Kenya.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setDonationType('money')}
            className={`px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg ${
              donationType === 'money'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-50'
            }`}
          >
            <CreditCard className="inline mr-2" size={20} />
            Donate Money
          </button>
          <button
            onClick={() => setDonationType('food')}
            className={`px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg ${
              donationType === 'food'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-50'
            }`}
          >
            <Heart className="inline mr-2" size={20} />
            Donate Food
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {donationType === 'money'
                ? 'Financial Contribution'
                : 'Food Donation'}
            </h2>

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Thank you for your generous donation!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.donor_name}
                  onChange={(e) =>
                    setFormData({ ...formData, donor_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.donor_email}
                  onChange={(e) =>
                    setFormData({ ...formData, donor_email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {donationType === 'money' ? (
                <>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Amount (KES)
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Payment Method
                    </label>
                    <select
                      required
                      value={formData.payment_method}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          payment_method: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select payment method</option>
                      <option value="M-Pesa">M-Pesa</option>
                      <option value="Airtel Money">Airtel Money</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Food Items Description
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., 20kg rice, 10 liters cooking oil"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Drop-off Location
                    </label>
                    <select
                      required
                      value={formData.payment_method}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          payment_method: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      {dropOffLocations.map((location) => (
                        <option key={location.name} value={location.name}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Share why you're donating or any special message..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  'Processing...'
                ) : (
                  <>
                    <Heart size={20} />
                    Complete Donation
                  </>
                )}
              </button>
            </form>

            {donationType === 'money' && (
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>M-Pesa Paybill:</strong> 123456
                  <br />
                  <strong>Account Number:</strong> UmojaHub
                  <br />
                  <strong>PayPal:</strong> donate@umojahub.org
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Your Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Heart className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">KES 500</h4>
                    <p className="text-gray-600 text-sm">
                      Feeds a family of four for a week
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Heart className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">KES 1,000</h4>
                    <p className="text-gray-600 text-sm">
                      Provides nutritious meals for 10 children
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Heart className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">KES 5,000</h4>
                    <p className="text-gray-600 text-sm">
                      Supports a local farmer with seeds and tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-orange-600" size={28} />
                Food Drop-off Locations
              </h3>
              <div className="space-y-4">
                {dropOffLocations.map((location) => (
                  <div
                    key={location.name}
                    className="border-l-4 border-orange-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {location.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      <Smartphone className="inline" size={12} /> {location.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
