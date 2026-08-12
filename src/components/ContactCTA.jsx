import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title text-3xl font-bold text-gray-800 inline-block">Let's Connect</h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Have a project in mind or want to collaborate? Let's talk.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-sm inline-block"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}