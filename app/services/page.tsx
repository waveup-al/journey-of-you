'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  Users,
  ShoppingCart,
  BarChart3,
  Headphones,
  Package,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  const amazonServices = [
    {
      icon: Globe,
      title: 'Global Market Access',
      description:
        'Tiếp cận 300+ triệu khách hàng trên toàn thế giới qua 20+ marketplace của Amazon',
    },
    {
      icon: Package,
      title: 'Store Setup & Optimization',
      description:
        'Thiết lập và tối ưu hóa store Amazon từ A-Z, đảm bảo tuân thủ chính sách',
    },
    {
      icon: BarChart3,
      title: 'Listing Optimization',
      description:
        'Tối ưu hóa sản phẩm với SEO, hình ảnh chất lượng cao và mô tả hấp dẫn',
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Advertising',
      description:
        'Chiến lược quảng cáo PPC, Amazon DSP và các công cụ marketing hiệu quả',
    },
    {
      icon: Headphones,
      title: 'Customer Service',
      description: 'Dịch vụ chăm sóc khách hàng 24/7 bằng nhiều ngôn ngữ',
    },
    {
      icon: ShoppingCart,
      title: 'Inventory Management',
      description:
        'Quản lý kho hàng thông minh, dự báo nhu cầu và tối ưu chi phí',
    },
  ];

  const tiktokServices = [
    {
      icon: Users,
      title: 'Content Strategy',
      description:
        'Xây dựng chiến lược nội dung viral, phù hợp với xu hướng Gen Z',
    },
    {
      icon: Star,
      title: 'Influencer Marketing',
      description:
        'Kết nối với KOLs và influencers hàng đầu để tăng độ nhận diện thương hiệu',
    },
    {
      icon: TrendingUp,
      title: 'Live Commerce',
      description:
        'Tổ chức livestream bán hàng chuyên nghiệp với tỷ lệ chuyển đổi cao',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description:
        'Phân tích dữ liệu chi tiết để tối ưu hóa hiệu suất bán hàng',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tư vấn & Phân tích',
      description:
        'Đánh giá sản phẩm, thị trường mục tiêu và xây dựng chiến lược phù hợp',
    },
    {
      step: '02',
      title: 'Thiết lập & Tối ưu',
      description:
        'Tạo store, tối ưu listing và chuẩn bị mọi thứ để ra mắt sản phẩm',
    },
    {
      step: '03',
      title: 'Ra mắt & Quảng cáo',
      description:
        'Ra mắt sản phẩm với chiến dịch marketing mạnh mẽ để tạo momentum',
    },
    {
      step: '04',
      title: 'Quản lý & Phát triển',
      description: 'Theo dõi, tối ưu và mở rộng quy mô kinh doanh bền vững',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="text-white bg-gradient-to-r section-padding from-primary-500 to-secondary-500">
        <div className="text-center container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Dịch vụ của chúng tôi
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
              Giải pháp toàn diện cho thương mại điện tử, từ Amazon Global
              Selling đến TikTok Shop
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amazon Services Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 items-center mb-16 lg:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-2 items-start mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="mr-4 h-12"
                />
                <h2 className="text-3xl font-bold md:text-4xl gradient-text">
                  Global Selling
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Từ một doanh nghiệp tại Việt Nam với khát khao vươn ra thế giới,
                chúng tôi đã chọn Amazon làm cầu nối để mang sản phẩm
                "Made-in-Vietnam" đến với bạn bè quốc tế. Hành trình của chúng
                tôi bắt đầu từ việc xây dựng gian hàng đầu tiên, tỉ mỉ tối ưu
                từng trang sản phẩm, làm chủ quy trình quản lý kho hàng phức
                tạp, cho đến việc triển khai các chiến dịch marketing và chăm
                sóc khách hàng trên khắp các châu lục. Giờ đây, chúng tôi tự hào
                khi những sản phẩm mang tâm huyết của người Việt đã có mặt trong
                giỏ hàng của hàng trăm triệu khách hàng toàn cầu.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary-100 text-primary-700">
                  20+ Marketplaces
                </span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700">
                  300M+ Customers
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  24/7 Support
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center btn-primary"
              >
                Tìm hiểu thêm
                <Globe className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Amazon Global Selling"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Amazon Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {amazonServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg card-hover"
                >
                  <Icon className="mb-4 text-primary-500" size={40} />
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TikTok Shop Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 items-center mb-16 lg:grid-cols-2">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="TikTok Shop"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-contain mr-4 w-[159px]"
                />
                {/* <h2 className="text-3xl font-bold md:text-4xl gradient-text">
                  Tiktok Shop
                </h2> */}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Chinh phục thế hệ Gen Z với TikTok Shop - nền tảng social
                commerce đang bùng nổ. Chúng tôi giúp bạn tạo ra những chiến
                dịch viral, kết nối với influencers và tối ưu hóa trải nghiệm
                mua sắm trực tiếp trên video.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                  Viral Content
                </span>
                <span className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                  Live Commerce
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                  Influencer Network
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center btn-secondary"
              >
                Khám phá ngay
                <TrendingUp className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>

          {/* TikTok Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tiktokServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-lg transition-all duration-300 hover:shadow-lg card-hover"
                >
                  <Icon className="mb-4 text-secondary-500" size={40} />
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl gradient-text">
              Quy trình làm việc
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Quy trình 4 bước đã được chứng minh hiệu quả, đảm bảo thành công
              cho mọi dự án
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 text-xl font-bold text-white bg-gradient-to-r rounded-full from-primary-500 to-secondary-500">
                  {step.step}
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 transform translate-x-8"></div>
                )}

                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white bg-gradient-to-r section-padding from-primary-500 to-secondary-500">
        <div className="text-center container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Sẵn sàng bắt đầu hành trình?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Hãy để Joy đồng hành cùng bạn chinh phục thị trường thương mại
              điện tử toàn cầu
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Link
                href="/contact"
                className="px-8 py-3 font-semibold bg-white rounded-lg transition-all duration-300 transform text-primary-600 hover:bg-gray-100 hover:scale-105"
              >
                Liên hệ tư vấn miễn phí
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 font-semibold text-white rounded-lg border-2 border-white transition-all duration-300 hover:bg-white hover:text-primary-600"
              >
                Tìm hiểu về Joy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
