// import { Badge } from '@/components/ui/badge'

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Props = {
  label: string
  url: string
  imageUrl: string
  description?: string
}

export default function DImageCard({
  label,
  url,
  imageUrl,
  description,
}: Props) {
  return (
    <Card className="relative max-w-xs pt-0 group">
      <div className="absolute group-hover:bg-transparent transition-all duration-500 inset-0 z-30 aspect-video bg-black/20" />
      <img
        src={imageUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">Featured</Badge> */}
        </CardAction>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a
          className="bg-transparent hover:bg-primary/20 transition-colors duration-300 font-semibold text-primary px-4 py-2 rounded"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </CardFooter>
    </Card>
  )
}
