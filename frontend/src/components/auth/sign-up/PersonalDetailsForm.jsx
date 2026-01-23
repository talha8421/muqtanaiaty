import { EmailIcon, PhoneIcon, User } from '@/components/app-icons/Icons'
import InputField from '@/components/globals/InputField'
import React from 'react'

function PersonalDetailsForm() {
  return (
    <div className='w-full h-fit flex flex-col gap-9.25'>

        <h2 className=' text-[22px] text-supportiveBlue'>Tell us about yourself</h2>
        <form action="" className='flex flex-col gap-4.25'>
            <InputField
            title={"Full Name"}
            prefixIcon={<User />}
            placeholder={"Enter your full name"}
            
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
            <InputField
            title={"Email"}
            prefixIcon={<EmailIcon size={22}/>}
            placeholder={"Enter your email"}
            
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
            <InputField
            title={"Phone"}
            prefixIcon={<PhoneIcon />}
            placeholder={"Enter your phone number"}
            
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </form>
    </div>
  )
}

export default PersonalDetailsForm