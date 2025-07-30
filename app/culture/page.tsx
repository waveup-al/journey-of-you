'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Heart,
  Shield,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

const CulturePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 4;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };


  const coreValues = [
    {
      title: 'TIN',
      icon: Shield,
      content:
        'Tin tưởng là nền tảng của mọi mối quan hệ. Chúng tôi xây dựng niềm tin thông qua sự minh bạch, chân thành và cam kết thực hiện những gì đã hứa. Tin tưởng không chỉ là từ ngữ mà là hành động cụ thể trong từng dự án, từng giao dịch.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'TRỌNG',
      icon: Heart,
      content:
        'Trọng bản thân, trọng đồng nghiệp, trọng khách hàng. Chúng tôi tin rằng sự tôn trọng lẫn nhau tạo nên môi trường làm việc tích cực, nơi mọi người đều có thể phát huy tối đa năng lực và đóng góp vào thành công chung.',
      color: 'from-red-400 to-pink-600',
    },
    {
      title: 'TRÍ',
      icon: Lightbulb,
      content:
        'Trí tuệ là sức mạnh dẫn dắt chúng tôi vượt qua mọi thách thức. Chúng tôi không ngừng học hỏi, sáng tạo và ứng dụng công nghệ tiên tiến để mang lại giải pháp tối ưu cho khách hàng và đối tác.',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      title: 'TÍN',
      icon: CheckCircle,
      content:
        'Tín nhiệm là kết quả của sự nhất quán giữa lời nói và hành động. Chúng tôi cam kết thực hiện đúng những gì đã hứa, đảm bảo chất lượng dịch vụ và luôn đặt lợi ích của khách hàng lên hàng đầu.',
      color: 'from-green-400 to-emerald-600',
    },
  ];



  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="overflow-hidden relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/giao lưu.jpg"
            alt="Hoạt động âm nhạc văn phòng"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90"></div>
        </div>

        {/* Content Container */}
        <div className="flex relative z-10 flex-col justify-end h-full">
          {/* Bottom Section - Titles */}
          <div className="pt-20 pb-32">
            <motion.div
              className="px-4 mx-auto max-w-5xl text-center text-white"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="mb-4 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <span className="text-white drop-shadow-2xl">Văn hóa </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 drop-shadow-lg">
                  Joy
                </span>
              </motion.h1>

              <motion.h2
                className="mb-6 text-2xl font-semibold tracking-wide text-amber-200 md:text-3xl lg:text-4xl"
                style={{ fontFamily: 'Inter, serif' }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Nơi tài năng toả sáng
              </motion.h2>

              <motion.div
                className="flex flex-col gap-3 justify-center items-center sm:flex-row"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full shadow-md transition-all duration-300 transform hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 hover:scale-105 hover:shadow-lg">
                  Khám phá văn hóa
                </button>
                <button className="px-6 py-2 text-sm font-medium text-white rounded-full border-2 border-white transition-all duration-300 transform hover:bg-white hover:text-gray-900 hover:scale-105">
                  Tham gia với chúng tôi
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex justify-center"
            >
              <a
                href="#values"
                className="transition-colors duration-300 animate-bounce text-white/60 hover:text-white/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary-50 text-primary-600">
              Nền tảng của chúng tôi
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl gradient-text">
              Giá trị cốt lõi 4T
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Bốn giá trị cốt lõi định hướng mọi hoạt động của Joy, tạo nên văn
              hóa doanh nghiệp mạnh mẽ và bền vững, là kim chỉ nam cho sự phát
              triển của công ty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 h-full bg-white rounded-2xl shadow-lg transition-all duration-500 transform hover:shadow-2xl hover:scale-105">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                      {value.title}
                    </h3>

                    {/* Content */}
                    <p className="text-lg leading-relaxed text-gray-600">
                      {value.content}
                    </p>

                    {/* Decorative Element */}
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Phần tuyển dụng đã được xóa theo yêu cầu */}

      {/* Memorable Moments Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Những khoảnh khắc đáng nhớ
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <motion.div
                className="flex"
                animate={{ x: `${-currentImageIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {[
                  { src: "/Joy1.jpg", alt: "Joy 1" },
                  { src: "/Joy2.jpg", alt: "Joy 2" },
                  { src: "/giao lưu.jpg", alt: "Giao lưu" },
                  { src: "/workshop.jpg", alt: "Workshop" }
                ].map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturePage;
