'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Users,
  ShoppingBag,
  TrendingUp,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    shops: 0,
    items: 0,
    orders: 0,
    years: 0,
  });

  const heroSlides = [
    {
      title: 'JOY - Journey of You',
      subtitle: 'Chuyên gia thương mại điện tử hàng đầu Việt Nam',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'Amazon Global Selling',
      subtitle: 'Đưa sản phẩm Việt Nam ra thế giới',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'TikTok Shop Success',
      subtitle: 'Chinh phục thị trường trẻ năng động',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  const partners = [
    {
      name: 'Shopify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png',
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Pingpong',
      logo: 'https://cdn.cookielaw.org/logos/7c7895c5-e5c1-4f3a-8409-eebf1aac9696/59cdcb65-ffae-4720-9f1b-524493f3f57f/00879ab7-bc97-4719-8bbe-fa6127afa9db/PingPong_Logo_[Blue].png',
    },
    {
      name: 'Tiktok',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1024px-TikTok_logo.svg.png',
    },
    {
      name: 'Payoneer',
      logo: 'https://static.vecteezy.com/system/resources/previews/027/127/445/non_2x/payoneer-logo-payoneer-icon-transparent-free-png.png',
    },
    {
      name: 'Yoycol',
      logo: 'https://storage.googleapis.com/topolio24238/plugin-assets/6320/24238/%E5%BD%A9%E8%BF%9Elogo.png',
    },
    {
      name: 'Gearment',
      logo: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8d42266a1b8002685eddd1a0cbc17588.png',
    },
    {
      name: 'Paypal',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
    },
  ];

  const stats = [
    { icon: ShoppingBag, label: 'Shop Online', value: 10, suffix: '+' },
    { icon: TrendingUp, label: 'Items', value: 1000000, suffix: '+' },
    { icon: Users, label: 'Orders', value: 800000, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 5, suffix: '' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }

          setCounters((prev) => ({
            ...prev,
            [index === 0
              ? 'shops'
              : index === 1
              ? 'items'
              : index === 2
              ? 'orders'
              : 'years']: Math.floor(start),
          }));
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative justify-center items-center h-screen">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl text-shadow"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl md:text-2xl text-shadow"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 justify-center sm:flex-row"
          >
            <Link
              href="/about"
              className="inline-flex items-center btn-primary"
            >
              Khám phá ngay
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center btn-outline"
            >
              Liên hệ tư vấn
              <Play className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="flex absolute bottom-8 left-1/2 space-x-2 transform -translate-x-1/2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                {/* <Image
                  src="/LOGO.png"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain mr-4 w-16 h-16"
                /> */}
                <h2 className="text-3xl font-bold md:text-4xl gradient-text">
                  JOY - Journey Of You
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Tại JOY, chúng tôi không chỉ mang đến một công việc, chúng tôi
                trao cho bạn một hành trình. Chúng tôi tin rằng sự nghiệp của
                mỗi người là một chặng đường độc nhất để khám phá, học hỏi và
                trưởng thành. Đó là lý do triết lý "JOY - Journey Of You" ra
                đời.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Chúng tôi cam kết xây dựng một môi trường nơi bạn không chỉ đóng
                góp vào thành công chung, mà còn được trao quyền để kiến tạo con
                đường riêng, theo đuổi và hiện thực hóa ước mơ của chính mình. Ở
                đây, bạn sẽ có không gian, nguồn lực và những người đồng hành để
                biến mỗi mục tiêu cá nhân thành một dấu mốc đáng tự hào. Hãy bắt
                đầu hành trình của bạn, cùng chúng tôi.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center btn-primary"
              >
                Tìm hiểu thêm
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://vinaconex25.com.vn/wp-content/uploads/2024/08/z5711418477074_e568d1746cfc0304f5b40726e8c9ad38-scaled.jpg"
                alt="Company Building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg border-2 shadow-xl border-primary-500">
                <div className="flex items-center space-x-4">
                  {/* <Image
                    src="/LOGO.png"
                    alt="Company Logo"
                    width={48}
                    height={48}
                    className="object-contain w-12 h-12"
                  /> */}
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold md:text-4xl gradient-text">
              Tiểu Sử
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Được thành lập vào 3 tháng 2 năm 2016, JOY là một trong những
                đơn vị tiên phong của Việt Nam trong lĩnh vực thương mại điện tử
                xuyên biên giới. Chúng tôi tự hào sở hữu và phát triển các
                thương hiệu đa dạng, trải dài từ các sản phẩm In theo yêu cầu
                (POD), Trang trí nhà cửa, Phụ kiện, cho đến các mặt hàng "Made
                in Vietnam".
              </p>
              <p>
                Với nhiều năm kinh nghiệm, JOY luôn vận hành dựa trên tôn chỉ
                mang đến những sản phẩm chất lượng cao nhất. Điều này được thực
                hiện hóa thông qua việc không ngừng đổi mới công nghệ, tối ưu
                quy trình thiết kế, tuyển chọn nhà cung cấp kỹ lưỡng và cam kết
                hỗ trợ khách hàng tận tâm. Những thành tựu đáng kể như vị thế
                top đầu trên các nền tảng hàng đầu như Teezily, Teespring,
                Sunfrog, Shopify và Amazon là minh chứng cho năng lực của chúng
                tôi. Chúng tôi tin tưởng rằng JOY sẽ tiếp tục tạo ra những ảnh
                hưởng tích cực và mạnh mẽ đến thị trường thương mại điện tử
                xuyên biên giới tại Việt Nam.
              </p>
              <p>
                Với đội ngũ nhân sự cốt lõi giàu kinh nghiệm trong các lĩnh vực
                công nghệ, thiết kế, marketing và chăm sóc khách hàng, JOY tự
                hào xây dựng một môi trường làm việc chuyên nghiệp, năng động,
                là nơi để các tài năng trẻ đầy nhiệt huyết phát huy tối đa tiềm
                năng. Điều này đảm bảo chúng tôi luôn giữ vững vị thế dẫn đầu
                trong ngành thương mại điện tử nói chung và thương mại điện tử
                xuyên biên giới nói riêng.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl gradient-text">
              Đối tác tin cậy
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Chúng tôi tự hào hợp tác với những nền tảng thương mại điện tử
              hàng đầu thế giới
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center p-8 bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="object-contain h-12 hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src = '/LOGO.png';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="bg-gradient-to-r section-padding from-primary-500 to-secondary-500"
      >
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Thành tựu của chúng tôi
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Những con số ấn tượng khẳng định uy tín và chất lượng dịch vụ của
              Joy
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const counterValue =
                index === 0
                  ? counters.shops
                  : index === 1
                  ? counters.items
                  : index === 2
                  ? counters.orders
                  : counters.years;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 text-center rounded-lg backdrop-blur-md transition-all duration-300 bg-white/10 hover:bg-white/20"
                >
                  <Icon className="mx-auto mb-4 text-white" size={48} />
                  <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                    {counterValue.toLocaleString()}
                    {stat.suffix}
                  </h3>
                  <p className="text-white/90">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default HomePage;
