import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../store/reducers/postSlice";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/reducers/userSlice";
function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const isValid = Boolean(title) && Boolean(content)
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(postAdded(title, content, userId));
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form action="">
          <input type="text" onChange={onTitleChange} placeholder="Title" />
          <input type="text" onChange={onContentChange} placeholder="Content" />
          <select onChange={onUserChange} id="">
            {userOptions}
          </select>
          <button disabled={!isValid} onClick={onSubmitHandle}>Отправить</button>
        </form>
      </section>
    </div>
  );
}

export default PostForm;
