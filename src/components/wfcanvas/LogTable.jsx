
import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { fetcWorflowLogs } from "../../service/workflow";
import _ from 'underscore';
import moment  from "moment";


const LogTable = ({ workflowId, showLogs, handleToggle }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetcWorflowLogs(workflowId).then((data) => {
      console.log('data', data);
      setItems(_.sortBy(data.items, 'startedOn'));
    }
    );
  }, [])

  return (
    <Transition.Root show={showLogs} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xl m-2">

            <Dialog.Panel>
              <Transition.Child>
                <div className="flex flex-col space-y-4 overflow-y-auto h-screen">
                  {items.map((item, index) => (
                    <div key={item.id} className="relative rounded-e-full p-4 bg-orange-400">
                      <div className="absolute h-full w-1 bg-gray-100 left-2 top-0"></div>
                      <div className="flex space-x-4">
                        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center">
                          <span className="text-white">{index + 1}</span>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold text-gray-800">{item.id}</h2>
                          <p>Started On: {moment(item.startedOn).format('YYYY-MM-DD HH:mm:ss')}</p>
                          <p>Completed On: {moment(item.completedOn).format('YYYY-MM-DD HH:mm:ss')}</p>
                          <p>Duration: {item.duration || 'N/A'}</p>
                          <div className="flex items-center">
                            <p>Status:</p>
                            {item.status === 'Completed' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </div>
                          <p>Status Detail: {item.statusDetail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </Transition.Child>
            </Dialog.Panel>

          </Dialog.Panel >
        </Transition.Child >
      </Dialog >
    </Transition.Root >
  )
}

export default LogTable;