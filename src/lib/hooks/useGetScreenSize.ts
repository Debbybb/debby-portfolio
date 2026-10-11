import { useEffect, useMemo, useState } from 'react'

type ScreenSize = 'mobile' | 'tablet' | 'desktop'
const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number
    height: number
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getScreenSize = useMemo<ScreenSize>(() => {
    if (screenSize.width < 768) return 'mobile'
    if (screenSize.width < 1024) return 'tablet'
    return 'desktop'
  }, [screenSize])

  return { screenSize, getScreenSize }
}

export default useGetScreenSize
