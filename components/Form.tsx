import React from 'react'

const FormSubmit = () => {
    return (
        <div>

            <div className="space-y-12 shadow-2xl p-12">


                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 ">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Your name</label>
                            <div className="mt-2">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Date of birth</label>
                            <div className="mt-2">
                                <input type="date" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>



                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Your phone number</label>
                            <div className="mt-2">
                                <input type="" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none pl-3 rounded-xl sm:text-sm sm:leading-6" />
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
                            <button className='mt-4 mx-1 sm:mx-3 md:mt-12 mb-4  flex items-center justify-center  text-center transition-all duration-200 montserrat  text-base md:text-[18px]  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-4 xl:px-10'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSubmit;