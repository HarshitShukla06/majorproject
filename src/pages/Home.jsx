import Hero from "../components/home/Hero";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import { Compass, Shield, Headphones, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {

  const features = [
    {
      icon: Compass,
      title: "Expert Guidance",
      description:
        "Get personalized recommendations from travel experts with years of experience",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description:
        "Your safety is our priority with secure payment processing and verified partners",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you throughout your journey",
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description:
        "We guarantee the best prices or we will refund the difference",
    },
  ];

  return (
    <div>
      <Hero />

      <FeaturedDestinations />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gantavia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience hassle-free travel planning with our comprehensive
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
            Join thousands of happy travelers and create memories that last a
            lifetime
          </p>
          <Link to="/destinations">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-3">
              <Compass className="w-6 h-6" />
              <span>Explore Destinations</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;