import React from 'react'
import { CrownIcon } from 'lucide-react'
import {ModeToggle} from "@/components/ToggleMode" 


function Header() {
  return (
    <div className='flex justify-between  px-4 py-2 border-b border-foreground items-center'>
        <CrownIcon />
        <ModeToggle />
    </div>
  )
}

export default Header