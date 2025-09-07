import { useNavigate } from 'react-router-dom';
import cartoon from '../assets/images/cartoon.png';
import Card from 'react-bootstrap/Card';

function LandingPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('./home');
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player app will allow you to play and manage your music collection with ease.Also helps in arranginging in different categories</p>
            <button onClick={handleNavigate} className='btn btn-info' style={{ borderRadius: '20px' }}>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img style={{ width: '100%', height: 'auto' }} src={cartoon} alt="Landing Image" />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src='https://i.pinimg.com/originals/04/a2/cc/04a2cc1c7d7b194d56c70c6d90bb80cc.gif' height={'300px'} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src='https://cdn.dribbble.com/userupload/41791968/file/original-46dea92513a86deecb06a53fd949eeac.gif' height={'300px'} />
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/4f/b5/93/4fb593d66020e028420569453329010c.gif" height={'300px'} />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="video row border m-5 p-5 align-items-center">
          <div className="col-lg-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro, cumque in corrupti sunt aspernatur inventore, quo fugiat voluptatum vel magni reiciendis. Beatae natus fugit explicabo aut iusto obcaecati nisi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur explicabo quam exercitationem, officiis consequuntur provident porro dolorem debitis excepturi iusto cumque maxime delectus! Alias iste eveniet magnam accusamus esse?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium molestiae ad, placeat voluptates maiores beatae repudiandae adipisci officia veniam temporibus atque sed molestias reprehenderit exercitationem! Repellendus error corporis consequatur!</p>
          </div>
          <div className="col-lg-6">
           <iframe width="100%" height="480" src="https://www.youtube.com/embed/SqcY0GlETPk" title="React Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage