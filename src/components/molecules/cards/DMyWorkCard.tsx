import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { formatNumberPadStart } from '#/lib'

type Props = {
  item: {
    label: string
    description: string
    tags: string[]
  }
  index: number
}

const DMyWorkCard = ({ item, index }: Props) => {
  return (
    <Card className="px-4.25 py-8 bg-background-0">
      <CardHeader>
        <CardTitle className="text-primary py-0 text-sm font-heading">
          {formatNumberPadStart(index + 1)}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-0">
        <h2 className="text-2xl mb-4 font-semibold">{item.label}</h2>
        <p className="text-sm text-muted-foreground leading-6">
          {item.description}
        </p>

        <Separator className="my-6" />

        <ul className="list-disc grid grid-cols-2 gap-4">
          {item.tags.map((tag, tagIndex) => (
            <li className="col-span-1 font-light" key={tagIndex}>{tag}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default DMyWorkCard
