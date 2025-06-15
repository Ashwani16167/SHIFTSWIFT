export default function AboutPage() {
  const sections = [
    {
      icon: '🏠',
      title: 'About ShiftSwift',
      content: 'ShiftSwift is your trusted moving partner in Varanasi, known for delivering hassle-free and reliable relocation services with a personal touch. Since our inception in 2020, we\'ve helped hundreds of families and businesses make smooth transitions into their new spaces — with confidence, care, and speed.'
    },
    {
      icon: '🚛',
      title: 'Our Story',
      content: 'ShiftSwift was born out of a simple idea — to make moving stress-free for everyone in Varanasi. We saw the gap in organized, tech-enabled relocation services and set out to bridge it. What started as a local initiative has now grown into a trusted name backed by dedication, professionalism, and transparency.\n\nWe blend traditional values like trust, care, and commitment with modern technology to simplify every aspect of the moving process — from real-time estimates and professional packaging to safe transport and timely delivery.'
    },
    {
      icon: '👨‍🔧',
      title: 'Our Team',
      content: 'Behind ShiftSwift is a team of trained movers, coordinators, and logistics professionals who take pride in what they do. Every team member is handpicked, background-verified, and trained to handle your belongings like their own — because your trust means everything to us.'
    }
  ];

  const highlights = [
    'Transparent pricing with instant estimates',
    'Fast, safe, and insured deliveries',
    'Friendly customer support',
    'Custom solutions for homes, offices, and more',
    'Locally rooted, Varanasi-based operations'
  ];

  return (
    <main className="flex-1">
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent -z-10" />
        <div className="container-fluid py-16">
          {sections.map((section) => (
            <div key={section.title} className="max-w-4xl mx-auto mb-24 group hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-start gap-6 mb-8">
                <span className="text-5xl group-hover:scale-110 transition-transform">{section.icon}</span>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg prose-primary">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl animate-pulse">💡</span>
              <h2 className="text-3xl font-bold text-gray-900">What Sets Us Apart</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <li key={item} 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
