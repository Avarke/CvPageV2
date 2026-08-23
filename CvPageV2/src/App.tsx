import { BackgroundCarousel } from './components/BackgroundCarousel'
import { useState, useEffect } from 'react'
import { SidebarDrawer } from './components/SidebarDrawer'


import profilePicture from './assets/profile/unnamed.webp'
import profile384 from './assets/profile/profile-384.webp'
import profile512 from './assets/profile/profile-512.webp'
import profile768 from './assets/profile/profile-768.webp'
import profile1024 from './assets/profile/profile-1024.webp'
import profile1280 from './assets/profile/profile-1280.webp'


import { Button } from './components/Button'
import { CvSection } from './components/CvSection'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

import cvEngPdf from './assets/downloads/CV - Arijus Vaškiavičius_ENG.pdf'
import cvLtPdf from './assets/downloads/CV - Arijus Vaškiavičius_LT.pdf'
import recommendation from './assets/downloads/Arijus_Vaskiavicius_recommendation-1.pdf'
import certificate from './assets/downloads/certificate.pdf'

import { HoverTooltip } from './components/HoverTooltip'
import { ContactItem } from './components/ContactItem'
import { DetailCard } from './components/DetailCard'
import { DrawerTitle } from './components/DrawerTitle'
import { DrawerContent } from './components/DrawerContent'
import hobbiesVideo from './assets/videos/Manga 2(2).mp4'
import davinciTimeline from './assets/misc/davinci_timeline_render.webp'
import { ToolLink } from './components/ToolLink'
import hobbiesPic from './assets/hobbies/IMG_3829.webp'
import hobbiesPoster from './assets/misc/hobby_poster.webp'
import mangaPic from './assets/misc/cb5b4a302ifa1.jpg'
import ambergrid from './assets/misc/amber_1.jpg'
import bronius from './assets/misc/BRONIUS.jpg'
import JAS from "./assets/misc/JAS.webp"
import SlimeSoccer from "./assets/misc/slimesoccer.png"
import codeRender from "./assets/misc/code_render.jpg"
import dyplom from "./assets/misc/dyplom.webp"
import ktu from "./assets/misc/ktu_atributika_shop-897x1024.png"
import skilled from "./assets/misc/SKILLed-Fintech-psl-1.jpg"
import DE from './assets/misc/9ssfgekfoup61.jpg'


type DrawerSection = 'experience' | 'projects' | 'hobbies' | 'education' | null

const backgroundImages = Object.values(
  import.meta.glob('./assets/background/*', {
    eager: true,
    import: 'default',
  }),
) as string[]

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'C#', '.NET', 'SQL', 'Python', 'Java', 'Photoshop', 'Linux', 'Premiere Pro']
const linkedInUrl = 'https://www.linkedin.com/in/arijus-vaskiavicius/'
const githubUrl = 'https://github.com/Avarke'

const drawerImages = [
  ambergrid,
  bronius,
  JAS,
  SlimeSoccer,
  codeRender,
  davinciTimeline,
  hobbiesPic,
  mangaPic,
  DE,
  dyplom,
  ktu,
  skilled,
]


