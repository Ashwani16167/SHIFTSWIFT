import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Professional and efficient moving service!",
      author: "Rahul Sharma",
      role: "Homeowner"
    },
    {
      text: "Great care in handling furniture",
      author: "Priya Patel",
      role: "Business Owner"
    },
    {
      text: "Best moving experience ever",
      author: "Amit Kumar",
      role: "Customer"
    }
  ];

  return (
    <section className="section-base bg-gray-50">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">Reviews from satisfied customers</p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="testimonial-card">
              <p className="text-lg text-gray-600">"{item.text}"</p>
              <div className="mt-6">
                <div className="font-semibold">{item.author}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
