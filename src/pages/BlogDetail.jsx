import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const blogsData = [
  {
    id: 1,
    title: "Scan to BIM vs Traditional Site Surveys: Which Suits Your Project Best?",
    category: "Uncategorized",
    author: "admin",
    date: "8 Sep, 2026",
    readTime: "6 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "The AEC industry is rapidly shifting towards data-driven project delivery. Whether it is renovation, retrofit, or adaptive reuse, high-quality existing building documentation is essential.",
    content: `
      Traditional land surveying methods have served the construction industry well for decades. However, as projects grow in architectural complexity and schedules tighten, 3D Laser Scanning (Scan to BIM) has become the gold standard.

      Key Advantages of Scan to BIM:
      1. High Accuracy: Captures millions of spatial data points (Point Cloud) with millimeter-level precision.
      2. Time Saving: Eliminates repeated field visits by capturing the entire site in a single scan session.
      3. Clash Detection: Integrates directly with Revit to identify spatial conflicts before site construction begins.

      When should you choose Scan to BIM?
      If your project involves complex heritage structures, MEP retrofits, or industrial facility expansions, Scan to BIM provides the reliability you need to avoid costly rework.
    `
  },
  {
    id: 2,
    title: "How BIM Models Bridge the Gap Between Architects and Surveyors?",
    category: "Scan to BIM Services",
    author: "Dolly Bulchandani",
    date: "7 Aug, 2026",
    readTime: "7 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "Modern construction projects demands precision, speed and seamless collaboration. However, one of the biggest challenges during design is the gap between surveyors and architects.",
    content: `
      Modern construction projects demand precision, speed, and seamless collaboration. However, one of the biggest challenges during design is the gap between surveyors and architects.

      1. Site Reality Capture
      The collaboration begins with capturing accurate site conditions using technologies such as:
      - Terrestrial laser scanners
      - Mobile laser scanning
      - UAV photogrammetry
      - Total stations

      Millions of measurements are collected to generate a highly detailed point cloud representing the existing environment.

      2. Creating the Digital Foundation
      The captured point cloud is processed and converted into usable design information. Engineers use Scan to CAD or BIM services to generate accurate 2D floor plans and 3D Revit models.

      3. Real-Time Coordination
      One of BIM's greatest strengths is enabling multidisciplinary coordination. Architects, structural engineers, and MEP consultants refer to the same model rather than maintaining separate drawing sets.
    `
  },
  {
    id: 3,
    title: "Point Cloud Challenges and Solutions in Scan to BIM Projects",
    category: "Point Cloud Modeling Services",
    author: "Dolly Bulchandani",
    date: "27 Jul, 2026",
    readTime: "6 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "3D Laser scanning has radically changed existing conditions modeling. Discover how to handle large point cloud datasets efficiently.",
    content: `
      3D Laser scanning has radically changed existing conditions modeling. Industrial facilities are among the most complex environments to digitize.

      Managing high-density point cloud files requires proper indexing, noise filtering, and georeferencing before importing datasets into BIM authoring software like Autodesk Revit.
    `
  },
  {
    id: 4,
    title: "How Scan to CAD Saves Time During Design Development?",
    category: "Scan to CAD Services",
    author: "Dolly Bulchandani",
    date: "18 Jul, 2026",
    readTime: "5 Min Read",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    excerpt: "CAD files remain essential for construction workflows. Learn how automated point cloud extraction speeds up draft delivery.",
    content: `
      In today's design-driven AEC workflows, CAD files are as vital as 3D models. Extracting clean line work and precise floor plans from point clouds reduces manual drafting errors and keeps project schedules on track.
    `
  }
];

export default function BlogDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = blogsData.find((b) => b.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">The article you are looking for does not exist.</p>
        <Link to="/blogs" className="bg-brandRed text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const similarBlogs = blogsData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-brandNavy text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/blogs" className="text-brandRed text-xs font-bold uppercase mb-4 inline-block hover:underline">
            ← Back to Blogs
          </Link>
          <span className="block text-xs font-semibold text-gray-300 mb-2">
            • {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span className="font-semibold text-white">{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 mb-12">
          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden mb-8 bg-neutral-900 border border-gray-100">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          <article className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
            {post.content}
          </article>
        </div>

        {similarBlogs.length > 0 && (
          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Similar Blogs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similarBlogs.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/blogs/${item.id}`} 
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="h-32 bg-neutral-900 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-bold text-brandRed block mb-1">• {item.category}</span>
                      <h4 className="text-xs font-bold text-gray-800 line-clamp-2 leading-snug">{item.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}