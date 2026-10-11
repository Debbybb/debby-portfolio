import { DB_CONSTANT, formatNumberPadStart } from '#/lib'
import { useScrollReveal } from '#/hooks/use-scroll-reveal'
import { createFileRoute } from '@tanstack/react-router'
import { DownloadCloud } from 'lucide-react'

export const Route = createFileRoute('/experience')({
  component: RouteComponent,
})

function RouteComponent() {
  const revealRef = useScrollReveal()

  return (
    <main ref={revealRef} className="px-5 md:px-0">
      <section data-reveal className="max-w-6xl px-5 lg:px-0 border-b border-background-3 mx-auto mt-10 md:mt-20">
        <div className="w-full max-w-4xl lg:pb-16 pb-10">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {DB_CONSTANT.experience.subTitle}
          </p>
          <h1 className=" text-[33px] md:text-[56px] leading-10 tracking-wide md:leading-15 mt-6">
            {DB_CONSTANT.experience.title}
          </h1>
        </div>
      </section>

      {/* experience */}
      <section className="pb-15 lg:pt-2 lg:pb-24">
        <div className="max-w-6xl w-full mx-auto px-5 lg:px-0 space-y-5">
          {DB_CONSTANT.experience.experienceItems.map((item, i, arr) => (
            <div
              key={item.role}
              data-reveal
              className={`flex ${i + 1 === arr.length ? '' : 'border-b border-background-3'} flex-col md:flex-row gap-10 py-10`}
            >
              <div className="w-30">
                <p className="text-[11.52px] text-primary uppercase">
                  {item.date}
                </p>
                <h1 className="text-4xl text-primary/20 mt-1 lg:mt-3 font-bold">
                  {formatNumberPadStart(i + 1)}
                </h1>
              </div>
              <div className="flex-1">
                <h2 className="sm:text-3xl text-2xl font-semibold">
                  {item.role}
                </h2>
                <p className="leading-6 text-muted-foreground font-medium">
                  {item.company}
                </p>
                <p className="font-semibold text-[12px] mt-6 uppercase">
                  Selected Contributions:
                </p>
                <ul className="mt-3 text-sm lg:text-base grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 list-disc lg:list-image-[url(/icons/minus.svg)]">
                  {item.contributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div data-reveal className="max-w-6xl bg-background-2 rounded-sm p-5 lg:p-7 border border-background-1 w-full mx-auto flex items-center justify-between">
          <h2 className="md:text-xl text-base font-semibold">
            Want the complete employment history?
          </h2>
          <a
            href={DB_CONSTANT.cvDownloadUrl}
            download={`${DB_CONSTANT.fullName}_CV.pdf`}
            className="bg-primary px-5 py-2.5 flex items-center text-xs gap-2 rounded-sm text-background-0"
          >
            <DownloadCloud />
            Download CV
          </a>
        </div>
      </section>

      {/* education */}
      <div className="bg-background-2 py-24">
        <section data-reveal className="max-w-6xl mx-auto px-5 lg:px-0">
          <div className="w-full max-w-4xl pb-16">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {DB_CONSTANT.experience.education.subTitle}
            </p>
            <h1 className=" text-[33px] md:text-5xl leading-10 tracking-wide md:leading-15 mt-4">
              {DB_CONSTANT.experience.education.title}
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {DB_CONSTANT.experience.education.items.map((item, index) => (
              <div
                key={index}
                className=" bg-background-0 p-6 rounded-sm col-span-1"
              >
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.degree}
                  {item.fieldOfStudy ? ` · ${item.fieldOfStudy}` : ''}
                </p>
                <p className="text-primary text-sm">
                  {item.startYear} – {item.endYear}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* capabilities */}
      <div className="py-24">
        <section data-reveal className="max-w-6xl px-5 lg:px-0 mx-auto border-b border-background-3">
          <div className="w-full max-w-4xl pb-16">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {DB_CONSTANT.experience.capabilities.subTitle}
            </p>
            <h1 className=" text-[33px] md:text-5xl leading-10 tracking-wide md:leading-15 mt-4">
              {DB_CONSTANT.experience.capabilities.title}
            </h1>
          </div>
        </section>
        <div className="max-w-6xl mx-auto">
          {DB_CONSTANT.experience.capabilities.items.map((item, index) => (
            <div data-reveal key={index} className="flex lg:flex-row flex-col gap-5 border-b border-background-3 py-7">
              <div className="w-80">
                <h3 className="text-lg font-semibold">{item.label}</h3>
              </div>

              <div className="flex-1">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block border border-primary/20 text-foreground-0 px-2 py-1 rounded-sm text-xs mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
