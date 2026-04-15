import { Compass, Globe, Users, Award } from "lucide-react";


const About = () => {
  const values = [
    {
      icon: Compass,
      title: "Our Mission",
      description:
        "To make travel across India seamless, inspiring, and accessible by combining technology with local expertise.",
    },
    {
      icon: Globe,
      title: "Pan-India Experiences",
      description:
        "From the Himalayas to coastal retreats, we curate authentic experiences across every corner of India.",
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description:
        "Every journey is personalized, ensuring comfort, safety, and unforgettable memories.",
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description:
        "We partner only with verified guides, hotels, and service providers to guarantee quality.",
    },
  ];


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Gantavia
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Redefining the way you explore India — thoughtfully planned,
            beautifully experienced.
          </p>
        </div>
      </section>


      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Gantavia is a modern travel platform dedicated to helping travelers
              discover India with confidence and clarity. We blend cutting-edge
              technology with deep local insights to create journeys that are
              both meaningful and hassle-free.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are planning a solo escape, a family vacation, or a
              group adventure, Gantavia ensures every detail is thoughtfully
              crafted — from destinations and itineraries to safety and support.
            </p>
          </div>


          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Travelers Trust Us
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Personalized travel planning</li>
              <li>✔ Secure and transparent bookings</li>
              <li>✔ 24/7 customer assistance</li>
              <li>✔ Curated destinations & experiences</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every journey we create
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <value.icon className="w-14 h-14 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Travel Smarter. Travel Gantavia.
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Start your journey with a team that understands India like no one
            else.
          </p>
        </div>
      </section>
    </div>
  );
};


export default About;