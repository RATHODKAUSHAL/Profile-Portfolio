import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import banner from "../../Assets/fleetconnekt/fleetconnekt-banner.png";
import screenOne from "../../Assets/fleetconnekt/fleetconnet-1.jpeg";
import screenTwo from "../../Assets/fleetconnekt/fleetconnet-2.jpeg";
import screenThree from "../../Assets/fleetconnekt/fleetconnet-3.jpeg";
import screenFour from "../../Assets/fleetconnekt/fleetconnet-4.jpeg";
import screenFive from "../../Assets/fleetconnekt/fleetconnet-5.jpeg";
import screenSix from "../../Assets/fleetconnekt/fleetconnet-6.jpeg";

export const metadata: Metadata = {
  title: "FleetConnekt",
  description:
    "FleetConnekt is an Indian highway logistics platform for verified transporters and digital lorry receipt workflows.",
  alternates: { canonical: "/fleetconnekt" },
  openGraph: {
    title: "FleetConnekt | Kaushal Rathod",
    description:
      "A mobile-first logistics platform connecting verified transport agencies, documentation workflows, and route intelligence.",
    url: absoluteUrl("/fleetconnekt"),
    images: [{ url: banner.src, width: banner.width, height: banner.height, alt: "FleetConnekt mobile application" }],
  },
};

const appScreens = [screenOne, screenTwo, screenThree, screenFour, screenFive, screenSix];

const services = [
  {
    title: "Transporter Directory",
    body: "A searchable database of trucking and logistics companies across India. Users can filter by state, city, or company name, then view service types, cities served, and direct contact options. The platform highlights 1,000+ verified transporters across 250+ cities.",
  },
  {
    title: "Digital Lorry Receipt Generation",
    body: "FleetConnekt's flagship workflow turns shipment details into a standardized, A4 print-ready digital LR with QR code and signatures. The document records key consignor, consignee, vehicle, route, goods, freight, and issue-date details.",
  },
  {
    title: "Connected Operations",
    body: "Companion modules support fleet management, invoice management, proof of delivery uploads, and driver information—bringing trucks, loads, routes, receipts, and trip history into a clearer operational workflow.",
  },
];

export default function FleetConnektPage() {
  return (
    <div className="soft-grid-bg">
      <section className="pt-24 lg:pt-32">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="section-label bg-[#ffeb3b]">Mobile application</div>
            <h1 className="display-font mt-4 text-[clamp(2.4rem,8vw,5.3rem)] leading-[0.9]">
              FleetConnekt
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/75 sm:text-lg">
              FleetConnekt connects verified transport agencies, modern document workflows, and route intelligence in one platform built for the realities of Indian highway logistics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="soft-tag">Indian logistics</span>
              <span className="soft-tag">Mobile app</span>
              <span className="soft-tag">Digital LR</span>
            </div>
            <Link href="#about" className="soft-btn soft-btn-dark mt-7">
              Explore the platform
            </Link>
          </div>
          <div className="soft-card soft-shadow overflow-hidden bg-[#ffeb3b] p-2 sm:p-3">
            <Image
              src={banner}
              alt="FleetConnekt mobile application banner"
              className="w-full rounded-[15px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="screens-title">
        <div className="mx-auto mb-7 w-full max-w-6xl px-4 sm:px-6">
          <div className="section-label">App screens</div>
          <h2 id="screens-title" className="display-font mt-3 text-[clamp(1.8rem,5vw,3.25rem)] leading-none">
            Built for work on the move.
          </h2>
        </div>
        <div className="fleet-marquee" aria-label="FleetConnekt mobile application screens">
          <div className="fleet-marquee-track">
            {[...appScreens, ...appScreens].map((screen, index) => (
              <div className="fleet-screen soft-card soft-shadow-sm" key={index}>
                <Image
                  src={screen}
                  alt={`FleetConnekt app screen ${(index % appScreens.length) + 1}`}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 190px, 240px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="pb-16 lg:pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <header className="max-w-3xl">
            <div className="section-label">What FleetConnekt is</div>
            <h2 className="display-font mt-3 text-[clamp(1.8rem,5vw,3.25rem)] leading-none">
              A practical platform for road freight.
            </h2>
            <p className="mt-4 text-base leading-7 text-black/75 sm:text-lg">
              An Indian logistics platform focused on road and highway freight, positioned as a verified transporter directory and digital documentation tool for the trucking industry.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="soft-card soft-shadow flex flex-col gap-4 p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black bg-[#ffeb3b] font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-6 text-black/75">{service.body}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="soft-section bg-[#dbe7ff] p-5 sm:p-6">
              <h2 className="display-font text-2xl">Who it&apos;s for</h2>
              <p className="mt-3 leading-7 text-black/75">
                Transporters and fleet owners, dispatchers, manufacturers and traders, and third-party logistics teams that need to find dependable carriers or streamline freight paperwork.
              </p>
            </section>
            <section className="soft-section bg-[#fff3ad] p-5 sm:p-6">
              <h2 className="display-font text-2xl">Access and business model</h2>
              <p className="mt-3 leading-7 text-black/75">
                Directory search is free, while LR generation is presented through a quote-led flow. Transporters can register and list themselves, with enterprise options for API integration, custom LR terms, and bulk industrial suppliers.
              </p>
            </section>
          </div>

          <aside className="soft-section bg-white p-5 sm:p-6">
            <h2 className="display-font text-2xl">Notable details</h2>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-black/75">
              <li>Based in Ahmedabad, Gujarat.</li>
              <li>Designed as a directory and facilitator; users should independently verify listing details and credentials before transacting.</li>
              <li>The site identifies the platform as new, with “Since 2026” and a July 2026 site stamp.</li>
              <li>Its on-page claims, including 50,000+ LRs generated and 99.2% verification accuracy, are presented as platform figures and have not been independently verified.</li>
              <li>The platform presents a modern, document-first approach to Indian highway logistics.</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
