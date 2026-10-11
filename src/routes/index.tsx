import { DFeaturedWorkCard, DMyWorkCard } from '#/components/molecules/cards'
import { DB_CONSTANT } from '#/lib'
import { useScrollReveal } from '#/hooks/use-scroll-reveal'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CloudDownload, DotIcon, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const revealRef = useScrollReveal()

  return (
    <main ref={revealRef} className="px-5 md:px-0">
      <section data-reveal className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 mt-10 pb-28.5 md:mt-20 items-center">
        <div className="col-span-1">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.heroSubTitle}
          </p>
          <h1 className=" text-[33px] md:text-[56px] leading-10 tracking-wide md:leading-15 mt-6">
            I build practical people systems that help organisations
            <em className="text-primary">
              {' '}
              hire, onboard, manage, develop and retain
            </em>{' '}
            talent effectively.
          </h1>
          <p className="mt-7 text-base lg:text-lg text-muted-foreground">
            {DB_CONSTANT.heroDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center">
            {DB_CONSTANT.heroTags.map((tag) => {
              if (!tag) return <DotIcon />
              return (
                <span key={tag} className="inline-block font-semibold text-sm">
                  {tag}
                </span>
              )
            })}
          </div>

          <div className="mt-9 flex flex-col lg:flex-row gap-4 items-center">
            <a href="#featured-work" className="flex bg-primary justify-center lg:justify-normal w-full lg:w-auto text-white rounded-sm items-center py-2.5 px-5 gap-2">
              Explore my work <ArrowRight />
            </a>
            <a href={DB_CONSTANT.cvDownloadUrl} download={`${DB_CONSTANT.fullName}_CV.pdf`} className="flex justify-center lg:justify-normal w-full lg:w-auto items-center border border-foreground rounded-sm py-2.5 px-5 gap-2">
              <CloudDownload />
              Download Cv
            </a>
            <div className="flex gap-4 w-full lg:w-auto">
              <a href={DB_CONSTANT.linkedInUrl}>
                <img
                  className="w-5 h-5"
                  src="/icons/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href={`mailto:${DB_CONSTANT.email}`}>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-primary-foreground rounded-2xl lg:w-103.5 relative lg:h-129.5 lg:ml-12">
            <img
              src={DB_CONSTANT.imageUrl}
              alt="Description of image"
              className="w-full lg:max-w-103.5 h-auto lg:absolute block bottom-6 left-6 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* what i do */}
      <section data-reveal className="py-20 lg:py-28 bg-background-2">
        <div className="max-w-6xl w-full mx-auto px-5 lg:px-0">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.whatIDoSubtitle}
          </p>
          <div className="mt-6 max-w-3xl">
            <h1 className=" text-[33px] md:text-[44px] leading-10 tracking-wide md:leading-12">
              {DB_CONSTANT.whatIDoTitle}
            </h1>
          </div>

          <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-6">
            {DB_CONSTANT.whatIDoItems.map((card, index) => (
              <DMyWorkCard key={card.label} item={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* featured work */}
      <section data-reveal id="featured-work" className="py-20 lg:py-28 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.featuredWork.subtitle}
          </p>
          <div className="mt-6 flex items-end justify-between">
            <h1 className=" text-[33px] md:text-[44px] leading-10 tracking-wide md:leading-12">
              {DB_CONSTANT.featuredWork.title}
            </h1>
            <Link to={'/projects'} className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-2 grid-cols-1 gap-6">
            {DB_CONSTANT.featuredWork.items.map((card, index) => (
              <DFeaturedWorkCard key={card.label} item={card} index={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={'/projects'} className="flex items-center gap-2 group border border-foreground/15 rounded-sm text-sm px-3 py-2">
            View All Projects{' '}
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
