import { BackgroundCarousel } from './components/BackgroundCarousel'
import { useState, type ReactNode } from 'react'
import { SidebarDrawer } from './components/SidebarDrawer'
import profilePicture from './assets/profile/unnamed.jpg'
import { Button } from './components/Button'
import { CvSection } from './components/CvSection'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import cvEngPdf from './assets/downloads/CV - Arijus Vaškiavičius_ENG.pdf'
import { HoverTooltip } from './components/HoverTooltip'
import { ContactItem } from './components/ContactItem'

type DrawerSection = 'about' | 'skills' | 'contact' | null

const backgroundImages = Object.values(
  import.meta.glob('./assets/background/*', {
    eager: true,
    import: 'default',
  }),
) as string[]

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'C#', '.NET', 'SQL', 'Python', 'Java']
const linkedInUrl = 'https://www.linkedin.com/in/arijus-vaskiavicius/'
const githubUrl = 'https://github.com/Avarke'




function App() {

  const [copiedContact, setCopiedContact] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const contactItemClassName =
    '-mx-3 flex w-fit items-center gap-3 rounded-full px-4 py-1 text-left text-sm text-slate-200'
  const contactButtonClassName =
    `${contactItemClassName} cursor-pointer outline outline-1 outline-transparent transition-[background-color,outline-color] duration-200 ease-out hover:bg-slate-900/40 hover:outline-slate-700`  // Handle copying contact information to clipboard
  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedContact(value)

      window.setTimeout(() => {
        setCopiedContact(null)
      }, 2000)
    } catch {
      setCopiedContact(value)

      window.setTimeout(() => {
        setCopiedContact(null)
      }, 2000)
    }
  }



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

      <div className="fixed inset-y-0 right-0 z-50 w-[min(90vw,24rem)] sm:w-[max(33.333vw,30rem)]">

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
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">

            {/* Foto, name ir contact section */}
            <section className="group relative overflow-hidden [container-type:inline-size] text-white/95">
              <img
                src={profilePicture}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-out scale-[1.1] group-hover:scale-[1.15]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-[clamp(1.75rem,6cqw,3rem)]">
                <h1 className="mb-1 origin-bottom scale-y-[1.50] font-ep-kaisho text-3xl leading-none tracking-normal font-semibold sm:text-[clamp(3rem,10cqw,5rem)]">
                  Arijus <br />
                  Vaškiavičius
                </h1>

                <p className="origin-top scale-y-[1.40] font-yu-gothic text-sm font-bold tracking-normal text-stone-300 uppercase sm:text-[clamp(0.875rem,3cqw,1.25rem)]">
                  Junior Developer
                </p>
              </div>
            </section>

            {/* About section */}
            <CvSection
              kanji="約"
              title="About"
            >
              <p className="text-sm leading-normal font-yu-gothic text-zinc-950">
                I am a junior developer from KTU, alumni of SKILLed FinTech program. Passionate about creating innovative solutions and breaking conventions. Actively seeking opportunities to sharpen my skills and contribute to useful projects. Hekki. <span className="mt-2 block text-right">
                  - With love, from the past
                </span>
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="default" size="sm">
                  <a href={cvEngPdf} download="Arijus_Vaskiavicius_CV_ENG.pdf">
                    Download CV (ENG)
                  </a>
                </Button>
                {/* TODO: ideti lietuviska CV */}
                <Button variant="default" size="sm">
                  <a href={cvEngPdf} download="Arijus_Vaskiavicius_CV_ENG.pdf">
                    Download CV (LT)
                  </a>
                </Button>
                {/* Linkedin ir GitHub linkai */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredSocial('Linkedin')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <HoverTooltip
                    text="LinkedIn"
                    visible={hoveredSocial === 'Linkedin'}
                  />

                  <Button asChild size="icon" className="h-9 w-9">
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <FiLinkedin strokeWidth={1.2} aria-hidden="true" />
                    </a>
                  </Button>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredSocial('GitHub')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <HoverTooltip
                    text="GitHub"
                    visible={hoveredSocial === 'GitHub'}
                  />

                  <Button asChild size="icon" className="h-9 w-9">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                    >
                      <FiGithub strokeWidth={1.2} aria-hidden="true" />
                    </a>
                  </Button>
                </div>

              </div>
            </CvSection>

            {/* Contact section */}
            <CvSection
              kanji="手蔓"
              title="Contact"
            >
              <address className="space-y-4 text-sm not-italic">
                <ContactItem label="Phone" href="tel:+37060000000" kanji="電話" copyValue='+37069969444' copied={copiedContact === '+37069969444'} onCopy={handleCopy}>
                  +370 699 69444
                </ContactItem>
                <ContactItem label="Email" href="mailto:arijus.vask@gmail.com" kanji="メール" copyValue='arijus.vask@gmail.com' copied={copiedContact === 'arijus.vask@gmail.com'} onCopy={handleCopy}>
                  Arijus.vask@gmail.com
                </ContactItem>
                <ContactItem label="Location" kanji="場">
                  Vilnius, Lithuania
                </ContactItem>
              </address>
            </CvSection>

            {/* Technical Skills section */}
            <CvSection
              kanji="芸域"
              title="Technical Skills"
            >
              <div className="flex flex-wrap gap-2 text-sm">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-red-800/10 px-3 py-1 text-xs font-medium text-red-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CvSection>

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



export default App
