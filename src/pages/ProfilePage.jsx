import { getAuth } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";

export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    //Check if currentUser is logged in
    if (!currentUser) {
        navigate("/login"); //Redirect to login if user is not logged in
    }

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <Container>
                <Row>
                    <ProfileSideBar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}