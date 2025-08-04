import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useCallback } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

function GetData({ id }) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['data', id], // Include id in queryKey for proper caching
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/getData?db_id=${id}`
      );
      return response.data;
    },
    enabled: false, // Disable automatic fetching
  });

  const handleOpen = useCallback(() => {
    const modal = document.getElementById(`data_modal_${id}`);
    modal?.showModal();
    refetch(); // Fetch data when modal opens
  }, [id, refetch]);

  const handleClose = useCallback(() => {
    const modal = document.getElementById(`data_modal_${id}`);
    modal?.close();
  }, [id]);

  const handleDelete = useCallback(
    async (itemId) => {
      try {
        await axios.delete(`http://localhost:3000/deleteData?id=${itemId}`);
        refetch(); // Refresh data after deletion
      } catch (error) {
        console.error('Delete error:', error);
      }
    },
    [refetch]
  );

  const hasData = Array.isArray(data) && data.length > 0;
  const firstItemKeys =
    hasData && data[0]?.data ? Object.keys(data[0].data) : [];

  return (
    <>
      <span
        onClick={handleOpen}
        className='text-cyan-600 font-semibold cursor-pointer'
      >
        See more
      </span>

      <dialog id={`data_modal_${id}`} className='modal text-start'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <button
            onClick={handleClose}
            className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'
            aria-label='Close modal'
          >
            ✕
          </button>

          <h3 className='font-bold text-lg text-black'>
            Get data of database!
          </h3>

          <div className='overflow-x-auto s-table rounded-box border border-base-content/5 bg-base-100 mt-4'>
            {isLoading ? (
              <div className='text-center py-6'>
                <span className='loading loading-spinner loading-lg'></span>
              </div>
            ) : isError ? (
              <div className='alert alert-error m-4'>Failed to load data</div>
            ) : hasData ? (
              <table className='table text-gray-600 font-normal'>
                <thead>
                  <tr>
                    <th>#</th>
                    {firstItemKeys.map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item._id || index}>
                      <td>{index + 1}</td>
                      {Object.values(item?.data || {}).map((value, i) => (
                        <td key={i}>{String(value)}</td>
                      ))}
                      <td>{item?.undone ? 'Pending' : 'Done'}</td>
                      <td>
                        <button
                          className='btn btn-sm btn-error'
                          onClick={() => handleDelete(item.id)}
                          disabled={isLoading}
                        >
                          Delete
                        </button>
                      </td>
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
