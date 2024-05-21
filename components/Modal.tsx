import React, { useState } from 'react'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { PhoneInput } from 'react-international-phone'

const Modal = () => {
    const [phone, setPhone] = useState('');
  return (
    <div>
        <DialogContent className='bg-white rounded-2xl'>
              <DialogHeader className='space-y-6'>
                <DialogTitle className='text-black'>Are you absolutely sure?</DialogTitle>
                <DialogDescription className='text-black'>
                  <Label>Your name</Label>
                  <Input type='text' placeholder='Enter your full name' />

                  <div className="my-4">
                    <Label>What type of Cleaning Services Do You Need ?
                    </Label>
                    <Textarea placeholder="Type your message here." className='mt-1' />
                  </div>

                  <Label>Your phone number</Label>
                  <div className='border-[1.5px] mb-4 border-black '>
                    <PhoneInput
                      defaultCountry="us"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      className='border-none border-color'
                      placeholder='+1(999) 999-999-9999'
                    />
                  </div>
                  <Label>Your email (optional)</Label>
                  <Input type='email' placeholder='Email' />

                  <div className="flex flex-col">

                    <Label>How do you pefer to be contacted on ?</Label>

                    <select>

                      <option>Phone Call</option>
                      <option>Email</option>
                      <option>Message</option>
                    </select>

                  </div>



                </DialogDescription>
              </DialogHeader>
            </DialogContent>
    </div>
  )
}

export default Modal