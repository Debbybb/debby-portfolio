import { DFeaturedWorkCard } from '#/components/molecules/cards'
import { DB_CONSTANT } from '#/lib'
import { useScrollReveal } from '#/hooks/use-scroll-reveal'
import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  const revealRef = useScrollReveal()
  const [activeTab, setActiveTab] = useState(DB_CONSTANT.projects.tabs[0].toLowerCase())
  return (
    <main ref={revealRef} className="px-5 md:px-0">
      <section data-reveal className="max-w-6xl mx-auto mt-10 md:mt-20 items-center">
        <div className="max-w-3xl w-full">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.projects.subTitle}
          </p>
          <h1 className=" text-[33px] md:text-[56px] leading-10 tracking-wide md:leading-15 mt-6">
            {DB_CONSTANT.projects.title}
          </h1>
          <p className="mt-7 text-base lg:text-lg text-muted-foreground">
            {DB_CONSTANT.projects.description}
          </p>
        </div>

        <div className="mt-15">
          {DB_CONSTANT.projects.tabs.map((tab, i) => (
            <button
              key={i}
              className={`mr-4 mb-4 px-4 py-2 rounded ${
                activeTab === tab.toLowerCase() ? 'bg-primary text-white' : 'bg-primary/5 text-primary border border-primary/20'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
          <div className="mt-4 h-px w-full bg-primary/20" />
        </div>
      </section>

      {/* featured work */}
      <section data-reveal id="featured-work" className="py-5 lg:py-10 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <div key={activeTab} className="fade-in mt-3 grid md:grid-cols-2 grid-cols-1 gap-6">
            {DB_CONSTANT.featuredWork.items.filter(item => activeTab === 'all' ? true : item.badge.toLowerCase().includes(activeTab)).map((card, index) => (
              <DFeaturedWorkCard key={card.label} item={card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
