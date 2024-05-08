import React from 'react'
import { Button } from '../ui/button';

export const UploadCSV = () => {
    return (
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-20 mt-20 border-2  w-fit p-5 bg-gray-100">
              <p className="px-5 text-3xl">Uplod your file</p>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Choose file
              </Button>
            </div>
          </div>
        </div>
      );
}