function App() {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 640px)').matches
      : false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)')

    function handleChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches)
    }

    setIsDesktop(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const preloaders = drawerImages.map((src) => {
      const image = new Image()

      image.fetchPriority = 'low'
      image.decoding = 'async'
      image.src = src

      return image
    })

    return () => {
      preloaders.forEach((image) => {
        image.removeAttribute('src')
      })
    }
  }, [])

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
      {isDesktop && <BackgroundCarousel images={backgroundImages} />}

      <div className="fixed inset-0 z-50 w-full sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[max(33.333vw,30rem)] lg:w-[clamp(30rem,33.333vw,42rem)]">
        <SidebarDrawer
          activeSection={activeSection}
          onClose={() => setActiveSection(null)}
        >
          {activeSection === 'experience' && (
            <article>
              <DrawerTitle
                title="Experience"
                media={{ type: 'image', src: bronius, alt: 'Bronius portrait' }}
                titleClassName="sm:scale-x-[0.9] scale-x-[1.01]"
                overlayClassName="bg-black/65"
              />
              <DrawerContent title="Developer Internship (2026)" subtitle="mobreport system">
                <div className='flow-root'>
                  <img
                    src={ambergrid}
                    alt="Amber Grid"
                    className="
                      float-right
                      ml-5 mb-1 mt-1
                      h-auto
                      w-30 sm:w-30
                      opacity-80
                      object-contain
                      "
                  />

                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    I did my first IT internship in {''}
                    <ToolLink href="https://ambergrid.lt/"
                      className='text-[#67C08B] underline decoration-[#67C08B]'>
                      Amber Grid
                    </ToolLink>
                    . During it, I built a working internal system for importing and managing telecommunications data and expenses with a submission
                    subsystem for letting managers and workers submit their expenses for approval. The system was built using {''}
                    <strong className='text-stone-100'>C# and .NET</strong>, with an{' '}
                    <strong className='text-stone-100'>SQL Server database</strong> and a web interface built with{' '}
                    <strong className='text-stone-100'>React, Vite and Tailwind CSS</strong>.
                  </p>
                </div>
              </DrawerContent>

              <DrawerContent title="Miscellaneous Jobs" image={JAS} subtitle="Non-tech jobs">
                <div className='flow-root'>


                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    Over the years I have accumulated various non-tech experience, mostly in customer service and
                    sales. I enjoy volunteering very much - I have been in numerous exhibitions and fairs,
                    but my favourite place to volunteer is {''}
                    <ToolLink href="https://www.mmlaboratorija.lt/edukacija/jaunju-astronomu-saskrydis">
                      JAS
                    </ToolLink>
                    . You can find more details by {''}
                    <ToolLink
                      href={cvEngPdf}
                      download="Arijus_Vaskiavicius_CV_ENG.pdf"
                      target="_self">downloading my CV.</ToolLink>

                  </p>
                </div>
              </DrawerContent>


            </article>
          )}

          {activeSection === 'projects' && (
            <article>
              <DrawerTitle
                title="Projects"
                media={{
                  type: 'image',
                  src: codeRender,
                  alt: 'Code Render'
                }}
                titleClassName="sm:scale-x-[1.2] scale-x-[1.25]"
                overlayClassName="bg-black/40"
              />

              <DrawerContent title="MobReport System" subtitle="Practical report management tool">
                <div className='flow-root'>


                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    The biggest project I worked on yet was for {''}
                    <ToolLink href="https://ambergrid.lt/"
                      className='text-[#67C08B] underline decoration-[#67C08B]'>
                      Amber Grid
                    </ToolLink>
                    . I created a system that processes data from several ISP's and combines them into a unified data model by using a
                    <strong className='text-stone-100'> .NET API </strong> and stores it inside an <strong className='text-stone-100'> SQL Server. </strong>
                    The unified data is then used for generating usage reports for employees. In cases where an employee went over their
                    usage limit, a submission subsystem allows them to submit particular usage cases to their managers in order to get them checked.
                    All system actions happen through a web UI built on <strong className='text-stone-100'> REACT and VITE. </strong>
                  </p>
                </div>
              </DrawerContent>

              <DrawerContent title="Various Small Projects" subtitle="for academia and fun" image={SlimeSoccer}>
                <div className='flow-root'>
                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    I've made various smaller projects during my university years. I have worked with <strong className='text-stone-100'> JAVA and Python </strong>
                    for smaller tasks regarding data structures, ML training and made a {''}
                    <ToolLink href="https://github.com/Avarke/SlimeSoccer-Design-Patterns">
                      small multiplayer game
                    </ToolLink>
                    {''} for a university assignment. You can find most of my projects, along with this page, in my {''}
                    <ToolLink href="https://github.com/Avarke">
                      GitHub
                    </ToolLink>
                    .

                  </p>
                </div>
              </DrawerContent>



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
              <DrawerContent title="Video Editing" subtitle="Moving Pictures"
                //kanji="編集" 
                image={davinciTimeline}>
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

              <DrawerContent title="Photography"
                // kanji="撮影" 
                subtitle="Not moving pictures">
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
                    You may have noticed I quite like things from the japanese culture.
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

              <DrawerContent title="Video Games" subtitle="An extraordinary art form" image={DE}>

                <div className="flow-root">

                  <p className="font-mono text-[0.95rem] leading-[1.55] text">
                    I very much enjoy playing and analyzing video games. I don't view
                    them simply as "entertainment" or something you do to waste your time. They can be thoughtful, provocative,
                    meaningful -
                    <strong>a medium that's capable of telling stories in it's own unique way and invoke emotions inside you.</strong> Isn't that what all great art does?
                    Of course, I play them for entertainment as well, but what interests me more are the stories and ways they are told. {''}
                    <ToolLink href="https://www.youtube.com/watch?v=63PzQIbTrM8">
                      Nier: Automata
                    </ToolLink>
                    {''} introduced me to some of humanity's greatest thinkers. {''}
                    <ToolLink href="https://www.youtube.com/watch?v=BA54VHdb1j0">
                      Disco Elysium
                    </ToolLink>
                    {''} masterfully deconstructed the modern human nature and ideologies that power it. {''}
                    <ToolLink href="https://www.youtube.com/watch?v=H-yTZFi-_eY">
                      Outer Wilds
                    </ToolLink>
                    {''} made me sit in reflective and somber silence as the credits rolled... Those are just a few examples of what the form is capable of - it has so much more
                    to offer if one simply becomes open to it.
                    And if you still think of games as silly little things after interacting with the ones listed, then I'm afraid you're just trapped by your senile ignorance.
                  </p>
                </div>
                {/* <img
                  src={editingImage}
                  alt="Video editing project"
                /> */}
              </DrawerContent>


            </article>
          )}

          {activeSection === 'education' && (
            <article>
              <DrawerTitle
                title="Education"
                media={{
                  type: 'image',
                  src: dyplom,
                  alt: "Diplomu_iteikimas"
                }}
                titleClassName="sm:scale-x-[1] scale-x-[1.08]"
                overlayClassName="bg-black/75"
              />

              <DrawerContent title="Program Systems Bachelor" subtitle="KTU - 2026">
                <div className='flow-root'>
                  <img
                    src={ktu}
                    alt="KTU"
                    className="
                      float-right
                      ml-5 mb-1 mt-1
                      h-auto
                      w-30 sm:w-30
                      opacity-80
                      object-contain
                      "
                  />

                  <p className="font-mono text-[0.95rem] leading-[1.55] text">

                    I finished the {''}
                    <ToolLink href="https://admissions.ktu.edu/programme/b-software-systems/">
                      "Program Systems"
                    </ToolLink>
                    {''} program in KTU and received a {''}

                    <strong className='text-stone-100'>Bachelor in Computing.</strong> During it, I learned {''}
                    <strong className='text-stone-100'>the fundamentals of software design/architecture and programming</strong>
                    {''} and got to work with numerous tools and programming languages (which are listed in my technical skills section).
                  </p>
                </div>
              </DrawerContent>

              <DrawerContent title="SKILLed FinTech" subtitle="KTU Talent Program" image={skilled}>
                <div className='flow-root'>


                  <p className="font-mono text-[0.95rem] leading-[1.55] text">

                    Besides finishing my Bachelor in KTU, I also graduated from the {''}
                    <ToolLink href="https://students.ktu.edu/ed-programmes/skilled-fintech/">
                      SKILLed FinTech
                    </ToolLink>
                    {''} talent program. The program gave me additional knowledge in {''}
                    <strong className='text-stone-100'>economics, business and financial technology.</strong>
                    {''} As well helping me grow as a person during the university years. You can download my certificate and recommendation below.
                    <div className="mt-3 flex flex-wrap gap-2">

                      <Button variant="drawer" size="sm">
                        <a href={certificate} download="Arijus_Vaskiavicius_Certificate.pdf">
                          Certificate
                        </a>
                      </Button>

                      <Button variant="drawer" size="sm">
                        <a href={recommendation} download="Arijus_Vaskiavicius_Recommendation.pdf">
                          Recommendation
                        </a>
                      </Button>


                    </div>

                  </p>
                </div>
              </DrawerContent>
            </article>

          )}
        </SidebarDrawer>

        <aside className="h-full overflow-y-auto bg-stone-200 p-5 text-zinc-500 shadow-2xl sm:bg-stone-200/95 sm:p-7 sm:backdrop-blur-md">
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">

            {/* Foto, name ir contact section */}
            <section className="group relative overflow-hidden bg-black @container text-white/95">
              <img
                fetchPriority="high"
                src={profile768}
                srcSet={`
                  ${profile384} 384w,
                  ${profile512} 512w,
                  ${profile768} 768w,
                  ${profile1024} 1024w,
                  ${profile1280} 1280w
                `}
                sizes="
                  (max-width: 639px) calc(100vw - 40px),
                  (max-width: 1439px) 424px,
                  (max-width: 2015px) calc(33.333vw - 56px),
                  616px
                "
                width={768}
                height={768}
                loading="eager"
                decoding="async"
                onLoad={(event) => {
                  const image = event.currentTarget

                  void image.decode().then(
                    () => setProfileImageLoaded(true),
                    () => setProfileImageLoaded(true),
                  )
                }}
                style={{
                  opacity: profileImageLoaded ? 1 : 0,
                  transition: 'opacity 1.5s ease-in-out, transform 500ms ease-out',
                }}
                className="h-full w-full scale-[1.1] object-cover group-hover:scale-[1.15]"
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
                    Full-Stack Developer
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
                I am a full-stack developer from KTU, alumni of SKILLed FinTech program. Passionate about creating innovative solutions, . Actively seeking opportunities to sharpen my skills and contribute to useful projects.
                <span className="my-4 block text-right">
                  Note: The page uses <strong className="text-red-800">JAPANESE </strong> typography
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
                  <a href={cvLtPdf} download="Arijus_Vaskiavicius_CV_LT.pdf">
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
          font-bold text-red-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CvSection>

          </div>

          {/* Detail cards */}
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
              title="Education"
              kanji="教育"
              active={activeSection === 'education'}
              onClick={() => toggleSection('education')}
            />
          </nav>
        </aside>
      </div>
    </main>
  )
}



export default App
