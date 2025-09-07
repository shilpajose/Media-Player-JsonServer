import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistoryAPI, removeHistoryAPI } from '../services/allApi';
function Watch() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const result = await getAllHistoryAPI();
    setHistory(result.data);
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  console.log(history);

  // delete history
  const deleteHistory = async (id) => {
    await removeHistoryAPI(id);
    fetchHistory();
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-3 p-5 text-center">
        <h1>Watch History</h1>
        <Link to="/home"><i className="fa-solid fa-home"></i> Go to Home Page</Link>
      </div>
      <div className='container table-responsive'>
        <table className='table mt-5 mb-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Video Link</th>
              <th>Time Stamp</th>
              <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? history?.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video.caption}</td>
                <td><a className='text-info' href={video.youtubeLink} target="_blank" rel="noopener noreferrer">{video.youtubeLink}</a></td>
                <td>{video.timeStamp}</td>
                <td><button className='btn' onClick={() => deleteHistory(video.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
            ))
              : <div className='text-center fs-3 text-danger'>No Watch History Found</div>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watch

