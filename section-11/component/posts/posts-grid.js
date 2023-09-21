import PostItem from './posts-item';
import classes from './posts-item.module.css'
// import PostsGrid from './posts-grid'

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
