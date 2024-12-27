import React from 'react'
import SingleBook from './SingleBook'

interface ListBookProps{
  books:Book[]
  dispatch:React.Dispatch<Action>
}

function ListBook({books,dispatch}:ListBookProps) {
  return (
    <div className='flex gap-2 container mx-auto flex-wrap items-center justify-center'>
      {
        books.map((book)=>[
          <SingleBook key={book.id} book={book} dispatch={dispatch} />
        ])
      }
    </div>
  )
}

export default ListBook