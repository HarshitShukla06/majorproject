import { Mail, Phone, MapPin } from "lucide-react";


const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Gantivya
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Have questions? We’d love to help you plan your perfect journey
            across India.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>


            <p className="text-gray-600 mb-8">
              Reach out to us for travel inquiries, customized tour plans,
              or support.
            </p>


            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-700">
                  +91 98765 43210
                </span>
              </div>


              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-700">
                  support@gantivya.com
                </span>
              </div>


              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-700">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>


            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />


              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>


              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>


        </div>
      </section>
    </div>
  );
};


export default Contact;
