import { Button } from '#/components/ui/button'
import { DB_CONSTANT, NAVIGATION_ITEMS } from '#/lib'
import { CloudDownload, Menu } from 'lucide-react'

import { DBrand } from '../logo'
import { DDrawer } from '../drawer'
import { useState } from 'react'
import { DNavItem } from './DNavItem'
import { useLocation } from '@tanstack/react-router'
import { useGetScreenSize } from '#/lib/hooks'

const DNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const { getScreenSize } = useGetScreenSize()
  return (
    <section className="bg-white py-3 px-5 md:px-0">
      <div className="mx-auto md:max-w-6xl w-full flex items-center gap-10">
        <DBrand />
        <p className="text-2xl lg:text-3xl text-primary font-bold">
          {DB_CONSTANT.fullName}
        </p>
        <div className="ml-auto flex items-center gap-2">
          <a
            href={DB_CONSTANT.cvDownloadUrl}
            download={`${DB_CONSTANT.fullName}_CV.pdf`}
            className="flex items-center gap-2 text-sm border border-primary/20 rounded-md px-3 py-1.5"
          >
            <CloudDownload />
            {getScreenSize !== 'mobile' ? 'Download CV' : ''}
          </a>
          <Button
            onClick={() => setDrawerOpen((prev) => !prev)}
            variant="ghost"
            size="icon"
            aria-label="Submit"
          >
            <Menu />
          </Button>
        </div>
        <DDrawer
          disableFooter
          title="Menu"
          opened={drawerOpen}
          setOpen={setDrawerOpen}
        >
          <div className="w-full flex flex-col gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <DNavItem
                active={pathname === item.href}
                key={item.href}
                icon={item.icon}
                to={item.href}
                label={item.label}
              />
            ))}
          </div>
        </DDrawer>
      </div>
    </section>
  )
}

export default DNavbar
