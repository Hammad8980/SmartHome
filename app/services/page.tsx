"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Comprehensive%20security%20services%20showcase%20with%20multiple%20security%20systems%2C%20CCTV%20cameras%2C%20electric%20fencing%2C%20solar%20panels%2C%20professional%20security%20equipment%20display%2C%20modern%20technology%20setup%2C%20professional%20service%20presentation&width=1920&height=800&seq=services-hero&orientation=landscape')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Security Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Complete smart home security automation solutions with professional
            installation and maintenance
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Electric Fencing */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mb-6">
                  <i className="ri-shield-line text-3xl text-blue-600"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Electric Fencing Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our electric fencing solutions provide the ultimate perimeter
                  security for your property. Using high-voltage, low-amperage
                  technology, our systems deliver a safe but effective deterrent
                  against intruders.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      High-voltage perimeter protection
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Smart monitoring and alert system
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Weather-resistant materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Professional installation and testing
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20electric%20fence%20installation%20around%20residential%20property%2C%20high%20voltage%20security%20fencing%20with%20warning%20signs%2C%20metal%20fence%20posts%20with%20insulators%2C%20perimeter%20security%20system%2C%20residential%20setting%20with%20professional%20installation%20work%2C%20bright%20daylight&width=800&height=600&seq=electric-fence-detail&orientation=landscape"
                  alt="Electric Fencing Installation"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* CCTV Systems */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://readdy.ai/api/search-image?query=Advanced%20CCTV%20security%20camera%20system%20installation%20on%20modern%20house%2C%20multiple%20high-definition%20surveillance%20cameras%2C%20night%20vision%20capability%2C%20wireless%20monitoring%20system%2C%20professional%20security%20equipment%20mounted%20on%20building%20exterior%2C%20clear%20installation%20work&width=800&height=600&seq=cctv-detail&orientation=landscape"
                  alt="CCTV Security Systems"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl mb-6">
                  <i className="ri-camera-line text-3xl text-green-600"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  CCTV Security Cameras
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  State-of-the-art surveillance systems with high-definition
                  recording, night vision, and remote monitoring capabilities.
                  Our CCTV solutions provide comprehensive coverage of your
                  property.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      4K Ultra HD recording quality
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Night vision and motion detection
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Mobile app remote access
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Cloud storage and local backup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solar Systems */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                  <i className="ri-sun-line text-3xl text-yellow-600"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Solar System Installation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Sustainable solar power solutions to keep your security
                  systems running efficiently. Our solar installations provide
                  reliable backup power and reduce operational costs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      High-efficiency solar panels
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Battery backup systems
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">Grid-tie capability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      25-year warranty on panels
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20solar%20panel%20installation%20on%20residential%20rooftop%2C%20technicians%20installing%20photovoltaic%20solar%20system%2C%20modern%20solar%20energy%20equipment%2C%20bright%20sunny%20day%2C%20clean%20renewable%20energy%20installation%2C%20professional%20solar%20panel%20mounting%20work&width=800&height=600&seq=solar-detail&orientation=landscape"
                  alt="Solar System Installation"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Biometric Access Control */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl mb-6">
                  <i className="ri-fingerprint-line text-3xl text-purple-600"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Biometric Access Control Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Advanced biometric security systems featuring fingerprint
                  scanners, facial recognition, and palm readers. Our systems
                  provide the highest level of access control with multi-user
                  database management and time tracking capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Fingerprint recognition technology
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Facial recognition systems
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Multi-user database management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Time and attendance tracking
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Integration with existing security systems
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20biometric%20access%20control%20installation%20at%20corporate%20office%20entrance%2C%20technician%20installing%20fingerprint%20scanner%20device%2C%20facial%20recognition%20system%20setup%2C%20advanced%20biometric%20security%20equipment%2C%20modern%20access%20control%20panel%2C%20high-tech%20security%20installation%20work&width=800&height=600&seq=biometric-services&orientation=landscape"
                  alt="Biometric Access Control Systems"
                  className="w-full h-96 object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* GSM Communication Systems */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20GSM%20cellular%20communication%20module%20installation%20for%20security%20system%2C%20technician%20installing%20wireless%20GSM%20modem%20in%20control%20panel%2C%20mobile%20network%20security%20device%20setup%2C%20cellular%20backup%20communication%20equipment%2C%20modern%20telecommunication%20technology%20installation&width=800&height=600&seq=gsm-services&orientation=landscape"
                  alt="GSM Communication Systems"
                  className="w-full h-96 object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-xl mb-6">
                  <i className="ri-signal-tower-line text-3xl text-red-600"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  GSM Communication Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Reliable cellular-based security communication systems that
                  provide instant SMS alerts, remote monitoring, and backup
                  connectivity. Our GSM systems ensure your security remains
                  active even when internet connection is compromised.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Instant SMS alert notifications
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Remote system arm/disarm via SMS
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Cellular backup communication
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Multi-network compatibility
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Low power consumption design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl mx-auto mb-6">
                <i className="ri-settings-line text-3xl text-purple-600"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Long-term Management & Inspection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive maintenance program ensures your security
                systems operate at peak performance year-round with regular
                inspections and proactive servicing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-calendar-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Regular Inspections
                </h3>
                <p className="text-gray-600">
                  Quarterly system checks and performance evaluations
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-tools-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Preventive Maintenance
                </h3>
                <p className="text-gray-600">
                  Proactive repairs and component replacements
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-customer-service-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Emergency response and technical support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized security
            solution for your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
