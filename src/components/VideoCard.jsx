import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { saveHistoryAPI ,removeVideoAPI} from '../services/allApi';

function VideoCard({ displayData, setDeleteVideoResponse, insideCategory }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // get video details
    const { caption, youtubeLink } = displayData;
    let timeData = new Date();
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format(timeData);
    console.log(timeStamp);
    await saveHistoryAPI({ caption, youtubeLink, timeStamp });
  }

  // delete video
  const deleteVideo = async(id) => {
    const result = await removeVideoAPI(id);
    if (result?.status === 200) {
      setDeleteVideoResponse(result.data);
    }
  }
  // drag and drop
  const dragStarted = (e, id) => {
    e.dataTransfer.setData("videoId", id);
    console.log(`Dragging started ${id}`);
  }

  return (
    <>

      <Card className='shadow' draggable onDragStart={(e)=>dragStarted(e,displayData.id)}>
        <Card.Img variant="top" src={displayData?.imageUrl} onClick={handleShow} width="100%" height="180" />
        <Card.Body>
          <Card.Title>{displayData?.caption}</Card.Title>
          {!insideCategory && <button onClick={() => deleteVideo(displayData.id)} style={{ borderRadius: '8px', background: '#2d323b', border: 'none', padding: '6px 12px' }} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={displayData?.youtubeLink + '?autoplay=1'} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard