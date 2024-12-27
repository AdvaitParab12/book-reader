"use client"
import React from 'react'
import { useReducer } from 'react'
import { LampDemo } from '@/components/ui/lamps'


import AddBook from '@/components/AddBook'
import ListBook from '@/components/ListBook'
import { BooksReducer } from '@/lib/reducer'
import { sampledata } from '@/lib/sampleData'
function Page() {
  const [books, dispatch] = useReducer(BooksReducer, sampledata)
  return (
    <div>
      <LampDemo />
      <AddBook dispatch={dispatch} />
      <ListBook books={books} dispatch={
        dispatch
      } />
    </div>
  )
}

export default Page