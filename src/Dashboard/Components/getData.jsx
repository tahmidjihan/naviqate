import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

function GetData({ id }) {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(null);
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
  useEffect(() => {
    if (selectedId) {
      axios
        .get(`${import.meta.env.VITE_BACKEND}/getData?db_id=${selectedId}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    }
  }, [selectedId]);
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
            <button
              onClick={() => handleClose()}
              className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'
            >
              ✕
            </button>
          </div>
          <h3 className='font-bold text-lg text-black'>
            Get data of database !
          </h3>
          <div>
            <div className='overflow-x-auto s-table rounded-box border border-base-content/5 bg-base-100'>
              {data ? (
                <table className='table'>
                  {/* head */}
                  <thead>
                    <tr>
                      {Object.keys(data[0].data).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {data.map((item, index) => (
                      <tr key={index}>
                        {Object.values(item.data).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                        <td>{item.undone == true ? 'Pending' : 'Done'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <>
                  <div className='badge badge-info'>
                    <FaCircleInfo />
                    <span className='ml-2'>No data found</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default GetData;
