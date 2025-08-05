'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20security%20company%20team%20with%20modern%20office%20building%2C%20experienced%20technicians%20and%20security%20specialists%2C%20corporate%20headquarters%2C%20professional%20business%20environment%2C%20team%20of%20security%20experts%2C%20modern%20technology%20company&width=1920&height=800&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SecureHome</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Leading provider of smart home security automation with over 15 years of experience
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At SecureHome, we are dedicated to providing comprehensive security solutions that give homeowners peace of mind. Founded in 2009, we have grown from a small local business to a trusted security automation company serving thousands of satisfied customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise spans electric fencing, CCTV surveillance systems, solar power integration, and long-term maintenance services. We believe that security should be reliable, efficient, and accessible to everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                  <div className="text-gray-600">Homes Secured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20security%20company%20office%20interior%20with%20professional%20team%20working%20on%20security%20system%20monitoring%2C%20multiple%20screens%20showing%20surveillance%20feeds%2C%20professional%20work%20environment%2C%20security%20operations%20center%2C%20modern%20technology%20workspace&width=800&height=600&seq=mission-image&orientation=landscape"
                alt="Our Mission"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Certified professionals dedicated to your security needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20security%20systems%20engineer%2C%20middle-aged%20man%20in%20business%20casual%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20security%20technology%20expert%2C%20professional%20headshot%2C%20experienced%20technician&width=400&height=500&seq=team-john&orientation=portrait"
                alt="John Anderson"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">John Anderson</h3>
                <p className="text-blue-600 font-semibold mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">15+ years in security systems design and implementation. Certified in advanced surveillance technologies.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20female%20security%20consultant%2C%20confident%20businesswoman%20in%20professional%20attire%2C%20modern%20office%20setting%2C%20security%20industry%20expert%2C%20professional%20headshot%2C%20experienced%20security%20specialist&width=400&height=500&seq=team-sarah&orientation=portrait"
                alt="Sarah Mitchell"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
                <p className="text-blue-600 font-semibold mb-3">Security Consultant</p>
                <p className="text-gray-600 text-sm">Expert in residential security assessments and custom solution design. 12+ years of field experience.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20solar%20energy%20engineer%2C%20experienced%20technician%20in%20work%20uniform%2C%20modern%20workshop%20background%2C%20renewable%20energy%20specialist%2C%20professional%20headshot%2C%20solar%20installation%20expert&width=400&height=500&seq=team-mike&orientation=portrait"
                alt="Mike Rodriguez"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Rodriguez</h3>
                <p className="text-blue-600 font-semibold mb-3">Solar Systems Specialist</p>
                <p className="text-gray-600 text-sm">Certified solar installation expert with extensive knowledge in renewable energy integration for security systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">Dependable security solutions that work when you need them most, backed by proven technology and 24/7 monitoring.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className="ri-award-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">Commitment to the highest standards in installation quality, customer service, and ongoing maintenance support.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6">
                <i className="ri-lightbulb-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">Staying ahead with the latest security technologies and sustainable energy solutions for modern homes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-heart-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency, honest communication, and delivering on our promises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600">Industry-leading certifications and trusted partnerships</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-certificate-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">ISO 9001</h3>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">CISA Certified</h3>
              <p className="text-sm text-gray-600">Security Systems</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-sun-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">NABCEP</h3>
              <p className="text-sm text-gray-600">Solar Installation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-building-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Licensed</h3>
              <p className="text-sm text-gray-600">Bonded & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Experience the SecureHome Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their home security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Get Free Quote
            </Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}