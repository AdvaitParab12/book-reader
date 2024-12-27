import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp ,Trash } from "lucide-react"


interface SingleBookProps {
  book: Book
  dispatch: React.Dispatch<Action>
}


function SingleBook({ book, dispatch }: SingleBookProps) {
  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-2xl">{book.author}</CardTitle>
          <CardDescription>{book.rating}</CardDescription>
        </CardHeader>
        <CardContent >
          <p className="text-xl font-bold">{book.title}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={()=>dispatch({type:'like',payload:{id:book.id}})}><ThumbsUp /></Button>
          <Button onClick={()=>dispatch({type:'unlike',payload:{id:book.id}})}><ThumbsDown /></Button>
          <Button onClick={()=>dispatch({type:'delete',payload:{id:book.id}})}><Trash /></Button>
        </CardFooter>
        
      </Card>

    </div>
  )
}

export default SingleBook