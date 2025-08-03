import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

function GetData({ id }) {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setSelectedId(id);
    const modal = document.getElementById(`data_modal_${id}`);
    modal?.showModal();
  };

  const handleClose = () => {
    setSelectedId(null);
    const modal = document.getElementById(`data_modal_${id}`);
    modal?.close();
  };

  useEffect(() => {
    if (selectedId) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND}/getData?db_id=${selectedId}`)
        .then((res) => {
          setData(Array.isArray(res.data) ? res.data : []);
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setData([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedId]);

  return (
    <>
      <span
        onClick={handleClick}
        className='text-cyan-600 font-semibold cursor-pointer'
      >
        See more
      </span>
      <dialog id={`data_modal_${id}`} className='modal text-start'>
        <div className='modal-box'>
          <button
            onClick={handleClose}
            className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'
          >
            ✕
          </button>
          <h3 className='font-bold text-lg text-black'>
            Get data of database!
          </h3>
          <div className='overflow-x-auto s-table rounded-box border border-base-content/5 bg-base-100 mt-4'>
            {loading ? (
              <div className='text-center py-6'>Loading...</div>
            ) : data.length > 0 ? (
              <table className='table'>
                <thead>
                  <tr>
                    {Object.keys(data[0]?.data || {}).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item?.data || {}).map((value, i) => (
                        <td key={i}>{value}</td>
                      ))}
                      <td>{item?.undone ? 'Pending' : 'Done'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className='badge badge-info m-4 flex items-center'>
                <FaCircleInfo className='mr-2' />
                No data found
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}

export default GetData;
