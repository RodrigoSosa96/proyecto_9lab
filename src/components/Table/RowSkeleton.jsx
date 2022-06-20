import React from 'react'

const RowSkeleton = ({span = 4}) => {
  return (
    <>
      {
        Array.from({ length: span }).map((_, i) => (

          <tr className="animate-pulse" key={i}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" disabled />
              </label>
            </th>
            <td className="align-top w-fit">
              <div className="flex items-center space-x-3">
                <div className="avatar bg-gray-500 opacity-50 rounded">
                  <div className="mask w-12 h-16 ">
                  </div>
                </div>
                <div>
                  <div className='w-48 flex flex-col gap-1 '>
                    <div className="h-4 w-full bg-gray-500 opacity-50 rounded"></div>
                    <div className="h-4 w-8/12 bg-gray-500 opacity-50 rounded"></div>
                  </div>
                </div>
              </div>
            </td>

            <td className='' colSpan={4}>
              <div className="h-3 bg-gray-500 opacity-50 rounded mb-2"></div>
              <div className="h-3 bg-gray-500 opacity-50 rounded"></div>

            </td>
            <td className='w-4' >
              <button className="btn  btn-outline btn-sm " disabled>Modificar</button>
            </td>
          </tr>
        ))
      }
    </>
  )
}

export default RowSkeleton