import React from 'react';

export default function Contact() {
  return (
    <>
      {/* 1. HERO SECTION - نمط النقاط فقط بدون أي خطوط أو شبكات */}
      <section className="relative bg-brandNavy text-white py-20 overflow-hidden">
        {/* خلفية النقاط الناعمة فقط */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Contact <span className="text-brandRed">Us</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or need a quote for Scan to BIM & Spatial Services? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="py-16 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* تخطيط الصفحة: الشقين منفصلين وبينهما مسافة gap-8 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* الشق الأيسر: كارت أسود مستقل مريح للعين (bg-neutral-900) */}
            <div className="lg:col-span-5 bg-neutral-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-neutral-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                  Let's Build an Awesome Project Together
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                  We're committed to helping AEC firms streamline workflows, reduce costs, and improve project outcomes. Contact us today and discover how our BIM, CAD, and 3D services can add value to your business.
                </p>

                {/* قائمة الاتصال والعناوين */}
                <div className="space-y-6 text-sm">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brandRed shrink-0 border border-white/10">
                      <i className="fa-solid fa-envelope text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wider">Email</h4>
                      <a href="mailto:info@elmassa.com" className="text-white hover:text-brandRed transition font-medium">
                        info@elmassa.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brandRed shrink-0 border border-white/10">
                      <i className="fa-solid fa-phone text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wider">Call Us</h4>
                      <p className="text-gray-300 text-xs leading-snug">
                        EG: +20 100 000 0000<br />
                        KSA: +966 50 000 0000
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brandRed shrink-0 border border-white/10">
                      <i className="fa-solid fa-location-dot text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wider">Address</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        New Capital Office, Cairo, Egypt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* شارة أسفل الكارت */}
              <div className="relative z-10 mt-10 pt-6 border-t border-neutral-800 text-xs text-gray-400 font-mono flex justify-between items-center">
                <span>EL MASSA CONSULT</span>
                <span className="text-brandRed">★ 24/7 SUPPORT</span>
              </div>
            </div>

            {/* الشق الأيمن: الفورم المكتمل */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                
                {/* Enter Your Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50" 
                    required 
                  />
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50" 
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50" 
                    />
                  </div>
                </div>

                {/* Country Selection - تتضمن ألمانيا ودول أخرى */}
                <div>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50 text-gray-600">
                    <option value="">Country</option>
                    <option value="DE">Germany</option>
                    <option value="EG">Egypt</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="NL">Netherlands</option>
                    <option value="Other">Other Country</option>
                  </select>
                </div>

                {/* Project Timeline & Service Selection - نفس خيارات الصور بالضبط */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Timeline */}
                  <div>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50 text-gray-600">
                      <option value="">Project Timeline</option>
                      <option value="urgent">Urgent</option>
                      <option value="1week">1 week</option>
                      <option value="2weeks">2 weeks</option>
                      <option value="3weeks">3 weeks</option>
                      <option value="4weeks">4 weeks</option>
                      <option value="no-timeframe">No timeframe</option>
                    </select>
                  </div>

                  {/* Service Required */}
                  <div>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50 text-gray-600">
                      <option value="">Service</option>
                      <option value="service-required">Service Required</option>
                      <option value="cad-conversion">Cad Conversion</option>
                      <option value="cad-drafting">Cad Drafting</option>
                      <option value="3d-modeling">3D Modeling</option>
                      <option value="cgi-rendering">CGI And Rendering</option>
                      <option value="vr-walkthrough">VR and Walkthrough</option>
                      <option value="creative-design">Creative Design</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <textarea 
                    rows="3" 
                    placeholder="Description" 
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandRed focus:ring-1 focus:ring-brandRed transition bg-gray-50/50"
                  ></textarea>
                </div>

                {/* File Upload Box */}
                <div>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50/50 hover:border-brandRed/50 transition cursor-pointer">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-sky-50 text-brandNavy flex items-center justify-center text-xl mb-1">
                        <i className="fa-solid fa-folder-open text-sky-600"></i>
                      </div>
                      <button type="button" className="px-4 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-semibold text-gray-700 shadow-xs hover:bg-gray-50">
                        Choose File
                      </button>
                      <span className="text-xs text-gray-400">No file chosen</span>
                      <p className="text-[10px] text-gray-400 mt-1">PDF, CAD, Point Cloud files or Drive Link in description.</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brandRed hover:bg-red-600 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg transform active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>
                </div>

              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}