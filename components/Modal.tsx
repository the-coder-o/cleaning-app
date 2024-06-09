import React, { useState } from 'react';
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Button } from './ui/button';

const Modal = () => {
  const [name, setName] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const token = '6997142985:AAHyCSd__KMKTdQ-3F5WWq9E16agEw_1shA';
    const chatId = -4207888380;
    const textMessage = `New request:%0A - Name: ${encodeURIComponent(name)}%0A - Cleaning description: ${encodeURIComponent(descriptionText)}%0A - Phone number: ${encodeURIComponent(phone)}%0A - Email: ${encodeURIComponent(email)}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${textMessage}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  };
  return (
    <div className=''>
      <DialogContent className='bg-white '>
        <DialogHeader className='space-y-6'>
          <DialogTitle className='text-black'>Are you absolutely sure?</DialogTitle>
          <DialogDescription className='text-black'>
            <form id='form' onSubmit={handleSubmit}>
              <Label className='mt-4'>Your name</Label>
              <Input
                id='name'
                type='text'
                placeholder='Enter your full name'
                className='py-2 border-2 border-gray-300 rounded-[5px] outline-none mt-2'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className='my-4'>
                <Label className='mt-4'>What type of Cleaning Services Do You Need?</Label>
                <Textarea
                  id='textarea'
                  placeholder='Type your message here.'
                  className='py-2 border-2 border-gray-300 rounded-[5px] outline-none mt-2'
                  value={descriptionText}
                  onChange={(e) => setDescriptionText(e.target.value)}
                />
              </div>
              <Label className='mt-4'>Your phone number</Label>
              <div className='border-2 mb-4 border-gray-300 rounded-[5px] outline-none mt-2'>
                <PhoneInput
                  defaultCountry='us'
                  value={phone}
                  onChange={setPhone}
                  className='border-none border-color phone-number'
                  placeholder='+1(999) 999-999-9999'
                />
              </div>
              <Label className='mt-4'>Your email (optional)</Label>
              <Input
                id='email'
                className='w-full py-2 border-2 border-gray-300 rounded-[5px] outline-none mt-2'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='flex flex-col'>
                <Label className='mt-4'>How do you prefer to be contacted?</Label>
                <select className='w-full py-2 border-2 border-gray-300 rounded-[5px] outline-none mt-2'>
                  <option>Phone Call</option>
                  <option>Email</option>
                  <option>Message</option>
                </select>
              </div>
          <DialogClose asChild>
            <Button className='block mt-4 rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none' type="submit" onSubmit={handleSubmit} >
              submit
            </Button>
          </DialogClose>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default Modal;
