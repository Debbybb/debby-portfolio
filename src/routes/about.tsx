import { DB_CONSTANT, formatNumberPadStart } from '#/lib'
import { useScrollReveal } from '#/hooks/use-scroll-reveal'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const revealRef = useScrollReveal()

  return (
    <main ref={revealRef} className="px-5 md:px-0">
      <section data-reveal className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 lg:gap-y-0 mt-10 pb-28.5 md:mt-20">
        <div className="col-span-1">
          <img
            src={DB_CONSTANT.imageUrl}
            alt="Description of image"
            className="w-full lg:max-w-115.25 ml-auto h-auto block rounded-2xl"
          />
        </div>
        <div className="col-span-1">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.heroSubTitle}
          </p>
          <h1 className=" text-[33px] md:text-[56px] leading-10 tracking-wide md:leading-15 mt-6">
            {DB_CONSTANT.about.title}
          </h1>
          <p className="mt-7 text-base lg:text-lg text-muted-foreground whitespace-pre-line">
            {DB_CONSTANT.about.description}
          </p>
        </div>
      </section>

      {/* my philosophy */}
      <section data-reveal className="py-20 lg:py-28 bg-background-9">
        <div className="max-w-6xl w-full mx-auto px-5 lg:px-0">
          <p className="text-xs font-semibold tracking-widest text-background-0/60 uppercase">
            {DB_CONSTANT.about.philosophySubtitle}
          </p>
          <div className="mt-6 max-w-3xl">
            <blockquote className=" text-4xl text-background-0 font-heading md:text-[44px] leading-10 tracking-wide md:leading-12">
              {DB_CONSTANT.about.philosophyTitle}
            </blockquote>

            <p className="mt-10 leading-relaxed text-sm lg:text-base w-5/6 text-background-2/60 whitespace-pre-line">
              {DB_CONSTANT.about.philosophyDescription}
            </p>
          </div>
        </div>
      </section>

      {/* featured work */}
      <section data-reveal className="py-20 lg:py-28 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.about.howIworkSubTitle}
          </p>
          <div className="mt-6 max-w-3xl">
            <h1 className=" text-[33px] md:text-[44px] leading-10 tracking-wide md:leading-12">
              {DB_CONSTANT.about.howIworkTitle}
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-10 gap-10">
            {DB_CONSTANT.about.howIworkItems.map((item, index) => (
              <div key={item.label} className="lg:col-span-2">
                <div className="flex items-center">
                  <div className="size-3 rounded-full bg-primary/90" />
                  <div className="h-px w-full bg-primary/50" />
                </div>
                <h2 className="text-xl font-semibold">
                  {formatNumberPadStart(index + 1)}
                    </h2>
                    <h5 className="text-lg font-medium mt-1">{item.label}</h5>
                <p className="mt-2 text-sm lg:text-base whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
