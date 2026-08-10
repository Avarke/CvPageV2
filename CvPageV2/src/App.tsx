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
import { DetailCard } from './components/DetailCard'
import { DrawerTitle } from './components/DrawerTitle'
import { DrawerContent } from './components/DrawerContent'
import hobbiesVideo from './assets/videos/Manga_2.mp4'
import davinciTimeline from './assets/misc/davinci_timeline_render.png'
import { ToolLink } from './components/ToolLink'
import hobbiesPic from './assets/hobbies/IMG_3829.jpeg'
import mangaPic from './assets/misc/cb5b4a302ifa1.jpg'
type DrawerSection = 'experience' | 'projects' | 'hobbies' | 'untitled' | null

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

      <div className="fixed inset-0 z-50 w-full sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[max(33.333vw,30rem)] lg:w-[clamp(30rem,33.333vw,42rem)]">
        <SidebarDrawer
          activeSection={activeSection}
          onClose={() => setActiveSection(null)}
        >
          {activeSection === 'experience' && (
            <article>
              <DrawerTitle
                title="Experience"
                media={{type: 'video',src: hobbiesVideo }}
                titleClassName="sm:scale-x-[1.025]"
                
              />


            </article>
          )}

          {activeSection === 'projects' && (
            <article>
              <DrawerTitle
                title="Projects"
                media={{
                  type: 'video',
                  src: hobbiesVideo,
                }}
              />
            </article>

          )}

          {activeSection === 'hobbies' && (
            <article>
              <DrawerTitle
                title="Hobbies"
                media={{
                  type: 'video',
                  src: hobbiesVideo,
                }}
              />
              <DrawerContent title="Video Editing" subtitle="Moving Pictures" kanji="編集" image={davinciTimeline}>
                <p className="font-mono text-[0.95rem] leading-[1.55] text">
                  I like editing and composing videos. I have {''}
                  <strong className="text-stone-100">
                    4+ years worth of
                    experience and know-how
                  </strong>
                  {''} working on personal projects using {''}
                  <ToolLink href="https://www.adobe.com/products/premiere.html">
                    Adobe PremierePro
                  </ToolLink>
                  . I am also currently learning how to edit using {''}
                  <ToolLink href="https://www.blackmagicdesign.com/products/davinciresolve">
                    DaVinci Resolve
                  </ToolLink>
                  . Who knows what the future holds...
                </p>
                {/* <img
                  src={editingImage}
                  alt="Video editing project"
                /> */}
              </DrawerContent>

              <DrawerContent title="Photography" kanji="撮影" subtitle="Not moving pictures">
                <div className="flow-root">
                  <img
                    src={hobbiesPic}
                    alt="Camera"
                    className="
                      float-right
                      ml-5 mb-1 mt-1
                      h-auto
                      w-30 sm:w-30
                      opacity-70
                      object-contain
                      "
                  />
                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    I like to photograph in my free time. Usually it's landscapes, sometimes it's people.
                    In fact, the images you see on the left are actually all original (if you are on desktop version, that is).
                    Working with images led me to gain fundamental knowledge of {''}
                    <ToolLink href="https://www.adobe.com/products/photoshop.html">
                      Adobe Photoshop
                    </ToolLink>
                    {''} and {''}
                    <ToolLink href="https://lightroom.adobe.com/">
                      Adobe Lightroom
                    </ToolLink>
                    .
                  </p>
                </div>
              </DrawerContent>

              <DrawerContent title="Japan" subtitle="How could you tell?" image={mangaPic}>

                <div className="flow-root">

                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    You may have noticed i quite like things from the japanese culture.
                    Specifically manga, anime and history. I am fascinated by the works
                    of {''}
                    <ToolLink href="https://tsutomu-nihei.fandom.com/wiki/Tsutomu_Nihei">
                      Tsutomu Nihei
                    </ToolLink>
                    , {''}
                    <ToolLink href="https://www.youtube.com/watch?v=BJUbLM8coho">
                      Tatsuki Fujimoto
                    </ToolLink>
                    , {''}
                    <ToolLink href="https://en.wikipedia.org/wiki/Shinichir%C5%8D_Watanabe">
                      Shinichiro Watanabe
                    </ToolLink>
                    {''} and {''}
                    <ToolLink href="https://en.wikipedia.org/wiki/Hideaki_Anno">
                      Hideaki Anno
                    </ToolLink>
                    {''} (for god's sake the whole page is Evangelion themed).
                    Favourite manga? {''}
                    <ToolLink href="https://myanimelist.net/manga/149/Blame">
                      Blame
                    </ToolLink>
                    . Favourite anime? {''}
                    <ToolLink href="https://myanimelist.net/anime/205/Samurai_Champloo">
                      Samurai Champloo
                    </ToolLink>
                    .
                  </p>
                </div>
                {/* <img
                  src={editingImage}
                  alt="Video editing project"
                /> */}
              </DrawerContent>


            </article>
          )}

          {activeSection === 'untitled' && (
            <DrawerTitle
                title="Education"
                media={{
                  type: 'video',
                  src: hobbiesVideo,
                }}
              />
          )}
        </SidebarDrawer>

        <aside className="h-full overflow-y-auto bg-stone-200 p-5 text-zinc-500 shadow-2xl sm:bg-stone-200/95 sm:p-7 sm:backdrop-blur-md">
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">

            {/* Foto, name ir contact section */}
            <section className="group relative overflow-hidden @container text-white/95">
              <img
                src={profilePicture}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-out scale-[1.1] group-hover:scale-[1.15]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />


              <div className="pointer-events-none absolute inset-0 z-10">
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    top-[clamp(1.5rem,5cqw,3rem)]
                    right-[clamp(1.5rem,5cqw,3rem)]
                    select-none font-matisse
                    text-[clamp(3rem,10cqw,14rem)]
                    leading-none text-white
                    tracking-normal

                    origin-top
                    scale-y-[1.5]
                  "
                >
                  猫
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-[clamp(1.75rem,6cqw,3rem)]">
                  <h1 className="mb-1 origin-bottom scale-y-[1.50] font-ep-kaisho text-5xl leading-none tracking-normal font-semibold sm:text-[clamp(3rem,10cqw,5rem)]">
                    Arijus <br />
                    Vaškiavičius
                  </h1>

                  <p className="origin-top scale-y-[1.40] font-yu-gothic text-sm font-bold tracking-normal text-stone-300 uppercase sm:text-[clamp(1rem,3cqw,1.25rem)] text-[clamp(1rem,4cqw,1.25rem)]">
                    Junior Developer
                  </p>
                </div>
              </div>
            </section>

            {/* About section */}
            <CvSection
              kanji="約"
              title="About"
            >
              <p className="leading-normal font-yu-gothic text-zinc-950">
                I am a junior developer from KTU, alumni of SKILLed FinTech program. Passionate about creating innovative solutions and breaking conventions. Actively seeking opportunities to sharpen my skills and contribute to useful projects. <span className="mt-2 block text-right">
                  - Sunrise, parabellum
                </span>
              </p>
              {/* Downlaod buttons and socials */}
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

                  <Button asChild size="iconSm">
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

                  <Button asChild size="iconSm">
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
              size="compact"
            >
              <address className="space-y-4 not-italic">
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
              size="compact"
            >
              <div className="flex flex-wrap gap-[clamp(0.5rem,0.5vw,0.75rem)]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className=" bg-red-800/10
          px-[clamp(0.75rem,0.7vw,1.125rem)]
          py-[clamp(0.25rem,0.3vw,0.5rem)]
          font-yu-gothic text-[0.85em]
          font-normal text-red-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CvSection>

          </div>

          <nav
            className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-400/50 pt-5"
            aria-label="CV sections"
          >
            <DetailCard
              title="Experience"
              kanji="慣"
              active={activeSection === 'experience'}
              onClick={() => toggleSection('experience')}
            />

            <DetailCard
              title="Projects"
              kanji="挙"
              active={activeSection === 'projects'}
              onClick={() => toggleSection('projects')}
            />

            <DetailCard
              title="Hobbies"
              kanji="趣味"
              active={activeSection === 'hobbies'}
              onClick={() => toggleSection('hobbies')}
            />

            <DetailCard
              title="Untitled"
              kanji="未知"
              active={activeSection === 'untitled'}
              onClick={() => toggleSection('untitled')}
            />
          </nav>
        </aside>
      </div>
    </main>
  )
}



export default App
