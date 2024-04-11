import Post from "../Post/Post"
import "./PostList.css"


const PostList = ({posts}) => {
  const postArray = posts.map((post) => {
      /* Returning a Post component with the props of key, title, image, date, and info.
      Values from the Google sheet are passed to PostList as arguments later */
      return <Post key={post} title={post.titles} image={post.images} date={post.dates} info={post.info} />
  })
  return (
    <div className="posts">
      {/* Rendering the postArray. */}
      {postArray}
    </div>
  )
}

export default PostList;