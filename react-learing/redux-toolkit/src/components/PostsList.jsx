import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPost } from './../store/reducers/postSlice';
import PostUser from "./PostUser";
import { useEffect } from "react";

function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(state => state.posts.status)
  const postsError = useSelector(state => state.posts.error)
  useEffect(() => {
    if(postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])
  return (
    <div>
      {postsError && postsError}
      <section>
        <h2>Posts</h2>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <PostUser userId={post.userId} />
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default PostsList;
