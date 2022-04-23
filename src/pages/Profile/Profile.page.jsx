import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BootstrapProfile from '../../components/Headers/ProfileHeader/ProfileHeader.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { connect } from 'react-redux';

const Profile = ({ children, currentUser }) => {

  const { id } = useParams()


  return (
    <>
      <Container fluid className='py-4'>
        <BootstrapProfile currentUser={currentUser} id={id} />

        <Container fluid className='bg-gray p-0'>
          <div className="row">
            <div className="col-12">
              {children}
            </div>
          </div>
        </Container>

      </Container>
    </>
  );
};



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(Profile);
