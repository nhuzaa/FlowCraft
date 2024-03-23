import React from 'react';

const MyForm = () => {
  return (
    <div className="container mx-auto p-8 text-color-white">
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="credential">
          Credential to connect with
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="credential" type="text" placeholder="Select Credential" />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="pollTimes">
          Poll Times
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="pollTimes" type="text" placeholder="Select"  />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="event">
          Event
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="event" type="text" placeholder="Select"  />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="simplify">
          Simplify
        </label>
        <input className="mt-1" type="checkbox" id="simplify" name="simplify" />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="filters">
          Filters
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="filters" type="text" placeholder="Add Filter"  />
      </div>
    </div>
  );
};

export default MyForm;