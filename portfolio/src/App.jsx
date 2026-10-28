function App() {
  const shell =
    "mx-auto w-[calc(100%-2.5rem)] max-w-[1180px] lg:w-[calc(100%-6rem)]";
  const eyebrow = "font-mono text-[15px] uppercase tracking-[.03em] text-muted";
  const sectionHeading =
    "flex flex-col gap-3 border-b border-line pb-4 md:flex-row md:items-baseline md:justify-between";
  const projectMeta = "flex justify-between gap-5 pt-4";

  return (
    <main className="overflow-hidden">
      <nav
        className={`${shell} flex h-[75px] items-center justify-between border-b border-line text-base md:h-[92px]`}
        aria-label="Main navigation"
      >
        <a
          className="font-display text-[27px] font-semibold leading-none tracking-[-1px] no-underline"
          href="#top"
        >
          Kripash<span className="text-coral">.</span>
        </a>
        <span className="hidden font-mono text-[15px] font-normal text-[#302f2a] md:block">
          full-stack developer / kathmandu
        </span>
        <div className="flex gap-4 md:gap-8">
          <a
            className="no-underline transition-colors hover:text-coral"
            href="#work"
          >
            Selected work
          </a>
          <a
            className="no-underline transition-colors hover:text-coral"
            href="#about"
          >
            About
          </a>
        </div>
      </nav>

      <section
        className={`${shell} grid items-center gap-14 py-[70px] md:min-h-[600px] md:grid-cols-[1fr_.82fr] md:gap-[70px] md:py-[72px_92px]`}
        id="top"
      >
        <div className="mb-12 md:mb-0">
          <p
            className={`${eyebrow} mb-6 flex items-center gap-2 text-[15px] font-medium text-ink`}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-coral" />
            Full-stack developer based in Kathmandu
          </p>
          <h1 className="mb-8 max-w-[630px] font-display text-[clamp(48px,6vw,82px)] font-medium leading-[.96] tracking-[-3px]">
            I build useful software for the{" "}
            <em className="text-coral">real world.</em>
          </h1>
          <p className="mb-8 max-w-[420px] text-lg leading-[1.65] text-[#5b5952]">
            I&apos;m Kripash Shrestha, a Computer Science graduate and
            full-stack developer working across Python, Django, React, Next.js,
            and data-driven applications.
          </p>
          <a
            className="inline-flex items-center gap-3 border-b border-ink pb-2 text-[15px] font-bold no-underline"
            href="#work"
          >
            See my work <span className="text-lg text-coral">↓</span>
          </a>
        </div>
        <div
          className="relative min-h-[370px] rotate-[3deg] overflow-hidden rounded-[50%_50%_0_0/25%_25%_0_0] bg-blue md:min-h-[430px]"
          aria-label="Abstract illustration of creative work"
          role="img"
        >
          <div className="absolute right-7 top-[50px] h-[230px] w-[230px] rounded-full bg-yellow" />
          <div className="absolute left-[52px] top-[100px] rotate-[-10deg] bg-[#f9f5eb] px-4 pb-6 pt-5 font-display text-[21px] font-medium leading-[1.05] text-ink shadow-[5px_7px_0_rgba(32,32,27,.12)]">
            good
            <br />
            ideas
            <br />
            <i>take time</i>
          </div>
          <div className="absolute bottom-[35px] left-[26%] flex h-[255px] w-[200px] rotate-[7deg] flex-col justify-between bg-coral p-[23px] text-[#f9f5eb] shadow-[7px_9px_0_rgba(32,32,27,.16)]">
            <span className="font-mono text-base">08</span>
            <b className="font-display text-[38px] font-medium leading-[.85] tracking-[-1px]">
              make
              <br />
              it
              <br />
              <i className="text-yellow">matter</i>
            </b>
            <small className="font-mono text-base">selected notes</small>
          </div>
          <div className="absolute -bottom-5 right-[-20px] h-[100px] w-[300px] rotate-[-20deg] rounded-[50%] border-t-2 border-ink" />
          <div className="absolute bottom-6 right-7 font-mono text-base uppercase leading-[1.4]">
            reliable software
            <br />
            made with care <span className="text-lg text-coral">✳</span>
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden bg-coral py-4 font-mono text-base uppercase text-[#f9f5eb]"
        aria-label="Areas of practice"
      >
        <div className="animate-marquee whitespace-nowrap [word-spacing:8px]">
          Python &amp; Django <span className="mx-[22px] text-yellow">✳</span>{" "}
          React &amp; Next.js <span className="mx-[22px] text-yellow">✳</span>{" "}
          REST APIs &amp; databases{" "}
          <span className="mx-[22px] text-yellow">✳</span> Python &amp; Django{" "}
          <span className="mx-[22px] text-yellow">✳</span>
        </div>
      </section>

      <section
        className={`${shell} py-[75px] md:py-[110px] md:pb-[135px]`}
        id="work"
      >
        <div className={`${sectionHeading} mb-9`}>
          <p className={`${eyebrow} m-0 text-ink`}>01 / Selected projects</p>
          <p className={`${eyebrow} m-0 normal-case tracking-normal`}>
            Applications built to solve practical problems.
          </p>
        </div>
        <div className="grid gap-[58px] md:grid-cols-[1.12fr_.88fr] md:gap-x-7 md:gap-y-[75px]">
          <article className="md:row-span-2">
            <div className="flex min-h-[465px] items-end bg-[#a58ac6] p-7 md:min-h-[590px] md:p-10">
              <div className="flex h-[82%] w-full flex-col justify-between bg-[#f8f4fc] p-6 shadow-[16px_16px_0_#805fa8] md:p-7">
                <span className="font-mono text-base text-[#6f5a94]">
                  retail saas
                </span>
                <strong className="font-display text-[clamp(38px,4vw,62px)] font-medium leading-[.94] tracking-[-2px]">
                  Keep every
                  <br />
                  shelf in
                  <br />
                  <i className="text-[#6f5a94]">sync.</i>
                </strong>
                <small className="font-mono text-base text-[#5f5d55]">
                  View the project →
                </small>
              </div>
            </div>
            <div className={projectMeta}>
              <div>
                <h2 className="mb-1 font-display text-[23px] font-medium">
                  Retail SaaS
                </h2>
                <p className="text-lg text-muted">
                  Real-time inventory management for retail teams.
                </p>
              </div>
              <a
                className="inline-flex self-start whitespace-nowrap rounded-md bg-ink px-3 py-2 font-mono text-sm text-paper no-underline transition-colors hover:bg-coral"
                href="https://github.com/KripashStha/Retail-SaaS"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>
          <article>
            <div className="relative min-h-[350px] overflow-hidden bg-[#d47c3d] p-7 text-[#fff7dc]">
              <div className="font-display text-[50px] leading-[.9]">
                OneByte<sup className="font-mono text-base">®</sup>
              </div>
              <div className="absolute -bottom-1 left-[-30%] h-[170px] w-[160%] rotate-[-8deg] rounded-[50%_50%_0_0] bg-[#f8e3a8]" />
              <span className="absolute bottom-6 right-6 z-10 font-mono text-base text-[#5b2f19]">
                table booking / 24—7
              </span>
            </div>
            <div className={projectMeta}>
              <div>
                <h2 className="mb-1 font-display text-[23px] font-medium">
                  OneByte Foods
                </h2>
                <p className="text-lg text-muted">
                  Restaurant table booking for a smoother meal out.
                </p>
              </div>
              <a
                className="inline-flex self-start whitespace-nowrap rounded-md bg-ink px-3 py-2 font-mono text-sm text-paper no-underline transition-colors hover:bg-coral"
                href="https://github.com/KripashStha/OneByteFood"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>
          <article>
            <div className="relative min-h-[350px] overflow-hidden bg-[#1f3735] p-9 text-paper">
              <div className="absolute right-[-25px] top-[-30px] h-[205px] w-[205px] rounded-full bg-[#d8b956]" />
              <strong className="absolute bottom-9 left-9 font-display text-[65px] font-medium leading-[.77] tracking-[-3px]">
                CLARITY
                <br />
                <i className="text-coral">finance</i>
              </strong>
              <small className="absolute bottom-6 right-6 font-mono text-base">
                your money, made clearer
              </small>
            </div>
            <div className={projectMeta}>
              <div>
                <h2 className="mb-1 font-display text-[23px] font-medium">
                  Clarity finance tracker
                </h2>
                <p className="text-lg text-muted">
                  Personal finance tracking with useful context.
                </p>
              </div>
              <a
                className="inline-flex self-start whitespace-nowrap rounded-md bg-ink px-3 py-2 font-mono text-sm text-paper no-underline transition-colors hover:bg-coral"
                href="https://github.com/KripashStha/expense-tracker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        className={`${shell} border-t border-line py-8 pb-20 md:pb-[120px]`}
        id="experience"
      >
        <div className={`${sectionHeading} mb-7`}>
          <p className={`${eyebrow} m-0 text-ink`}>02 / Experience</p>
          <p className={`${eyebrow} m-0 normal-case tracking-normal`}>
            Learning by building with other people.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-[100px]">
          <div>
            <p className="mb-4 font-mono text-[15px] uppercase text-coral">
              GeekTech Solutions
            </p>
            <h2 className="mb-4 max-w-xl font-display text-[clamp(30px,4vw,48px)] font-medium leading-[1.02] tracking-[-1px]">
              Full-Stack Developer &amp; Team Lead
            </h2>
            <p className={`${eyebrow} m-0 normal-case tracking-normal`}>
              Apprenticeship · React, Node.js, PostgreSQL
            </p>
          </div>
          <div className="max-w-[380px] pt-1 text-lg leading-[1.7] text-[#5b5952]">
            <p className="mb-5">
              Contributed across frontend and backend development for a salon
              booking system, while coordinating developers, assigning tasks,
              and supporting collaboration.
            </p>
            <p>
              Built dashboards and validations, tested end-to-end workflows,
              debugged defects, and reviewed and merged pull requests.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${shell} border-t border-line py-8 pb-20 md:pb-[120px]`}
        id="skills"
      >
        <p className={eyebrow}>03 / Toolkit</p>
        <div className="grid gap-8 pt-7 md:grid-cols-3">
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-3 font-display text-[27px] font-medium">Build</h2>
            <p className="text-lg leading-[1.8] text-[#5b5952]">
              Python · JavaScript · Java
              <br />
              Django · Django REST Framework
              <br />
              React.js · Next.js · Node.js
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-3 font-display text-[27px] font-medium">
              Connect
            </h2>
            <p className="text-lg leading-[1.8] text-[#5b5952]">
              REST APIs · JWT authentication
              <br />
              MongoDB · MySQL · PostgreSQL
              <br />
              Firebase · Git · GitHub
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-3 font-display text-[27px] font-medium">
              Work with
            </h2>
            <p className="text-lg leading-[1.8] text-[#5b5952]">
              Tailwind CSS · Shadcn UI
              <br />
              Figma · Jira · Scrum
              <br />
              Agile development
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${shell} border-t border-line py-8 pb-20 md:pb-[125px]`}
        id="about"
      >
        <p className={eyebrow}>04 / A bit about me</p>
        <div className="grid gap-9 md:grid-cols-[1.15fr_.85fr] md:gap-[100px]">
          <h2 className="mt-8 font-display text-[clamp(40px,5vw,64px)] font-medium leading-[1.02] tracking-[-2px] md:mt-[54px]">
            Good software sits somewhere between{" "}
            <em className="text-coral">curiosity</em> and care.
          </h2>
          <div className="max-w-[330px] pt-0 text-lg leading-[1.7] text-[#5b5952] md:pt-[62px]">
            <p className="mb-5">
              I&apos;m interested in reliable, maintainable software: the kind
              that is structured well, tested thoughtfully, and clear enough for
              a team to keep improving.
            </p>
            <p className="mb-5">
              I enjoy structured debugging, documentation, learning new tools,
              and turning a messy problem into a simple experience.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${shell} border-t border-line py-8 pb-20 md:pb-[110px]`}
        id="education"
      >
        <div className={`${sectionHeading} mb-7`}>
          <p className={`${eyebrow} m-0 text-ink`}>05 / Education</p>
          <p className={`${eyebrow} m-0 normal-case tracking-normal`}>
            The foundation underneath the work.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-2 font-display text-[22px] font-medium">
              BSc (Hons) Computer Science
            </h2>
            <p className="font-mono text-[15px] text-muted">
              Herald College Kathmandu · 2025
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-2 font-display text-[22px] font-medium">
              +2 Science
            </h2>
            <p className="font-mono text-[15px] text-muted">
              Uniglobe College · 2020
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h2 className="mb-2 font-display text-[22px] font-medium">SEE</h2>
            <p className="font-mono text-[15px] text-muted">
              Gyankunj Higher Secondary School · 2017
            </p>
          </div>
        </div>
      </section>

      <footer
        className={`${shell} flex min-h-[83px] flex-col justify-center gap-4 border-t border-line py-5 font-mono text-[15px] text-muted md:flex-row md:items-center md:justify-between md:py-0`}
      >
        <span>© Kripash Shrestha.</span>
        <div className="order-first flex gap-6 md:order-none">
          <a
            className="inline-flex whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[15px] text-paper no-underline transition-colors hover:bg-coral"
            href="https://github.com/KripashStha"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <a
          className="hidden no-underline transition-colors hover:text-coral md:block"
          href="#top"
        >
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
