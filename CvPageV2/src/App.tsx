import { BackgroundCarousel } from './components/BackgroundCarousel'
import { useState } from 'react'
import { SidebarDrawer } from './components/SidebarDrawer'


type DrawerSection = 'about' | 'skills' | 'contact' | null

const backgroundImages = Object.values(
  import.meta.glob('./assets/background/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
    as: 'url',
  }),
) as string[]

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

      <aside className="fixed inset-y-0 right-0 z-50 w-96 bg-zinc-200 p-8 text-slate-900">
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

        <nav className="flex flex-col gap-4">
          <button onClick={() => toggleSection('about')}>
            About
          </button>

          <button onClick={() => toggleSection('skills')}>
            Skills
          </button>

          <button onClick={() => toggleSection('contact')}>
            Contact
          </button>
        </nav>
      </aside>
    </main>
  )
}

export default App
