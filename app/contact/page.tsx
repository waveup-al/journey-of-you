'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: '188 Đường 30/4, Tòa nhà Misa\nĐà Nẵng, Việt Nam',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@joy-vietnam.com\nsupport@joy-vietnam.com',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      content: '+84 123 456 789\n+84 987 654 321',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 6: 8:30 - 17:30',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập tin nhắn';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Sẵn sàng hỗ trợ bạn 24/7. Hãy để lại thông tin, chúng tôi sẽ liên
              hệ ngay!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {info.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Gửi tin nhắn cho chúng tôi
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      className="mx-auto mb-4 text-green-500"
                      size={64}
                    />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Gửi thành công!
                    </h3>
                    <p className="text-gray-600">
                      Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Họ tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nhập họ tên của bạn"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nhập email của bạn"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nhập số điện thoại (tùy chọn)"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tin nhắn *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nhập tin nhắn của bạn..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi tin nhắn
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Vị trí của chúng tôi
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0234567890123!2d108.2194444!3d16.0544444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a63%3A0x1df0cb4b86727e06!2zVsSDbiBQaMOybmcgxJDhuqFpIERp4buHbiBDw7RuZyBUeSBD4buVIFBo4bqnbiBNSVNBIHThuqFpIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MISA Đà Nẵng Location"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Liên hệ nhanh</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Hotline 24/7</p>
                      <a
                        href="tel:+84123456789"
                        className="text-yellow-200 hover:text-yellow-100"
                      >
                        +84 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email hỗ trợ</p>
                      <a
                        href="mailto:contact@joy-vietnam.com"
                        className="text-yellow-200 hover:text-yellow-100"
                      >
                        contact@joy-vietnam.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Theo dõi chúng tôi
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <span className="font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <span className="font-bold">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <span className="font-bold">▶</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Câu hỏi thường gặp
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Một số câu hỏi phổ biến mà khách hàng thường quan tâm
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Joy cung cấp những dịch vụ gì?',
                answer:
                  'Chúng tôi chuyên cung cấp dịch vụ Amazon Global Selling và TikTok Shop, bao gồm thiết lập store, tối ưu listing, quản lý inventory, marketing và customer service.',
              },
              {
                question: 'Chi phí dịch vụ như thế nào?',
                answer:
                  'Chi phí dịch vụ phụ thuộc vào gói dịch vụ và quy mô dự án. Chúng tôi có nhiều gói phù hợp với từng nhu cầu và ngân sách. Liên hệ để được tư vấn chi tiết.',
              },
              {
                question: 'Thời gian triển khai dự án bao lâu?',
                answer:
                  'Thời gian triển khai thường từ 2-4 tuần tùy thuộc vào độ phức tạp của dự án. Chúng tôi sẽ có timeline cụ thể sau khi trao đổi yêu cầu.',
              },
              {
                question: 'Joy có hỗ trợ sau khi launch không?',
                answer:
                  'Có, chúng tôi cung cấp dịch vụ hỗ trợ 24/7 sau khi launch, bao gồm monitoring, optimization và troubleshooting để đảm bảo hiệu quả kinh doanh.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
