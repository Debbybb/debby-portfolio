import { Outlet, createRootRoute } from '@tanstack/react-router'
import { DNavbar } from '#/components'
import { DFooter } from '#/components/molecules/footer'
import '../styles.css'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="bg-background overflow-hidden">
      <DNavbar />
      <Outlet />
      <DFooter />
    </main>
  )
}
