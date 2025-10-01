import {
  Lightbulb,
  Leaf,
  ShoppingCart,
  Users,
  Recycle,
  Sprout,
} from 'lucide-react';

export default function TipsPage() {
  const tips = [
    {
      category: 'Affordable Healthy Eating',
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-600',
      items: [
        {
          title: 'Buy Local and Seasonal',
          description:
            'Purchase fruits and vegetables that are in season from local markets. They are fresher, cheaper, and support local farmers.',
        },
        {
          title: 'Plan Your Meals',
          description:
            'Create a weekly meal plan before shopping to avoid impulse buying and reduce waste. Make a list and stick to it.',
        },
        {
          title: 'Cook in Bulk',
          description:
            'Prepare large portions of staple foods like beans, rice, and stews. Store in portions for quick, affordable meals throughout the week.',
        },
        {
          title: 'Choose Whole Grains',
          description:
            'Ugali, brown rice, and whole wheat are nutritious and filling. They provide more energy and nutrients than processed alternatives.',
        },
        {
          title: 'Grow Your Own',
          description:
            'Start a small kitchen garden with tomatoes, kale (sukuma wiki), and herbs. Even a few pots can supplement your meals affordably.',
        },
      ],
    },
    {
      category: 'Reducing Food Waste',
      icon: Recycle,
      color: 'bg-green-100 text-green-600',
      items: [
        {
          title: 'Store Food Properly',
          description:
            'Keep vegetables fresh longer by storing them correctly. Use airtight containers and separate items that spoil quickly.',
        },
        {
          title: 'Use Leftovers Creatively',
          description:
            'Transform yesterday\'s ugali into breakfast porridge, or use leftover vegetables in omelets or stews.',
        },
        {
          title: 'First In, First Out',
          description:
            'Organize your pantry so older items are at the front. Use them first before they expire.',
        },
        {
          title: 'Understand Expiry Dates',
          description:
            '"Best before" dates are about quality, not safety. Many foods are still good after this date. Use your senses to check.',
        },
        {
          title: 'Compost Food Scraps',
          description:
            'Turn vegetable peels, fruit scraps, and organic waste into compost for your garden. It enriches soil and reduces waste.',
        },
      ],
    },
    {
      category: 'Supporting Local Farmers',
      icon: Sprout,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          title: 'Buy Direct from Farmers',
          description:
            'Visit local markets and farm stands instead of supermarkets. You get fresher produce at better prices, and farmers earn more.',
        },
        {
          title: 'Join Community Groups',
          description:
            'Participate in community-supported agriculture (CSA) programs or farmer cooperatives for regular, affordable fresh produce.',
        },
        {
          title: 'Share Knowledge',
          description:
            'Exchange farming tips, seeds, and techniques with neighbors. Community knowledge strengthens food security for everyone.',
        },
        {
          title: 'Advocate for Farmers',
          description:
            'Support policies and initiatives that help smallholder farmers. Their success is key to ending hunger in Kenya.',
        },
        {
          title: 'Reduce Food Miles',
          description:
            'Choose locally grown food over imported items when possible. It\'s fresher, supports the local economy, and reduces environmental impact.',
        },
      ],
    },
  ];

  const quickTips = [
    'Beans and lentils are affordable protein sources',
    'Drink plenty of water instead of sugary drinks',
    'Share bulk purchases with neighbors to save money',
    'Preserve excess harvest by drying or fermenting',
    'Use every part of vegetables, including stems and leaves',
    'Buy imperfect produce at lower prices',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Tips & Education
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Practical advice to help you eat healthy on a budget, reduce food
            waste, and support local farmers in your community.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb size={32} />
            Quick Tips
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur"
              >
                <p className="font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {tips.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${section.color} p-3 rounded-lg`}>
                    <Icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {section.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-green-600" size={32} />
            Community Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Agricultural Extension Services
              </h3>
              <p className="text-gray-600 mb-2">
                Contact your local agricultural office for free advice on
                farming techniques, pest control, and crop selection.
              </p>
              <p className="text-sm text-gray-500">
                Ministry of Agriculture: 0800 720 000
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Nutrition Education Programs
              </h3>
              <p className="text-gray-600 mb-2">
                Join community health workshops to learn about balanced diets
                and food preparation for your family.
              </p>
              <p className="text-sm text-gray-500">
                Check with your local health center
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Farmers' Cooperatives
              </h3>
              <p className="text-gray-600 mb-2">
                Join or form a cooperative to access better prices for inputs,
                share equipment, and negotiate better market rates.
              </p>
              <p className="text-sm text-gray-500">
                Cooperative Development Department
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Food Banks & Distribution
              </h3>
              <p className="text-gray-600 mb-2">
                If you're facing food insecurity, reach out to local food banks
                and community organizations for assistance.
              </p>
              <p className="text-sm text-gray-500">Kenya Red Cross: 1199</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <Leaf size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Together We Can End Hunger
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Every small action counts. By making informed choices about food,
            reducing waste, and supporting local farmers, we all contribute to a
            food-secure Kenya.
          </p>
          <p className="text-green-100">
            Share these tips with your family, friends, and community!
          </p>
        </div>
      </div>
    </div>
  );
}
