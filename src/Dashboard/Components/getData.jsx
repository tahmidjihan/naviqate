import React, { useState } from 'react';

function GetData({ id }) {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = () => {
    const modal = document.getElementById(`data_modal_${id}`);
    setSelectedId(id);
    modal.showModal();
  };
  const handleClose = () => {
    const modal = document.getElementById(`data_modal_${id}`);
    setSelectedId(null);
    modal.close();
  };
  return (
    <>
      <span
        onClick={() => handleClick()}
        className='text-cyan-600 font-semibold cursor-pointer'
      >
        See more
      </span>
      <dialog id={`data_modal_${id}`} className='modal text-start'>
        <div className='modal-box'>
          <div>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
              ✕
            </button>
          </div>
          <h3 className='font-bold text-lg text-black'>Add data !</h3>
          <div>
            <div className='overflow-x-auto s-table rounded-box border border-base-content/5 bg-base-100'>
              <table className='table'>
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default GetData;
