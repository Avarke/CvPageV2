import { BackgroundCarousel } from './components/BackgroundCarousel'
import { useState } from 'react'
import { SidebarDrawer } from './components/SidebarDrawer'
import profilePicture from './assets/profile/unnamed.jpg'
import { Button} from './components/Button'


type DrawerSection = 'about' | 'skills' | 'contact' | null

const backgroundImages = Object.values(
  import.meta.glob('./assets/background/*', {
    eager: true,
    import: 'default',
  }),
) as string[]

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'C#', '.NET', 'SQL', 'Python', 'Java']

function App() {

  const [activeSection, setActiveSection] =
    useState<DrawerSection>(null)

  function toggleSection(section: Exclude<DrawerSection, null>) {
    setActiveSection((current) =>
      current === section ? null : section,
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundCarousel images={backgroundImages} />

      <div className="fixed inset-y-0 right-0 z-50 w-[min(90vw,24rem)] sm:w-[clamp(24rem,32vw,32rem)]">

        <SidebarDrawer activeSection={activeSection}>
          {activeSection === 'about' && (
            <div>
              <h2 className="text-2xl">About</h2>
              <p>About section content.</p>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h2 className="text-2xl">Skills</h2>
              <p>Skills section content.</p>
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 className="text-2xl">Contact</h2>
              <p>Contact section content.</p>
            </div>
          )}
        </SidebarDrawer>

        <aside className="h-full overflow-y-auto bg-stone-200/95 p-5 text-zinc-500 shadow-2xl backdrop-blur-md sm:p-7">
          <div className="grid flex-1 gap-4">
            {/* Foto, name ir contact section */}
            <section className="group relative aspect-square overflow-hidden bg-zinc-900 text-white shadow-xl">
              <img
                src={profilePicture}
                alt="Portrait of Arijus V."
                className="h-full w-full object-cover scale-115 object-[center_25%] transition-transform duration-700 group-hover:scale-120"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h1 className="origin-bottom mb-2 scale-y-[1.30] text-3xl leading-none font-mono font-semibold tracking-normal sm:text-4xl">
                  Arijus Vaškiavičius
                </h1>
                <p className="origin-top scale-y-[1.30] text-sm uppercases font-medium tracking-[0.3em] text-stone-300">
                  Junior Developer
                </p>
                
              </div>
            </section>

            <section className="flex min-h-0 flex-col justify-center border border-zinc-300 bg-white/75 p-6 shadow-lg">
              <p className="mb-3 text-xl origin-top scale-y-[1.4] uppercase font-semibold font-mono tracking-[0.1em] text-red-800">
                About
              </p>
              <p className="text-sm leading-normal  text-zinc-950">
                I am a junior developer from KTU, alumni of SKILLed FinTech program. Actively seeking opportunities to improve my skills and contribute to useful projects.
              </p>
              <div className="mt-4 flex gap-2">
                <Button variant="default" size="sm" onClick={() => toggleSection('about')}>
                  Download CV (ENG)
                </Button>
                <Button variant="default" size="sm" onClick={() => toggleSection('about')}>
                  Download CV (LT)
                </Button>
              </div>
            </section>

            <section className="flex min-h-0 flex-col justify-center border border-zinc-300 bg-white/75 p-6 shadow-lg">
              <p className="mb-5 text-xl origin-top scale-y-[1.4] uppercase font-semibold font-mono tracking-[0.1em] text-red-800">
                Contact
              </p>
              <address className="space-y-4 text-sm not-italic">
                <ContactItem label="Phone" href="tel:+37060000000">
                  +370 600 00000
                </ContactItem>
                <ContactItem label="Email" href="mailto:arijus.vask@gmail.com">
                  arijus.vask@gmail.com
                </ContactItem>
                <ContactItem label="Location">Vilnius, Lithuania</ContactItem>
              </address>
            </section>


            <section className="flex min-h-0 flex-col justify-center border border-zinc-300 bg-white/75 p-6 shadow-lg">
              <p className="mb-5 text-xl origin-top scale-y-[1.4] uppercase font-semibold font-mono tracking-[0.1em] text-red-800">
                Technical Skills
              </p>

              <div className="flex flex-wrap gap-2 text-sm">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className=" bg-red-800/10 px-3 py-1 text-xs font-medium text-red-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>



            </section>

          </div>

          <nav className="mt-5 flex gap-2 border-t border-zinc-400/50 pt-5" aria-label="CV sections">
            <button className="flex-1 border border-zinc-400 px-2 py-2 text-xs uppercase tracking-wider transition hover:border-red-800 hover:bg-red-800 hover:text-white" onClick={() => toggleSection('about')}>
              About
            </button>

            <button className="flex-1 border border-zinc-400 px-2 py-2 text-xs uppercase tracking-wider transition hover:border-red-800 hover:bg-red-800 hover:text-white" onClick={() => toggleSection('skills')}>
              Skills
            </button>

            <button className="flex-1 border border-zinc-400 px-2 py-2 text-xs uppercase tracking-wider transition hover:border-red-800 hover:bg-red-800 hover:text-white" onClick={() => toggleSection('contact')}>
              Contact
            </button>
          </nav>
        </aside>
      </div>
    </main>
  )
}

type ContactItemProps = {
  label: string
  href?: string
  children: string
}

function ContactItem({ label, href, children }: ContactItemProps) {
  const value = href ? (
    <a className="break-all transition-colors hover:text-red-800" href={href}>
      {children}
    </a>
  ) : (
    <span>{children}</span>
  )

  return (
    <div
      className="
    relative grid grid-cols-[4.5rem_1fr] items-baseline gap-3
    border-b border-zinc-300 pb-3
    after:pointer-events-none after:absolute after:bottom-[-1px]
    after:left-1/2 after:h-px after:w-3/4 after:-translate-x-1/2
    after:bg-linear-to-r after:from-transparent after:via-white/90
    after:to-transparent after:content-['']
    last:border-0 last:pb-0 last:after:hidden
  "
    >
      <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-zinc-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

export default App
