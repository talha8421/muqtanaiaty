import { IdIcon } from '@/components/app-icons/Icons'
import InputField from '@/components/globals/InputField'
import React from 'react'

function IdProofForm() {
  return (
   <div className='w-full h-fit flex flex-col gap-9.25'>

        <h2 className=' text-[22px] text-supportiveBlue'>Verification details</h2>
        <form action="" className='flex flex-col gap-4.25'>
            <InputField
            title={"National ID"}
            prefixIcon={<IdIcon />}
            placeholder={"Enter your ID"}
            
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          
        </form>
    </div>
  )
}

export default IdProofForm