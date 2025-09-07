import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../services/allApi';

function Add({setUploadVideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    caption: "", imageUrl: "", youtubeLink: ""
  })
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  // console.log(uploadVideo);
  const handleClose = () => {
    setShow(false);
    setUploadVideo({ ...uploadVideo, caption: "", imageUrl: "", youtubeLink: "" })
  }


  // Embed video
  const getYoutubeEmbedLink = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11);
      setUploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${videoId}` });
    } else {
      setUploadVideo({ ...uploadVideo, youtubeLink: " " })
      alert("Please enter a valid youtube link")
    }
  }

  // upload video
  const handleUpload = async () => {
    const { caption, imageUrl, youtubeLink } = uploadVideo;
    if (caption && imageUrl && youtubeLink) {
      const result = await uploadVideoAPI(uploadVideo)
      if (result.status >= 200 && result.status < 300) {
        alert(`Video ${result.data.caption} uploaded successfully`)
        setUploadVideoResponse(result.data);
        handleClose();
      } else {
        alert("Failed to upload video");
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload Video</h5>
        <button onClick={handleShow} style={{ borderRadius: '5px' }} className='btn btn-primary ms-2'><i className="fas fa-upload"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>Please fill the following details:</p>
            <FloatingLabel controlId="floatinginputcaption" label="Video caption" className="mb-3">
              <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Enter video caption" />
            </FloatingLabel>
            <FloatingLabel controlId="imgurl" label="Image URL" className="mb-3">
              <Form.Control value={uploadVideo.imageUrl} onChange={e => setUploadVideo({ ...uploadVideo, imageUrl: e.target.value })} type="text" placeholder="Enter image URL" />
            </FloatingLabel>
            <FloatingLabel controlId="videourl" label="Video URL" className="mb-3">
              <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Enter video URL" />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{ borderRadius: '5px' }} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload} style={{ borderRadius: '5px' }}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add