const services = [
  {
    title: "Full-stack web applications",
    description:
      "Product interfaces, server-rendered Next.js pages, Node.js APIs, authentication flows, and relational data models built as one maintainable system.",
  },
  {
    title: "Mobile application development",
    description:
      "Cross-platform React Native and Expo applications with Android delivery, device permissions, push notifications, and API integrations.",
  },
  {
    title: "Performance and discoverability",
    description:
      "Accessible interfaces, Core Web Vitals-conscious implementation, semantic content, metadata, and structured data for search-ready launches.",
  },
];

export const homeFaqs = [
  {
    question: "What does Kaushal Rathod build?",
    answer:
      "Kaushal builds full-stack web applications, mobile apps, logistics platforms, dashboards, learning systems, and API-driven product experiences.",
  },
  {
    question: "Which technologies does Kaushal work with?",
    answer:
      "His core stack includes Next.js, React, TypeScript, Node.js, React Native, Expo, PostgreSQL, MySQL, Laravel, and REST APIs.",
  },
  {
    question: "Where is Kaushal Rathod based?",
    answer:
      "Kaushal is based in Ahmedabad, Gujarat, India, and is available for remote collaboration with teams worldwide.",
  },
];

export default function HomeExpertise() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="expertise-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <header className="max-w-3xl">
          <div className="section-label bg-white">Services &amp; expertise</div>
          <h2
            id="expertise-title"
            className="display-font mt-3 text-[clamp(2rem,8vw,3.5rem)] leading-[0.95]"
          >
            From product idea to production-ready software.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/75 sm:text-lg">
            I help teams turn operational problems into fast, accessible web
            and mobile products, with clear architecture and dependable delivery.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="soft-card soft-shadow-sm col-span-12 bg-white p-5 sm:p-6 lg:col-span-4"
            >
              <span className="soft-tag bg-[#ffeb3b]">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/75">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <section className="soft-section bg-white p-5 sm:p-6" aria-labelledby="home-faq-title">
          <h2 id="home-faq-title" className="display-font text-2xl sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {homeFaqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-black/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
