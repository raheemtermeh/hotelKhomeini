
import React from 'react';
import { ArrowLeftIcon } from '../components/Icons';

const blogPosts = [
  {
    id: 1,
    title: "۱۰ جاذبه گردشگری برتر تهران که نباید از دست بدهید",
    author: "تیم محتوا",
    date: "۱۴۰۳/۰۵/۱۰",
    excerpt: "تهران، پایتخت شلوغ و پرهیاهوی ایران، گنجینه‌ای از تاریخ، فرهنگ و هنر است. در این مقاله، شما را با ۱۰ مکان دیدنی که...",
    imgUrl: "https://picsum.photos/seed/blog1/400/300",
  },
  {
    id: 2,
    title: "راهنمای شکم‌گردی: بهترین رستوران‌های سنتی نزدیک هتل",
    author: "علی محمدی",
    date: "۱۴۰۳/۰۵/۰۸",
    excerpt: "اگر به دنبال طعم اصیل غذاهای ایرانی هستید، این راهنما برای شماست. ما بهترین رستوران‌های سنتی اطراف هتل رویایی را...",
    imgUrl: "https://picsum.photos/seed/blog2/400/300",
  },
  {
    id: 3,
    title: "نکاتی برای یک اقامت آرامش‌بخش در سفر کاری",
    author: "سارا رضایی",
    date: "۱۴۰۳/۰۵/۰۵",
    excerpt: "سفرهای کاری می‌توانند خسته‌کننده باشند. با رعایت چند نکته ساده، می‌توانید اقامت خود را به تجربه‌ای آرام و لذت‌بخش...",
    imgUrl: "https://picsum.photos/seed/blog3/400/300",
  },
];

const BlogCard = ({ title, author, date, excerpt, imgUrl }: typeof blogPosts[0]) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
    <div className="overflow-hidden">
        <img src={imgUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{author}</span>
        <span className="mx-2">|</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-[#0A2342] mb-3 h-14">{title}</h3>
      <p className="text-gray-600 mb-4 h-20 overflow-hidden">{excerpt}</p>
      <a href="#" className="font-semibold text-[#C6A577] hover:text-[#b99a6f] flex items-center gap-2">
        بیشتر بخوانید
        <ArrowLeftIcon className="h-4 w-4 transform -rotate-180 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">وبلاگ و راهنمای سفر</h1>
          <p className="mt-4 text-lg text-gray-600">با ما، شهر را بهتر بشناسید و از سفر خود بیشتر لذت ببرید.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <BlogCard key={post.id} {...post} />)}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
