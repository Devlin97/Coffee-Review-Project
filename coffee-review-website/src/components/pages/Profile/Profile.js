import '../../../App.css'
import PostHistory from './PostHistory';

function Profile() {

    console.log(localStorage.getItem('loginUsername'));
    return (
        <>
            <PostHistory />
        </>
    )
}

export default Profile;