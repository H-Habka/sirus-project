import React from 'react';
import { Player, ControlBar } from 'video-react';
import Container  from 'react-bootstrap/Container';
const ProfileTab = () => {
    return (
        <>
            <Container className="mt-5 bg-white rounded p-5">
                <h2 className=' text-center'> Bio </h2>
                <div className="row pt-5">
                    <div className="col-lg-6 col-md-12 video">
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                    </div>
                    <div className="col-lg-6 col-md-12 bio pt-5">
                        <p>
                            I'm Marwan. I'm a sustainable growth and marketing lover who's a fan of over-engineering things. I'm the founder and CEO of nejmy, working on some great projects
                            with an incredible team.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProfileTab;
