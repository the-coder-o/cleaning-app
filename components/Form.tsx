import React, { useState } from 'react'

const FormSubmit = () => {
    const [name, setName] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
  
      const token = '6997142985:AAHyCSd__KMKTdQ-3F5WWq9E16agEw_1shA';
      const chatId = -4207888380;
      const textMessage = `New request:%0A - Name: ${encodeURIComponent(name)}%0A - Date of submition: ${encodeURIComponent(descriptionText)}%0A - Phone number: ${encodeURIComponent(phone)}%0A - Email: ${encodeURIComponent(email)}`;
  
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${textMessage}`;
      const api = new XMLHttpRequest();
      api.open('GET', url, true);
      api.send();
      e.target.value = ''
    };
    return (
        <div>
            <div className="space-y-12 shadow-2xl p-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <form onSubmit={handleSubmit} className="mt-10 ">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Your name</label>
                            <div className="mt-2">
                                <input onChange={(e)=> setName(e.target.value)} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Date of birth</label>
                            <div className="mt-2">
                                <input onChange={(e)=>setDescriptionText(e.target.value)} type="date" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Your phone number</label>
                            <div className="mt-2">
                                <input onChange={(e)=>setPhone(e.target.value)} type="" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">What Position Are You Interested In ?</label>
                            <div className="mt-2">
                                <select id="country" name="country" autoComplete="country-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl  sm:text-sm sm:leading-6">
                                    <option>
                                        Carpet and Air Duct Cleaning Technician
                                    </option>
                                    <option>
                                        Janitorial Technician
                                    </option>
                                    <option>
                                        Marketing & Sales Representative Technician
                                    </option>
                                </select>
                            </div>
                            <button className='mt-3 w-full text-[14px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSubmit;