"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20smart%20home%20security%20system%20with%20high-tech%20surveillance%20cameras%2C%20electric%20fence%20perimeter%2C%20solar%20panels%20on%20roof%2C%20professional%20installation%20team%20working%2C%20bright%20blue%20sky%20background%2C%20clean%20minimalist%20design%2C%20security%20technology%20equipment%2C%20outdoor%20residential%20setting%20with%20beautiful%20landscaping%20and%20modern%20architecture&width=1920&height=1080&seq=hero-main&orientation=landscape')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Smart Home Security <br />
              <span className="text-blue-400">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive security solutions including electric fencing, CCTV
              systems, solar power, biometric access control, GSM communication,
              and professional maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation and long-term maintenance for complete
              home security automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Electric%20security%20fence%20installation%20around%20modern%20residential%20property%2C%20high%20voltage%20warning%20signs%2C%20professional%20grade%20metal%20fencing%20with%20insulators%2C%20security%20perimeter%20protection%20system%2C%20clean%20installation%20work%2C%20bright%20daylight%2C%20residential%20neighborhood%20setting&width=600&height=400&seq=electric-fence&orientation=landscape"
                alt="Electric Fencing"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                  <i className="ri-shield-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Electric Fencing
                </h3>
                <p className="text-gray-600 mb-6">
                  High-voltage perimeter security fencing with smart monitoring
                  and alert systems for maximum property protection.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20CCTV%20security%20camera%20installation%20on%20modern%20house%20exterior%2C%20multiple%20high-definition%20surveillance%20cameras%20mounted%20on%20walls%2C%20technician%20installing%20equipment%2C%20wireless%20security%20system%20setup%2C%20clear%20blue%20sky%20background%2C%20professional%20installation%20work&width=600&height=400&seq=cctv-install&orientation=landscape"
                alt="CCTV Installation"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mb-4">
                  <i className="ri-camera-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CCTV Security Cameras
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional installation of high-definition surveillance
                  systems with remote monitoring and mobile app access.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Solar%20panel%20installation%20on%20residential%20rooftop%2C%20professional%20technicians%20installing%20solar%20energy%20system%2C%20modern%20photovoltaic%20panels%20arranged%20on%20house%20roof%2C%20bright%20sunny%20day%2C%20clean%20renewable%20energy%20installation%2C%20professional%20solar%20equipment&width=600&height=400&seq=solar-install&orientation=landscape"
                alt="Solar Installation"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl mb-4">
                  <i className="ri-sun-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Solar System Installation
                </h3>
                <p className="text-gray-600 mb-6">
                  Eco-friendly solar power systems to keep your security
                  equipment running efficiently with backup power.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20biometric%20fingerprint%20access%20control%20system%20at%20modern%20office%20entrance%2C%20high-tech%20biometric%20scanner%20device%2C%20facial%20recognition%20technology%20installation%2C%20secure%20access%20control%20panel%20mounted%20on%20wall%2C%20professional%20security%20equipment%2C%20clean%20modern%20office%20building&width=600&height=400&seq=biometric-home&orientation=landscape"
                alt="Biometric Access Control"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mb-4">
                  <i className="ri-fingerprint-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Biometric Access Control
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced fingerprint and facial recognition systems for secure
                  access control with multi-user database management.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20GSM%20cellular%20communication%20module%20for%20security%20alarm%20system%2C%20wireless%20GSM%20modem%20device%2C%20mobile%20network%20security%20equipment%2C%20cellular%20backup%20communication%20system%2C%20modern%20telecommunication%20technology%20for%20security%20systems%2C%20professional%20installation&width=600&height=400&seq=gsm-home&orientation=landscape"
                alt="GSM Communication System"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl mb-4">
                  <i className="ri-signal-tower-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  GSM Communication Systems
                </h3>
                <p className="text-gray-600 mb-6">
                  Reliable cellular-based security communication with instant
                  SMS alerts and remote monitoring capabilities.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=GSM%20cellular%20communication%20module%20for%20security%20systems%2C%20wireless%20GSM%20alarm%20panel%2C%20mobile%20network%20security%20device%2C%20cellular%20backup%20communication%20system%2C%20professional%20security%20equipment%20installation%2C%20modern%20telecommunication%20technology&width=600&height=400&seq=gsm-system&orientation=landscape"
                alt="Long-term Management"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                  <i className="ri-settings-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Long-term Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive maintenance and inspection services to ensure
                  your security systems operate at peak performance.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SecureHome
            </h2>
            <p className="text-xl text-gray-600">
              Professional service with ongoing maintenance and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Expert technicians with years of experience in security system
                installation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600">
                Round-the-clock surveillance monitoring and immediate alert
                response
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-settings-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Regular Maintenance
              </h3>
              <p className="text-gray-600">
                Scheduled inspections and maintenance to ensure optimal system
                performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5-Year Warranty
              </h3>
              <p className="text-gray-600">
                Comprehensive warranty coverage on all equipment and
                installation work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Don't just take our word for it - hear from thousands of satisfied
              customers who trust SecureHome
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill text-2xl"></i>
                  <i className="ri-star-fill text-2xl"></i>
                  <i className="ri-star-fill text-2xl"></i>
                  <i className="ri-star-fill text-2xl"></i>
                  <i className="ri-star-fill text-2xl"></i>
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600">Average Rating</span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "SecureHome installed our electric fencing system last year and
                it's been absolutely perfect. The installation was professional,
                clean, and completed on time. We feel so much safer now, and the
                24/7 monitoring gives us complete peace of mind."
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20middle-aged%20businessman%20portrait%2C%20confident%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20business%20leader%20image%2C%20clean%20background%2C%20trustworthy%20appearance&width=400&height=400&seq=customer-1&orientation=square"
                  alt="Michael Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Michael Johnson
                  </div>
                  <div className="text-sm text-gray-500">
                    Homeowner, Beverly Hills
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The solar system integration with our security setup is genius!
                Our security cameras and electric fence now run on clean energy
                with backup power. SecureHome's team was knowledgeable and the
                installation was flawless."
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20business%20woman%20leader%2C%20clean%20background%2C%20trustworthy%20appearance&width=400&height=400&seq=customer-2&orientation=square"
                  alt="Sarah Martinez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Martinez
                  </div>
                  <div className="text-sm text-gray-500">
                    Business Owner, Manhattan
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The GSM alerts saved our property! When our internet went down
                during a storm, the GSM system still sent us instant SMS alerts
                about a security breach. The biometric access control is also
                incredibly convenient and secure."
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20senior%20businessman%20portrait%2C%20mature%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20experienced%20business%20leader%2C%20clean%20background%2C%20trustworthy%20appearance&width=400&height=400&seq=customer-3&orientation=square"
                  alt="David Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">David Chen</div>
                  <div className="text-sm text-gray-500">
                    Property Manager, San Francisco
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Customer Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex text-yellow-400 mb-3">
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
              </div>
              <p className="text-gray-600 mb-4">
                "Exceptional service from start to finish. The CCTV system they
                installed provides crystal clear footage day and night. Their
                maintenance team is also very responsive."
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20professional%20headshot%2C%20corporate%20executive%20photo%2C%20business%20professional%20image%2C%20clean%20background%2C%20trustworthy%20appearance&width=300&height=300&seq=customer-4&orientation=square"
                  alt="Emma Thompson"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-medium text-gray-900">Emma Thompson</div>
                  <div className="text-xs text-gray-500">
                    Retail Store Owner
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex text-yellow-400 mb-3">
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
                <i className="ri-star-fill text-sm"></i>
              </div>
              <p className="text-gray-600 mb-4">
                "Their comprehensive approach impressed us. Electric fencing,
                CCTV, and biometric access all working together seamlessly.
                Worth every penny for the security and peace of mind."
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20businessman%20portrait%2C%20confident%20male%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20business%20leader%20image%2C%20clean%20background%2C%20trustworthy%20appearance&width=300&height=300&seq=customer-5&orientation=square"
                  alt="Robert Wilson"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-medium text-gray-900">Robert Wilson</div>
                  <div className="text-xs text-gray-500">Villa Owner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="bg-blue-600 rounded-2xl p-8 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  2,500+
                </div>
                <div className="text-blue-100">Installations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  5-Year
                </div>
                <div className="text-blue-100">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20secure%20smart%20home%20at%20dusk%20with%20security%20lights%2C%20professional%20security%20installation%2C%20peaceful%20residential%20neighborhood%2C%20well-lit%20exterior%2C%20security%20cameras%20visible%2C%20electric%20fence%20perimeter%2C%20solar%20panels%20on%20roof%2C%20professional%20security%20technology&width=1920&height=600&seq=cta-bg&orientation=landscape')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Home?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote for your smart home security
            automation system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+15551234567"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              Call Now: (555) 123-4567
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
