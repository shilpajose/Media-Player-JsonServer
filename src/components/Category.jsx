import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { saveCategoryAPI, getCategoryAPI, removeCategoryAPI, getAVideoAPI, updateCategoryAPI } from '../services/allApi';
import VideoCard from './VideoCard';
function Category({removeCategoryVideoResponse}) {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  }
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    // Logic to add category
    if (categoryName) {
      const result = await saveCategoryAPI({ categoryName, allVideos: [] });
      if (result) {
        handleClose();
        getAllCategories();
      } else {
        alert("Failed to add category. Please try again.");
      }
    }
    console.log("Category added:", categoryName);
  }

  const getAllCategories = async () => {
    const result = await getCategoryAPI();
    setCategories(result.data);
  }

  useEffect(() => {
    getAllCategories();
  }, [removeCategoryVideoResponse])
  // console.log(categories, 'categories');

  const handleRemoveCategory = async (id) => {
    await removeCategoryAPI(id);
    getAllCategories();
  }

  const dragOverCategory = (e) => {
    e.preventDefault();
    console.log("Drag over category");
  }
  const videoDropped = async (e, categoryId) => {
    let videoId = e.dataTransfer.getData("videoId");
    console.log("Video dropped:", videoId, "on category:", categoryId);
    const { data } = await getAVideoAPI(videoId);
    console.log(data);
    // get category details where we have added video
    let selectedCategory = categories.find(cat => cat.id === categoryId);
    selectedCategory.allVideos.push(data);
    console.log('selectedCategory:', selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory);
    getAllCategories();
  }
  const videoDragStarted = (e, videoId, categoryId) => {
    console.log(`Dragging video ${videoId} from category ${categoryId}`);
    let datashare = { videoId, categoryId }
    e.dataTransfer.setData("removeVideoDetails", JSON.stringify(datashare));
  }
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <h3 className="mb-0">All Categories</h3>
          </div>
          <div className="col-auto">
            <button onClick={handleShow} style={{ width: '60px', height: '60px' }} className='btn btn-success rounded-circle fs-5'> + </button>
          </div>
        </div>
        <div className="p-4">
          {categories && categories.length > 0 ? (
            categories.map((category, index) => (
              <div droppable="true" onDragOver={(e) => dragOverCategory(e)} onDrop={(e) => videoDropped(e, category.id)} key={index} className="mb-4">
                <div className="d-flex justify-content-between align-items-center category-item py-2 px-3 mb-2 border">
                  <h5>{category.categoryName}</h5>
                  <button onClick={() => handleRemoveCategory(category.id)} className='btn btn-sm'><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                <div className='row mt-3'>
                  {category.allVideos?.length > 0 ? (
                    category.allVideos.map((video, vidIndex) => (
                      <div draggable onDragStart={(e) => videoDragStarted(e, video.id, category.id)} key={vidIndex} className='col-md-3 col-lg-6 mb-3'>
                        <VideoCard insideCategory={true} displayData={video} />
                      </div>
                    ))
                  ) : (
                    <div className='col-12 text-muted'>No videos in this category.</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="category-item py-2 px-3 mb-2">
              No categories found.
            </div>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Category Name" className="mb-3">
              <Form.Control value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ borderRadius: '5px' }}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary" style={{ borderRadius: '5px' }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category