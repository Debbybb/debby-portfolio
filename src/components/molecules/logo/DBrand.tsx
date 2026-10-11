import { Separator } from '#/components/ui/separator'
import { DB_CONSTANT } from '#/lib'
import { Link } from '@tanstack/react-router'

const DBrand = () => {
  return (
    <Link to="/" className="hidden lg:flex items-center gap-3">
      <div className="flex items-baseline gap-1">
        <h1 className="font-bold text-3xl">{DB_CONSTANT.initials}</h1>
        <div className="h-2 w-2 bg-primary rounded-full" />
      </div>

      <Separator orientation="vertical" />
      <div>
        <p className="text-lg uppercase font-semibold">
          {DB_CONSTANT.fullName.split(' ')[0]}
        </p>
        <p className="text-primary text-xs uppercase">{DB_CONSTANT.slogan}</p>
      </div>
    </Link>
  )
}

export default DBrand
