import React from 'react'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { ArrowDown10, Cross } from 'lucide-react'

function AddBook() {
  return (
    <form className='max-w-96 mx-auto flex flex-col gap-2 mb-10'>
        <Input type='text' placeholder="Add Book" required/>
        <Input type='text' placeholder='Author Name' required/>
        <div className='flex gap-2'>
        <Button type='submit'>
            <Cross />
            Add
        </Button>
        <Button type='button'>
            <ArrowDown10 />
            Sort
        </Button>
        </div>
    </form>
  )
}

export default AddBook