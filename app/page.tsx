'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20smart%20home%20security%20system%20with%20high-tech%20surveillance%20cameras%2C%20electric%20fence%20perimeter%2C%20solar%20panels%20on%20roof%2C%20professional%20installation%20team%20working%2C%20bright%20blue%20sky%20background%2C%20clean%20minimalist%20design%2C%20security%20technology%20equipment%2C%20outdoor%20residential%20setting%20with%20beautiful%20landscaping%20and%20modern%20architecture&width=1920&height=1080&seq=hero-main&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Smart Home Security <br />
              <span className="text-blue-400">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive security solutions including electric fencing, CCTV systems, solar power, and professional maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Get Free Quote
              </Link>
              <Link href="/services" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation and long-term maintenance for complete home security automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Electric Fencing</h3>
                <p className="text-gray-600 mb-6">
                  High-voltage perimeter security fencing with smart monitoring and alert systems for maximum property protection.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CCTV Security Cameras</h3>
                <p className="text-gray-600 mb-6">
                  Professional installation of high-definition surveillance systems with remote monitoring and mobile app access.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar System Installation</h3>
                <p className="text-gray-600 mb-6">
                  Eco-friendly solar power systems to keep your security equipment running efficiently with backup power.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose SecureHome</h2>
            <p className="text-xl text-gray-600">Professional service with ongoing maintenance and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Installation</h3>
              <p className="text-gray-600">Expert technicians with years of experience in security system installation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Monitoring</h3>
              <p className="text-gray-600">Round-the-clock surveillance monitoring and immediate alert response</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-settings-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Maintenance</h3>
              <p className="text-gray-600">Scheduled inspections and maintenance to ensure optimal system performance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage on all equipment and installation work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20secure%20smart%20home%20at%20dusk%20with%20security%20lights%2C%20professional%20security%20installation%2C%20peaceful%20residential%20neighborhood%2C%20well-lit%20exterior%2C%20security%20cameras%20visible%2C%20electric%20fence%20perimeter%2C%20solar%20panels%20on%20roof%2C%20professional%20security%20technology&width=1920&height=600&seq=cta-bg&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Home?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote for your smart home security automation system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Get Free Quote
            </Link>
            <Link href="tel:+15551234567" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
              Call Now: (555) 123-4567
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}