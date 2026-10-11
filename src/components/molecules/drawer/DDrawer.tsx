import { Button } from '#/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '#/components/ui/drawer'
import { useGetScreenSize } from '#/lib/hooks'

type Props = {
  opened: boolean
  setOpen: (open: boolean) => void
  children: React.ReactNode
  title: string
  description?: string
  disableFooter?: boolean
}

const DDrawer = ({
  opened,
  setOpen,
  children,
  title,
  description,
  disableFooter = false,
}: Props) => {
  const isMobile = useGetScreenSize().getScreenSize === 'mobile'
  return (
    <Drawer
      open={opened}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? 'down' : 'right'}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="p-4">{children}</div>
        {!disableFooter && (
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}

export default DDrawer
