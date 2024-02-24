
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../store/reducers/userSlice';



function PostUser({userId}) {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)

    return ( <span>by {author ? author.name : 'Unknown author'}</span> );
}

export default PostUser;