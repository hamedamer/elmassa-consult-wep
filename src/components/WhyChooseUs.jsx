import { whyChooseUs } from '../data/whyChooseUs.js'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brandRed/10 text-brandRed font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy mb-4">
            Why Choose Our <span className="text-brandRed">Scan to BIM</span> Services?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We bridge the gap between physical structures and digital precision, delivering high-accuracy BIM models tailored to engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${
                  item.hover === 'red' ? 'from-brandRed/20' : 'from-brandNavy/20'
                } to-transparent rounded-bl-full -mr-2 -mt-2 transition duration-300 group-hover:scale-125`}
              ></div>

              <div
                className={`w-14 h-14 rounded-2xl bg-brandNavy/5 text-brandNavy flex items-center justify-center text-2xl mb-6 transition-colors duration-300 shadow-sm relative z-10 ${
                  item.hover === 'red' ? 'group-hover:bg-brandRed' : 'group-hover:bg-brandNavy'
                } group-hover:text-white`}
              >
                <i className={`fa-solid ${item.icon}`}></i>
              </div>

              <h3 className="text-xl font-bold text-brandNavy mb-3 group-hover:text-brandRed transition-colors relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
