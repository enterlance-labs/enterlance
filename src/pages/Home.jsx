import logo from "../assets/images/enterlancecom.svg";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-full flex-col lg:flex-row">
        <aside className="relative flex w-full flex-col justify-between bg-black px-8 py-12 text-white lg:w-1/2 lg:px-16 lg:py-14">
          <div className="relative mt-12 flex-1 z-[1000]">
            <div className="flex h-full flex-col gap-10 lg:gap-12">
              <img
                alt="Enterlance"
                className="h-10 invert sm:h-12 lg:h-20 w-fit"
                src={logo}
              />
              <p className="max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-4xl">
                We create creative content in the world of design and coding,
                study interesting things, and try to be friendly since 2023.
              </p>
            </div>
          </div>
          <p className="relative z-[1000] mt-16 max-w-md text-sm leading-relaxed text-white/70">
            The website is the official hub for all of the company's
            subprojects, as well as its portfolio Vlas Kolbasko © 2026 г.
          </p>
          <HoleBackground className="absolute inset-0 flex bottom-0" />
        </aside>
        <main className="flex w-full flex-col bg-white px-8 py-12 text-black lg:w-1/2 lg:px-16 lg:py-14">
          <div className="flex h-full flex-col gap-5 text-base leading-relaxed sm:text-2xl sm:mt-12">
            <section>
              <h2 className="font-bold">Domain Whois</h2>
              <div className="font-medium space-y-[-4px]">
                <p>Registered Domain: ENTERLANCE.COM</p>
                <p>Creation Date: 13 September 2023</p>
                <p>Registry Expiry Date: 13 September 2026</p>
                <p>Registry Domain ID: 2813449722_DOMAIN_COM-VRSN</p>
                <p>Registrar WHOIS: Serverwhois.reg.com</p>
                <p>Registrar: REG.RU</p>
                <p>Registrar IANA ID: 1606</p>
              </div>
            </section>
            <section>
              <h2 className="font-bold">Social</h2>
              <div className="font-medium space-y-[-4px]">
                <p>
                  Website: <span className="italic">current</span>
                </p>
                <p>
                  Telegram:{" "}
                  <a className="underline" href="https://t.me/enterlance">
                    https://t.me/enterlance
                  </a>
                </p>
                <p>
                  Contact Us:{" "}
                  <a className="underline" href="https://t.me/vlascut">
                    https://t.me/vlascut
                  </a>
                </p>
              </div>
            </section>
            <section>
              <h2 className="font-bold">Projects</h2>
              <div className="flex flex-col font-medium space-y-[-4px]">
                <a
                  className="underline"
                  target="_blank"
                  href="https://t.me/enterlancevpn"
                >
                  Enterlance VPN
                </a>
                <a
                  className="underline"
                  target="_blank"
                  href="https://paste.enterlance.com"
                >
                  Enterlance Paste
                </a>
                <a
                  className="underline"
                  target="_blank"
                  href="https://github.com/enterlance-labs/etul"
                >
                  Enterlance Telegram User Logger{" "}
                  <span className="italic">(opensource)</span>
                </a>
                <a
                  className="underline"
                  target="_blank"
                  href="https://ripper.enterlance.com"
                >
                  Enterlance Ripper <span className="italic">(outdated)</span>
                </a>
                <a
                  className="underline"
                  target="_blank"
                  href="https://kolbasko.com"
                >
                  Simon Kolbasko - Tennis Coach Website
                </a>
                <span>
                  Enterlance Stormtrooper{" "}
                  <span className="italic">(outdated)</span>
                </span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
