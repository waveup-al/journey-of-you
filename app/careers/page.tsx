'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Award,
  Coffee,
  Briefcase,
  Send,
  Upload,
  X,
} from 'lucide-react';
import Image from 'next/image';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filter, setFilter] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs-section');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Vị trí đang tuyển dụng
  const activeJobs: Job[] = [
    {
      id: 4,
      title: 'Amazon PPC Specialist',
      department: 'E-commerce / Marketing',
      location: 'TP. Đà Nẵng, TĐ. Hà Nội',
      type: 'Full-time',
      salary: '8-12 triệu VNĐ',
      experience: '1-2 năm trở lên',
      description:
        'Quản lý và tối ưu hóa các chiến dịch quảng cáo Amazon PPC, phân tích dữ liệu hiệu suất và đưa ra khuyến nghị để cải thiện ROAS và CPA.',
      requirements: [
        'Kinh nghiệm 1-2 năm trong Performance Marketing trên Amazon, Google Ads, Meta Ads',
        'Hiểu biết sâu về Amazon Seller Central, Amazon Advertising Campaign Manager, Brand Analytics',
        'Thành thạo các công cụ phân tích như Helium 10',
        'Kỹ năng phân tích số liệu tốt, tối ưu CPA, ROAS, CVR',
        'Sử dụng Power BI, Tableau (BI là bắt buộc để thăng tiến)',
        'Tiếng Anh đọc hiểu tốt, đặc biệt tài liệu Amazon',
        'Có laptop cá nhân, tinh thần trách nhiệm cao',
        'Chủ động, làm việc nhóm tốt, chịu áp lực deadline'
      ],
      benefits: [
        'Lương 8-12 triệu + thưởng hiệu suất 2 lần/năm + thưởng lễ tết',
        'Phụ cấp ăn trưa, lương tháng 13, BHXH đầy đủ',
        'Thời gian: 8h30-17h30 T2-T6, nghỉ T7',
        'Làm việc với ngân sách lớn, thương hiệu triệu đô trên Amazon',
        'Phát triển chuyên sâu Amazon PPC & Global Marketing',
        'Môi trường data-driven, đào tạo liên tục',
        'BOD trẻ, mindset mở, team building thường xuyên',
        'Văn phòng HN: ASTA 389A-391 Trường Chinh, DN: Misa 188 đường 30/4'
      ],
    },
  ];

  // Các vị trí JOY quan tâm
  const interestedJobs: Job[] = [
    {
      id: 1,
      title: 'Amazon Account Manager',
      department: 'E-commerce',
      location: 'TP. Đà Nẵng, TĐ. Hà Nội',
      type: 'Full-time',
      salary: '8-12 triệu VNĐ',
      experience: '2-3 năm',
      description:
        'Quản lý và phát triển các tài khoản Amazon, tối ưu hóa listing sản phẩm, và tăng trưởng doanh số bán hàng.',
      requirements: [
        'Kinh nghiệm 2+ năm làm việc với Amazon Seller Central',
        'Hiểu biết về Amazon SEO và PPC',
        'Kỹ năng phân tích dữ liệu tốt',
        'Tiếng Anh giao tiếp tốt',
        'Tư duy logic và giải quyết vấn đề',
      ],
      benefits: [
        'Lương cạnh tranh + thưởng KPI',
        'Bảo hiểm sức khỏe cao cấp',
        'Đào tạo chuyên sâu về Amazon',
        'Cơ hội thăng tiến rõ ràng',
      ],
    },
    {
      id: 2,
      title: 'TikTok Shop Specialist',
      department: 'Social Commerce',
      location: 'TP. Đà Nẵng, TĐ. Hà Nội',
      type: 'Full-time',
      salary: '8-12 triệu VNĐ',
      experience: '1-2 năm',
      description:
        'Phát triển và quản lý các shop trên TikTok, tạo content marketing và tối ưu hóa chiến lược bán hàng.',
      requirements: [
        'Kinh nghiệm với TikTok Shop hoặc social commerce',
        'Kỹ năng tạo content và video marketing',
        'Hiểu biết về xu hướng social media',
        'Khả năng làm việc nhóm tốt',
        'Sáng tạo và năng động',
      ],
      benefits: [
        'Môi trường trẻ trung, năng động',
        'Học hỏi xu hướng mới nhất',
        'Thưởng hiệu suất hấp dẫn',
        'Team building thường xuyên',
      ],
    },
    {
      id: 3,
      title: 'Digital Marketing Executive',
      department: 'Marketing',
      location: 'TP. Đà Nẵng, TĐ. Hà Nội',
      type: 'Full-time',
      salary: '8-12 triệu VNĐ',
      experience: '1-3 năm',
      description:
        'Thực hiện các chiến dịch marketing digital, quản lý quảng cáo online và phân tích hiệu quả marketing.',
      requirements: [
        'Kinh nghiệm Facebook Ads, Google Ads',
        'Kỹ năng phân tích dữ liệu marketing',
        'Hiểu biết về SEO/SEM',
        'Tư duy sáng tạo trong content',
        'Tiếng Anh tốt',
      ],
      benefits: [
        'Được đào tạo các tool marketing mới nhất',
        'Môi trường sáng tạo',
        'Cơ hội thăng tiến nhanh',
        'Bonus theo dự án',
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Lương thưởng hấp dẫn',
      description: 'Mức lương cạnh tranh + thưởng KPI + thưởng dự án',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'Bảo hiểm',
      description: 'Đóng đầy đủ BHXH + BHYT',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: TrendingUp,
      title: 'Phát triển sự nghiệp',
      description: 'Lộ trình thăng tiến rõ ràng + đào tạo chuyên sâu',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Môi trường năng động',
      description:
        'Team trẻ trung, sáng tạo cùng với văn hóa học hỏi không ngừng',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Coffee,
      title: 'Cân bằng công việc - cuộc sống',
      description: 'Thời gian linh hoạt -  team building thường xuyên',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Công nhận & vinh danh',
      description: 'Chương trình nhân viên xuất sắc và thưởng thành tích',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const departments = [
    'all',
    'E-commerce',
    'Social Commerce',
    'Marketing',
    'Business',
    'Technology',
    'Customer Service',
  ];

  const jobs = [...activeJobs, ...interestedJobs];
  const filteredJobs =
    filter === 'all' ? jobs : jobs.filter((job) => job.department === filter);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', applicationData);
    setShowApplicationForm(false);
    // Reset form
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData((prev) => ({ ...prev, resume: file }));
    }
  };

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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/LOGO.png"
                alt="Joy Company Logo"
                width={120}
                height={120}
                className="object-contain mx-auto mb-4 w-30 h-30"
              />
            </motion.div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Tuyển dụng tại Joy
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
              Gia nhập đội ngũ Joy - nơi tài năng được tôn vinh và sự nghiệp
              được phát triển
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="btn-primary"
              >
                <Send className="mr-2" size={20} />
                Ứng tuyển ngay
              </button>
              <button onClick={scrollToJobs} className="btn-outline">
                <Briefcase className="mr-2" size={20} />
                Xem vị trí tuyển dụng
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Tại sao chọn Joy?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Chúng tôi cam kết tạo ra môi trường làm việc tốt nhất cho sự phát
              triển của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 text-center bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg card-hover"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs-section" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Các vị trí đang JOY đang tuyển dụng
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Khám phá các vị trí tuyển dụng phù hợp với bạn
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === dept
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                }`}
              >
                {dept === 'all' ? 'Tất cả' : dept}
              </button>
            ))}
          </div>

          {/* Active Jobs Section */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl">
              {activeJobs.filter(job => filter === 'all' || job.department === filter).map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-full p-4 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="mb-2 text-sm font-bold text-gray-900 inline-block px-2 py-3 rounded-md bg-gray-50 border border-gray-200">
                        {job.title}
                      </h3>
                      <span className="inline-block px-2.5 py-2 text-xs font-medium rounded-lg bg-primary-100 text-primary-700">
                        {job.department}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-all duration-200 hover:scale-105"
                    >
                      Chi tiết →
                    </button>
                  </div>

                  <div className="mb-3 space-y-1">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock size={14} className="mr-2" />
                      <span>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <DollarSign size={14} className="mr-2" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setApplicationData((prev) => ({
                          ...prev,
                          position: job.title,
                        }));
                        setShowApplicationForm(true);
                      }}
                      className="w-full py-2 px-3 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                    >
                      Ứng tuyển
                    </button>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full py-2 px-3 text-sm border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interested Jobs Section */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl mb-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Các vị trí JOY quan tâm
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Những vị trí này hiện chưa mở tuyển dụng, nhưng chúng tôi luôn chào đón CV của bạn để bổ sung vào danh sách chờ. Khi có cơ hội phù hợp, chúng tôi sẽ liên hệ với bạn ngay lập tức!
              </p>
            </div>
            
            <div className="w-full max-w-6xl">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {interestedJobs.filter(job => filter === 'all' || job.department === filter).map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-80 p-4 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="mb-2 text-sm font-bold text-gray-900 inline-block px-2 py-3 rounded-md bg-gray-50 border border-gray-200">
                          {job.title}
                        </h3>
                        <span className="inline-block px-2.5 py-2 text-xs font-medium rounded-lg bg-primary-100 text-primary-700">
                          {job.department}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-all duration-200 hover:scale-105"
                      >
                        Chi tiết →
                      </button>
                    </div>

                    <div className="mb-3 space-y-1">
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock size={14} className="mr-2" />
                        <span>
                          {job.type} • {job.experience}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <DollarSign size={14} className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setApplicationData((prev) => ({
                            ...prev,
                            position: job.title + " (Danh sách chờ)",
                          }));
                          setShowApplicationForm(true);
                        }}
                        className="w-full py-2 px-3 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                      >
                        Ứng tuyển
                      </button>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="w-full py-2 px-3 text-sm border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-white border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedJob.title}
              </h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 mb-4">
                  {selectedJob.department}
                </span>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>
                      {selectedJob.type} • {selectedJob.experience}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={16} className="mr-2" />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Mô tả công việc
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Yêu cầu công việc
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Quyền lợi
                </h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const isInterestedJob = interestedJobs.some(job => job.id === selectedJob.id);
                    setApplicationData((prev) => ({
                      ...prev,
                      position: isInterestedJob ? selectedJob.title + " (Danh sách chờ)" : selectedJob.title,
                    }));
                    setShowApplicationForm(true);
                    setSelectedJob(null);
                  }}
                  className="flex-1 btn-primary"
                >
                  <Send className="mr-2" size={20} />
                  Ứng tuyển ngay
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 btn-outline"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-white border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                Ứng tuyển vị trí
              </h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Vị trí ứng tuyển
                  </label>
                  <input
                    type="text"
                    value={applicationData.position}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        position: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Kinh nghiệm làm việc
                </label>
                <textarea
                  value={applicationData.experience}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      experience: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Mô tả ngắn gọn về kinh nghiệm làm việc của bạn..."
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Thư xin việc
                </label>
                <textarea
                  value={applicationData.coverLetter}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      coverLetter: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Viết vài dòng về lý do bạn muốn làm việc tại Joy..."
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  CV/Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                    required
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
                  >
                    <Upload className="mr-2" size={20} />
                    {applicationData.resume
                      ? applicationData.resume.name
                      : 'Chọn file CV (PDF, DOC, DOCX)'}
                  </label>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button type="submit" className="flex-1 btn-primary">
                  <Send className="mr-2" size={20} />
                  Gửi đơn ứng tuyển
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 btn-outline"
                >
                  Hủy
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
