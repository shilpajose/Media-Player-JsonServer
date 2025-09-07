import { React, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getACategoryAPI, getAllVideosAPI, updateCategoryAPI } from '../Services/allApi';

function View({uploadVideoResponse, setRemoveCategoryVideoResponse}) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("");

  const getAllVideos = async () => {
    let result = await getAllVideosAPI();
    // console.log(result);
    if (result?.status === 200) {
      // console.log(result?.data);
      setAllVideos(result?.data);
    }
  }
  useEffect(() => {
    getAllVideos();
  }, [uploadVideoResponse, deleteVideoResponse])
  // console.log('allVideos', allVideos);

  const dragOverView = (e) => {
    e.preventDefault();
    console.log("Drag over view");
  }
  const handleCategoryVideo = async (e) => {
    e.preventDefault();
    let {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"));
    console.log("Video dropped on view:", videoId, "from category:", categoryId);
    // Logic to handle video drop on view
    const {data} = await getACategoryAPI(categoryId);
    console.log(data);
    const updatedVideoList = data.allVideos.filter(item=>item.id!==videoId);
    console.log(updatedVideoList);
    const{id,categoryName} = data;
    const result = await updateCategoryAPI(id,{categoryName,allVideos:updatedVideoList});
    setRemoveCategoryVideoResponse(result?.data);
  }
  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        {allVideos?.length > 0 ? allVideos?.map((video, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
          </Col>
        ))
          :
          <div>No videos found</div>

        }
      </Row>
    </>
  )
}

export default View