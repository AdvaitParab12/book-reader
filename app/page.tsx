"use client"
import React from 'react'
import { useReducer } from 'react'

import AddBook from '@/components/AddBook'
import ListBook from '@/components/ListBook'
import { booksReducer } from '@/lib/reducer'
import { sampledata } from '@/lib/sampleData'
function page() {
  const [books, dispatch] = useReducer(booksReducer, sampledata)
  return (
    <div>

      <AddBook dispatch={dispatch} />
      <ListBook books={books} dispatch={
        dispatch
      } />
    </div>
  )
}

export default page