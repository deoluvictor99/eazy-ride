"use client"

// packages
import { Combobox, Transition} from '@headlessui/react';
import { Fragment } from 'react';

// Nextjs
import Image from 'next/image'

// hooks
import { useState } from 'react';

// constants
import { manufacturers } from '@/constants';

// types
import { setManufacturerProps } from '@/types'




const SearchManufacturer = ({manufacturer, setManufacturer} : setManufacturerProps) => {

    const [query, setQuery] = useState('');

    const filteredManufacturers = query === ""? [] : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))


    return (
        <div className='flex w-full mt-2'>
            <Combobox
                value={manufacturer}
                onChange={setManufacturer}
            >
                <div className='relative w-full'>
                    <Combobox.Button>
                        <Image
                            src={"/mercedes-benz-9-logo-svgrepo-com.svg"}
                            alt="car logo"
                            width={20}
                            height={20}
                            className='w-[1.25rem] absolute top-1/2 left-2 -translate-y-1/2 '
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        placeholder="Mercedes-Benz"
                        className={"px-8  py-3 w-full outline-none"}
                        displayValue={(manufacturer:string) => 
                            manufacturer
                        }
                        onChange={(e) => {setQuery(e.target.value)}}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-light py-1 taxt-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            {filteredManufacturers.length === 0 && query !== "" ?
                                (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) : (
                                    filteredManufacturers.map((item:string) => (
                                        <Combobox.Option 
                                            key={item} 
                                            value={item}
                                            className={({active}) => `
                                                    relative cursor-default select-none py-2 pl-10 pr-4
                                                    ${active? 'bg-main text-white': 'text-primary'}
                                                `
                                            }
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`block truncate 
                                                            ${selected ? 'font-bold ' : 'font-normal'
                                                        }`}
                                                    >
                                                        {item}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 
                                                                ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                        />
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer;
