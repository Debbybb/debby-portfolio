import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'

type DNavItemProps = {
  to: string
  label: string
  icon?: LucideIcon
  active?: boolean
}
export function DNavItem({ to, label, icon: Icon, active }: DNavItemProps) {
  return (
    <Link
      className={`flex ${active ? 'bg-background text-primary' : ''} gap-2 w-full text-base hover:bg-background p-2 items-center`}
      to={to}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </Link>
  )
}
