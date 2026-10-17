import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from '#/components/ui/card'
import { formatNumberPadStart } from '#/lib'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

type Props = {
  item: {
    label: string
    slug: string
    subtitle: string
    summary: string
    tags: string[]
    badge: string
  }
  index: number
}

const DFeaturedWorkCard = ({ item, index }: Props) => {
  return (
    <Card className="px-4.25 py-8 bg-background-0">
      <CardHeader>
        <CardTitle className="text-4xl text-primary/30 hover:text-primary">
          {formatNumberPadStart(index + 1)}
        </CardTitle>
        <CardAction className="text-primary uppercase text-[11.52px] font-semibold leading-[7.28px]">
          {item.badge}
        </CardAction>
      </CardHeader>
      <CardContent>
        <h3 className="text-2xl font-semibold">{item.label}</h3>
        <p className="text-muted-foreground mt-2">{item.subtitle}</p>
        <p className="text-muted-foreground mt-4">{item.summary}</p>

        <div className="flex items-center gap-3 mt-6 flex-wrap">
          {item.tags.map((i, j) => (
            <div key={j} className="px-3 py-1.5 bg-background-2 rounded-sm text-xs">
              {i}
            </div>
          ))}
        </div>

        <div className="pt-8">
       <Link
            to={'/projects/$slug'}
            params={{ slug: item.slug }}
            className={'flex items-center gap-2 group'}
          >
            View Case Study{' '}
            <ArrowRightIcon className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default DFeaturedWorkCard
