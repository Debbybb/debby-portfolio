import { DImageCard } from '#/components/molecules/cards'
import { Separator } from '#/components/ui/separator'
import { useScrollReveal } from '#/hooks/use-scroll-reveal'
import { DB_CONSTANT, formatNumberPadStart } from '#/lib'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/projects/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  const revealRef = useScrollReveal()
  const data = DB_CONSTANT.featuredWork.items.find((item) => item.slug === slug)
  const index = DB_CONSTANT.featuredWork.items.findIndex(
    (item) => item.slug === slug,
  )
  return (
    <main ref={revealRef} className="px-5 md:px-0">
      <section
        data-reveal
        className="max-w-6xl px-5 lg:px-0 border-b border-background-3 mx-auto mt-10 md:mt-20"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 mb-12 text-muted-foreground text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>
        <div className="w-full max-w-4xl lg:pb-16 pb-10">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Project {formatNumberPadStart(index + 1)}: {data?.badge}
          </p>
          <h1 className=" text-[33px] md:text-[56px] leading-10 tracking-wide md:leading-15 mt-6">
            {data?.label}
          </h1>
          <p className="text-primary/75 mt-6">{data?.subtitle}</p>
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            {data?.tags.map((i, j) => (
              <div
                key={j}
                className="px-3 py-1.5 bg-background-2 rounded-sm text-xs"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator />
      <section
        data-reveal
        className="max-w-6xl px-5 lg:px-0 space-y-14 md:space-y-20 mx-auto my-10 md:my-20"
      >
        {data?.summary && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              Overview
            </div>
            <div className="flex-1">{data.summary}</div>
          </div>
        )}

        {data?.challenge && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              {data.challenge.label}
            </div>
            <div className="flex-1">{data.challenge.description}</div>
          </div>
        )}

        {data?.approach && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              {data.approach.label}
            </div>
            <div className="flex-1 whitespace-pre-line">
              {data.approach.description}
            </div>
          </div>
        )}

        {data?.deliverables && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              {data.deliverables.label}
            </div>
            <div className="flex-1 whitespace-pre-line">
              <ul className="mt-3 text-sm lg:text-base grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 list-disc lg:list-image-[url(/icons/minus.svg)]">
                {data.deliverables.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {Array.isArray(data?.projects) && data.projects.length > 0 && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              Examples
            </div>
            <div className="flex-1 flex flex-wrap gap-4">
              {data.projects.map((project, i) => (
                <DImageCard
                  key={i}
                  imageUrl={project.imageUrl}
                  label={project.label}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        )}

        {data?.disclaimer && (
          <div className=" border-l-2 border-primary p-4 bg-primary/5">
            <p className=" text-primary mb-2">Disclaimer:</p>
            <blockquote className="text-xs text-primary mb-5">
              “{data.disclaimer}”
            </blockquote>
          </div>
        )}

        {data?.tools && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-primary font-semibold uppercase w-1/6">
              {data.tools.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tools.items.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-background-2 rounded-sm text-xs"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
