import { DB_CONSTANT } from '#/lib'
import { Link } from '@tanstack/react-router'
import { Download, Mail } from 'lucide-react'

const DFooter = () => {
  return (
    <section id="contact" className="bg-background-9 pt-28 lg:pt-32 text-background">
      <div className="max-w-6xl mx-auto pb-24 lg:pb-32 px-5 lg:px-0">
        <p className="text-[11.52px] text-background/60 tracking-wider uppercase font-semibold mb-4">
          Contact
        </p>
        <div className="max-w-3xl mt-6">
          <h2 className="text-3xl sm:text-6xl">
            Let's build better people systems
          </h2>
          <p className="mt-6 text-sm lg:text-lg text-background/60">
            I'm open to opportunities in HR Operations, People Operations,
            Talent Management and HR Analytics, particularly environments where
            I can contribute, learn and help build practical people processes.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="flex items-center gap-2 bg-white text-foreground rounded-sm lg:py-3 lg:px-6 px-4 py-2 "
            >
              <Mail />
              Email Me
            </a>
            <a
              href={DB_CONSTANT.linkedInUrl}
              className="flex items-center border border-background/30 gap-2 text-background rounded-sm lg:py-3 lg:px-6 px-4 py-2"
            >
              <svg
                height={24}
                width={24}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href={DB_CONSTANT.cvDownloadUrl}
              download={`${DB_CONSTANT.fullName}_CV.pdf`}
              className="flex items-center gap-2 border border-background/30 rounded-sm lg:py-3 lg:px-6 px-4 py-2"
            >
              <Download />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-background/10" />

      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-baseline-last">
        <div>
          <h6 className="text-lg text-white mb-1 font-semibold tracking-wide">
            {DB_CONSTANT.fullName}
          </h6>
          <p className="text-background/60 text-sm">
            {DB_CONSTANT.heroSubTitle}
          </p>
        </div>
        <nav className="flex items-center gap-4">
          {DB_CONSTANT.footer.navigation.map((item) => {
            const className =
              'text-background/60 block text-sm hover:text-background transition-colors'
            if (item?.href?.startsWith('https://')) {
              return (
                <a key={item.label} href={item.href} className={className}>
                  {item.label}
                </a>
              )
            }
            if (item.download && !item.href) {
              return (
                <a
                  key={item.label}
                  href={item.download}
                  download={`${DB_CONSTANT.fullName}_CV.pdf`}
                  className={className}
                >
                  {item.label}
                </a>
              )
            }
            return (
              <Link key={item.label} to={item.href} className={className}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <p className="text-background/60 text-xs mt-5 lg:mt-0">
          &copy; {new Date().getFullYear()} {DB_CONSTANT.fullName}. All rights
          reserved.
        </p>
      </div>
    </section>
  )
}

export default DFooter
