'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Property Info
    propertyType: '',
    propertySize: '',
    currentSecurity: '',
    
    // Services
    services: [] as string[],
    urgency: '',
    budget: '',
    
    // Additional Info
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className="ri-check-line text-4xl text-green-600"></i>
              </div>
              <h1 className="text-3xl font-bold text-green-800 mb-4">Quote Request Submitted!</h1>
              <p className="text-lg text-green-600 mb-6">
                Thank you for your interest in our security services. Our team will review your requirements and contact you within 24 hours with a detailed quote.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Next Steps:</strong><br />
                  • Our security consultant will call you to discuss your needs<br />
                  • We'll schedule a free on-site assessment<br />
                  • You'll receive a customized quote within 48 hours
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Request Another Quote
                </button>
                <a 
                  href="/"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20security%20consultation%20meeting%2C%20security%20expert%20reviewing%20home%20security%20plans%2C%20modern%20office%20setting%20with%20security%20system%20displays%2C%20consultation%20process%2C%20professional%20business%20meeting%20environment&width=1920&height=800&seq=quote-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Customized security solutions tailored to your specific needs and budget
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`h-1 w-24 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Personal Info</span>
              <span>Property Details</span>
              <span>Service Selection</span>
              <span>Final Details</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form id="quote-form" onSubmit={handleSubmit}>
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address</label>
                      <input 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                      <select 
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="single-family">Single Family Home</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="condo">Condominium</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="apartment">Apartment Complex</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Property Size</label>
                      <select 
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select property size</option>
                        <option value="small">Small (Under 0.25 acres)</option>
                        <option value="medium">Medium (0.25 - 1 acre)</option>
                        <option value="large">Large (1 - 5 acres)</option>
                        <option value="very-large">Very Large (Over 5 acres)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Security Systems</label>
                      <select 
                        name="currentSecurity"
                        value={formData.currentSecurity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select current security level</option>
                        <option value="none">No existing security</option>
                        <option value="basic">Basic alarm system</option>
                        <option value="cameras">Basic cameras only</option>
                        <option value="comprehensive">Comprehensive system</option>
                        <option value="outdated">Outdated system needs upgrade</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Service Selection */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Needed</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-4">Select all services you're interested in:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'electric-fencing', name: 'Electric Fencing', icon: 'ri-shield-line' },
                          { id: 'cctv-cameras', name: 'CCTV Security Cameras', icon: 'ri-camera-line' },
                          { id: 'solar-system', name: 'Solar System Installation', icon: 'ri-sun-line' },
                          { id: 'maintenance', name: 'Maintenance & Monitoring', icon: 'ri-settings-line' }
                        ].map((service) => (
                          <div 
                            key={service.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.services.includes(service.id) 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                formData.services.includes(service.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'
                              }`}>
                                <i className={`${service.icon} text-lg`}></i>
                              </div>
                              <span className="font-semibold">{service.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Project Urgency</label>
                      <select 
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 week)</option>
                        <option value="soon">Soon (Within 1 month)</option>
                        <option value="planning">Planning (1-3 months)</option>
                        <option value="future">Future consideration (3+ months)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-20000">$10,000 - $20,000</option>
                        <option value="20000-50000">$20,000 - $50,000</option>
                        <option value="50000+">$50,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                      <textarea 
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={5} 
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Please share any specific security concerns, special requirements, or questions you have about our services..."
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.additionalInfo.length}/500 characters
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button 
                  type="button"
                  onClick={handlePrev}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                    currentStep === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button 
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Next Step
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isSubmitting || formData.additionalInfo.length > 500}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}