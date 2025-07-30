'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const coreValues = [
    {
      title: 'TIN',
      icon: Shield,
      content:
        'Niềm tin là giá trị quý giá, cần được nuôi dưỡng và bảo vệ không ngừng. Chúng ta mong muốn các thành viên luôn thẳng thắn, giữ vững những giá trị đúng đắn và dựa vào nhau thông qua lòng tin. Sự trung thực và chính trực trong mọi hành động chính là nguyên tắc cốt lõi, nhất quán với triết lý kinh doanh mà chúng ta theo đuổi.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'TRỌNG',
      icon: Heart,
      content:
        'Trọng bản thân, trọng gia đình, trọng tổ chức, trọng xã hội. Luôn tôn trọng giá trị con người, tôn trọng đối tác, khách hàng và đồng nghiệp, vì đó là nền tảng của sự phát triển bền vững.',
      color: 'from-red-400 to-pink-600',
    },
    {
      title: 'TRÍ',
      icon: Lightbulb,
      content:
        'Luôn đổi mới sáng tạo và phát huy tinh thần học tập suốt đời. Thế giới đang thay đổi ngay cả khi chúng ta không thay đổi. Việc chấp nhận thay đổi, bằng cách thay đổi bản thân hoặc thúc đẩy thay đổi trong công ty, là một phần độc đáo trong DNA của chúng ta và phải được coi trọng. Hiệu suất tốt nhất hôm nay sẽ là nền tảng cho thành công ngày mai. Mọi sự đổi thay đều bắt đầu từ chính bản thân mỗi người.',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      title: 'TÍN',
      icon: CheckCircle,
      content:
        'Luôn giữ chữ tín, giữ sự cam kết trong mọi lời nói, hành động, giao dịch . Một lần bất tín, vạn lần bất tin, muốn người khác Tin, bản thân phải Tín.  Vạn sự khởi từ tâm lương thiện. Chúng ta kinh doanh bằng sự tử tế và tận tâm, đặt chữ tín làm kim chỉ nam cho mọi hành động',
      color: 'from-green-400 to-emerald-600',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Vision Section */}
      <section className="flex overflow-hidden relative justify-center items-center min-h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Global vision"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white container-custom">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-lg font-semibold tracking-widest text-yellow-300 uppercase md:text-xl">
              TẦM NHÌN
            </p>
            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-shadow">
              Xây dựng một công ty kiểu mới
            </h1>
            <p className="mx-auto mb-12 max-w-5xl text-xl leading-relaxed md:text-2xl lg:text-3xl text-shadow">
              Lớn mạnh, hiệu quả, đóng góp vào kỷ nguyên vươn mình của dân tộc.
              Đưa sản phẩm và trí tuệ của con người Việt Nam ra toàn cầu.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex justify-center items-center p-4 w-32 h-32 rounded-full backdrop-blur-md bg-white/20"
            >
              <Image
                src="/LOGO.png"
                alt="Company Logo"
                width={96}
                height={96}
                className="object-contain w-24 h-24"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 text-white transform -translate-x-1/2"
        >
          <div className="flex justify-center w-6 h-10 rounded-full border-2 border-white">
            <div className="mt-2 w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold leading-[1.3] md:text-5xl md:leading-[1.3] gradient-text">
              Giá trị cốt lõi
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Các giá trị cốt lõi định hướng mọi hoạt động của Joy, tạo nên văn
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

      {/* Office Gallery Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="inline-flex justify-center items-center mb-6 w-16 h-16 bg-gradient-to-r rounded-2xl from-primary-500 to-secondary-500">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl md:leading-[1.3] gradient-text">
              Không gian làm việc
            </h2>
            <p className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-gray-600">
              Môi trường làm việc hiện đại và chuyên nghiệp, được thiết kế để
              khuyến khích sự sáng tạo, hợp tác và phát triển bền vững của đội
              ngũ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {[
              {
                src: '/vp1.jpg',
                title: 'Không gian làm việc chính',
                description:
                  'Khu vực làm việc mở với thiết kế hiện đại, tối ưu hóa năng suất và sự tương tác.',
                features: [
                  'Thiết kế mở',
                  'Ánh sáng tự nhiên',
                  'Công nghệ hiện đại',
                ],
              },
              {
                src: '/vp2.jpg',
                title: 'Phòng họp & Hội thảo',
                description:
                  'Không gian họp được trang bị đầy đủ công nghệ cho các cuộc họp hiệu quả.',
                features: [
                  'Hệ thống AV',
                  'Whiteboard thông minh',
                  'Video conference',
                ],
              },
              {
                src: '/food_area.jpg',
                title: 'Khu vực ăn uống',
                description:
                  'Không gian rộng rãi, thoải mái, dành cho các buổi ăn uống và thư giãn.',
                features: [
                  'Thiết kế thoải mái',
                  'Màu sắc tươi sáng',
                  'Không gian rộng rãi',
                ],
              },
              {
                src: '/vp4.jpg',
                title: 'Khu vực học tập',
                description:
                  'Không gian riêng tư, dành cho các buổi học tập và training.',
                features: [
                  'Bàn ghế đầy đủ',
                  'Không gian yên tĩnh',
                  'Thiết bị hiện đại',
                ],
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden bg-white rounded-3xl shadow-xl transition-all duration-700 transform group hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={office.src}
                    alt={office.title}
                    className="object-cover w-full h-72 transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/40" />
                  <div className="absolute top-6 right-6">
                    <div className="flex justify-center items-center w-12 h-12 rounded-full backdrop-blur-md bg-white/20">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">
                    {office.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {office.description}
                  </p>

                  <div className="space-y-3">
                    {office.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="flex-shrink-0 mr-3 w-2 h-2 bg-gradient-to-r rounded-full from-primary-500 to-secondary-500" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <div className="pt-6 mt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">
                        Khám phá không gian
                      </span>
                      <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-r rounded-full transition-transform duration-300 transform from-primary-500 to-secondary-500 group-hover:scale-110">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 mt-20 bg-white rounded-3xl shadow-xl md:p-12"
          >
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">200m²</div>
                <div className="font-medium text-gray-600">
                  Tổng diện tích văn phòng
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">50+</div>
                <div className="font-medium text-gray-600">Vị trí làm việc</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">2</div>
                <div className="font-medium text-gray-600">
                  Chi nhánh (Hà Nội, Đà Nẵng)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl gradient-text">
                Câu chuyện của Joy
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Với sứ mệnh khẳng định vị thế sản phẩm 'Made-in-Vietnam' trên
                trường quốc tế, Joy đã và đang vận hành thành công mô hình kinh
                doanh trên các nền tảng thương mại điện tử hàng đầu như Amazon
                và TikTok Shop.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Xuất phát điểm là một doanh nghiệp Việt Nam, chúng tôi đã tự chủ
                xây dựng và tối ưu hóa toàn bộ chuỗi cung ứng, từ sản xuất đến
                tay khách hàng toàn cầu. Sự tăng trưởng vững chắc qua từng năm
                là sự công nhận của thị trường đối với chất lượng sản phẩm và uy
                tín thương hiệu mà Joy đã tạo dựng.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Chúng tôi tự hào là một trong những đại diện tiêu biểu cho thế
                hệ doanh nghiệp Việt Nam mới, sẵn sàng cạnh tranh và chinh phục
                thị trường toàn cầu.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 p-6 text-white bg-gradient-to-r rounded-lg shadow-xl from-primary-500 to-secondary-500">
                <h4 className="mb-2 text-2xl font-bold">2016</h4>
                <p className="text-sm">Năm thành lập</p>
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg border-2 shadow-xl border-primary-500">
                <h4 className="mb-2 text-2xl font-bold text-gray-900">
                  1.000.000+
                </h4>
                <p className="text-sm text-gray-600">Khách hàng tin tưởng</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
