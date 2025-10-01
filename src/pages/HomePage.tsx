import { Heart, Users, Leaf, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-green-800 mb-6">
            Umoja Hub
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Together, we can end hunger and ensure access to nutritious food for
            every Kenyan. Join our mission to create a food-secure nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('share')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              Share Food <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2"
            >
              Donate Now <Heart size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Share Food
            </h3>
            <p className="text-gray-600 mb-4">
              Farmers, shops, and individuals can list surplus food to help
              those in need. Every meal counts.
            </p>
            <button
              onClick={() => onNavigate('share')}
              className="text-green-600 font-semibold hover:text-green-700 flex items-center justify-center gap-1 mx-auto"
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Donate</h3>
            <p className="text-gray-600 mb-4">
              Contribute food or money to support communities. Use mobile money,
              PayPal, or drop off at local centers.
            </p>
            <button
              onClick={() => onNavigate('donate')}
              className="text-orange-500 font-semibold hover:text-orange-600 flex items-center justify-center gap-1 mx-auto"
            >
              Donate Now <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Learn & Grow
            </h3>
            <p className="text-gray-600 mb-4">
              Discover tips on affordable healthy eating, reducing food waste,
              and supporting local farmers.
            </p>
            <button
              onClick={() => onNavigate('tips')}
              className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-1 mx-auto"
            >
              Get Tips <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            SDG Goal 2: Zero Hunger
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
            By 2030, we aim to end hunger, achieve food security, improve
            nutrition, and promote sustainable agriculture across Kenya.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-green-700 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">2.3M</div>
              <div className="text-green-100">Kenyans Food Insecure</div>
            </div>
            <div className="bg-green-700 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">26%</div>
              <div className="text-green-100">Children Stunted</div>
            </div>
            <div className="bg-green-700 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">Together</div>
              <div className="text-green-100">We Can Make Change</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
