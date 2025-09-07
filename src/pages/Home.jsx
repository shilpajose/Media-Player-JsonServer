import {React,useState} from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState(" ");
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState(" ");
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse} />
      <Link to="/watch" className="btn btn-primary" style={{borderRadius: '5px'}}>View History</Link>
    </div>
    <div className="container-fluid row mt-5 mb-5">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse} />
      </div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-between">
          <Category removeCategoryVideoResponse={removeCategoryVideoResponse} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home