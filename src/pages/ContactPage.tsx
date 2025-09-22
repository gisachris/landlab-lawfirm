import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import content from '../content.json';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear general error message when user makes changes
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    // Phone validation (if provided)
    if (formData.phone.trim() && formData.phone.trim().length < 10) {
      errors.phone = 'Please enter a valid phone number';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrorMessage('');
    setValidationErrors({});

    // Validate form
    if (!validateForm()) {
      setErrorMessage('Please correct the errors below and try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setIsSubmitted(true);

        // Reset form after 5 seconds on successful submission
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(
        'Failed to send your message. Please check your internet connection and try again, or contact us directly at (+250) 788-306-700.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = content.contactPage.contactInfoCards.map((info, index) => ({
    ...info,
    icon: index === 0 ? <Phone className="w-6 h-6" /> :
      index === 1 ? <Mail className="w-6 h-6" /> :
        index === 2 ? <MapPin className="w-6 h-6" /> :
          <Clock className="w-6 h-6" />
  }));

  const practiceAreas = content.contactPage.formSection.practiceAreas;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[400px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-hero-image-1 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content.contactPage.heroSection.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {content.contactPage.heroSection.description}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {info.title}
                </h3>
                <p className="text-text font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-text-light text-sm">
                  {info.subDetails}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                {content.contactPage.formSection.title}
              </h2>
              <p className="text-text-light mb-8">
                {content.contactPage.formSection.description}
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {content.contactPage.formSection.successMessageTitle}
                  </h3>
                  <p className="text-green-700">
                    {content.contactPage.formSection.successMessageContent}
                  </p>
                </div>
              ) : (
                <>
                  {/* Error Message Display */}
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-red-800 mb-1">
                            {content.contactPage.formSection.errorMessageTitle}
                          </h3>
                          <p className="text-red-700">
                            {errorMessage || content.contactPage.formSection.errorMessageContent}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${validationErrors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                        />
                        {validationErrors.firstName && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${validationErrors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                        />
                        {validationErrors.lastName && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${validationErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                        />
                        {validationErrors.email && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${validationErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                        />
                        {validationErrors.phone && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${validationErrors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                      />
                      {validationErrors.subject && (
                        <p className="text-red-600 text-sm mt-1">{validationErrors.subject}</p>
                      )}
                    </div>



                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical ${validationErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        placeholder={content.contactPage.formSection.messagePlaceholder}
                      ></textarea>
                      {validationErrors.message && (
                        <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus-ring flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : content.contactPage.formSection.submitButtonText}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                {content.contactPage.officeVisitSection.title}
              </h2>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 mb-8">
                <iframe
                  src={content.contactPage.officeVisitSection.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LandLab Attorneys Location"
                />
              </div>

              {/* Office Info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {content.contactPage.officeVisitSection.officeInfoTitle}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-text">Address</p>
                      <p className="text-text-light">{content.global.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-text">Business Hours</p>
                      <p className="text-text-light">
                        Monday - Friday: {content.global.officeHours.monFri}<br />
                        Saturday: {content.global.officeHours.sat}<br />
                        Sunday: {content.global.officeHours.sun}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  {content.contactPage.officeVisitSection.emergencyContactTitle}
                </h3>
                <p className="text-red-700 mb-3">
                  {content.contactPage.officeVisitSection.emergencyContactDescription}
                </p>
                <a
                  href={`tel:${content.global.contactPhone.replace(/[^+\d]/g, '')}`}
                  className="text-xl font-bold text-red-800 hover:text-red-900"
                >
                  {content.global.contactPhone}
                </a>
                <p className="text-red-600 text-sm mt-2">
                  {content.contactPage.officeVisitSection.emergencyContactNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;