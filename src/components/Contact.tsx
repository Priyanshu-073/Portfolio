import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // helper to build subject/body and open compose URLs
  const RECEIVER = 'priyanshudwivedi932@gmail.com';
  const buildSubject = () => `Website message from ${formData.name || 'Visitor'}`;
  const buildBody = () =>
    `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`;

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openGmail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      RECEIVER
    )}&su=${encodeURIComponent(buildSubject())}&body=${encodeURIComponent(buildBody())}`;
    openInNewTab(url);
    setIsSubmitted(true);
  };

  const openOutlook = () => {
    const url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
      RECEIVER
    )}&subject=${encodeURIComponent(buildSubject())}&body=${encodeURIComponent(buildBody())}`;
    openInNewTab(url);
    setIsSubmitted(true);
  };

  const openMailto = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const mailto = `mailto:${encodeURIComponent(RECEIVER)}?subject=${encodeURIComponent(
      buildSubject()
    )}&body=${encodeURIComponent(buildBody())}`;
    // open mailto in same tab to trigger native mail client
    window.location.href = mailto;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "priyanshudwivedi932@gmail.com",
      link: "mailto:priyanshudwivedi932@gmail.com"
    },
    {
      icon: <Phone className="text-emerald-600" size={24} />,
      title: "Phone",
      value: "9555934378",
      link: "tel:+919555934378"
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      title: "Location",
      value: "Phagwara,Punjab",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/Priyanshu-073",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priyanshu-62d/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      url: "https://www.instagram.com/priyam_dwivedi_73/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects,
            or just having a conversation about technology. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.title}</p>
                    <p className="text-gray-900 font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-50 rounded-lg text-gray-700 ${social.color} transition-all duration-200 hover:shadow-md transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Me a Message</h3>

            <form onSubmit={openMailto} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={openGmail}
                  className="px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition"
                >
                  Compose in Gmail
                </button>
                <button
                  type="button"
                  onClick={openOutlook}
                  className="px-4 py-2 bg-sky-600 text-white rounded-md font-medium hover:bg-sky-700 transition"
                >
                  Compose in Outlook
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message (open mail client)
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            © 2025 Priyanshu. Built with React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Designed with ❤️ for showcasing modern web development skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;