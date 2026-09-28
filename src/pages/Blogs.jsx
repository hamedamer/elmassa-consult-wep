import React from 'react';
import { Link } from 'react-router-dom';

export const blogsData = [
  {
    id: 1,
    title: "Scan to BIM vs Traditional Site Surveys: Which Suits Your Project Best?",
    category: "Uncategorized",
    author: "admin",
    date: "8 Sep, 2026",
    readTime: "6 Min Read",
    image: `${import.meta.env.BASE_URL}images/Surveys-.jpg`,
    excerpt: "The AEC industry is rapidly shifting towards data-driven project delivery. Whether it is renovation, retrofit, or adaptive reuse, high-quality existing building documentation is essential.",
    isFeatured: true
  },
  {
    id: 2,
    title: "How BIM Models Bridge the Gap Between Architects and Surveyors?",
    category: "Scan to BIM Services",
    author: "Dolly Bulchandani",
    date: "7 Aug, 2026",
    readTime: "7 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "Modern construction projects demands precision, speed and seamless collaboration. However, one of the biggest challenges during design is the gap between surveyors and architects."
  },
  {
    id: 3,
    title: "Point Cloud Challenges and Solutions in Scan to BIM Projects",
    category: "Point Cloud Modeling Services",
    author: "Dolly Bulchandani",
    date: "27 Jul, 2026",
    readTime: "6 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "3D Laser scanning has radically changed existing conditions modeling. Discover how to handle large point cloud datasets efficiently."
  },
  {
    id: 4,
    title: "How Scan to CAD Saves Time During Design Development?",
    category: "Scan to CAD Services",
    author: "Dolly Bulchandani",
    date: "18 Jul, 2026",
    readTime: "5 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "CAD files remain essential for construction workflows. Learn how automated point cloud extraction speeds up draft delivery."
  }
];

export default function Blogs() {
  const featuredPost = blogsData.find((b) => b.isFeatured) || blogsData[0];
  const regularPosts = blogsData.filter((b) => b.id !== featuredPost.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-brandNavy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Engineering <span className="text-brandRed">Insights</span> & Articles
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Technical perspectives, industry trends, and practical guides on Scan to BIM, GIS, and 3D spatial modeling.
            </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to={`/blogs/${featuredPost.id}`}
          className="group grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12 hover:shadow-md transition"
        >
          <div className="h-64 md:h-auto overflow-hidden bg-neutral-900">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit mb-4">
              • {featuredPost.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-brandRed transition mb-4 leading-snug">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <div className="w-8 h-8 rounded-full bg-brandNavy text-white font-bold flex items-center justify-center">
                {featuredPost.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <span className="block font-semibold text-gray-700">{featuredPost.author}</span>
                <span>{featuredPost.date} • {featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blogs/${post.id}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <div className="h-48 overflow-hidden bg-neutral-900">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-brandRed bg-red-50 px-2.5 py-1 rounded-full mb-3">
                    • {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brandRed transition mb-3 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center text-[10px]">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-medium text-gray-700">{post.author}</span>
                    <span className="text-[11px]">{post.date} • {post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}