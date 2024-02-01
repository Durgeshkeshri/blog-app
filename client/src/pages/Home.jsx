import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import blogpic from '../../images/blogpic.png';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=3');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className='lg:min-h-[90vh] min-h-[85vh] flex px-[6vw] max-md:gap-3 max-lg:gap-4 justify-center items-center max-lg:flex-col-reverse'>

        <div className='flex flex-col lg:gap-6 md:gap-6 max-md:gap-3 max-w-6xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-[4.4rem] max-lg:text-center'>Welcome to my Blog</h1>
          <p className='text-gray-500 text-xs max-sm:text-[0.8rem] sm:text-lg md:text-xl lg:text-sm 2xl:text-[1.1rem] lg:pr-4 max-lg:text-center max-md:px-2 max-lg:px-10'>
            Discover a wealth of articles on travel, nature, recipes, art, DIY, and more! Dive into our community of exploration and inspiration. Join us in uncovering the wonders of the world, one article at a time.
          </p>

          <Link
            to='/search'
            className='text-xs sm:text-sm text-red-500 font-bold hover:underline max-lg:text-center'
          >
            View all posts
          </Link>
        </div>

        <div className=" xl:w-[700px] lg:w-[600px] 2xl:w-[850px] md:w-[500px] sm:w-[400px] max-sm:w-[300px] lg:-mt-[3vh] xl:-mt-[5vh] 2xl:-mt-[7vh]">
          <img src={blogpic} alt="" />
        </div>
      </div>
      <hr className="border-inherit dark:border-gray-700"/>
      <div id='blogs' className='max-w-6xl min-h-[90vh] mx-auto p-3 flex flex-col gap-8 py-7 items-center justify-center'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-red-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

    </>
  );
}
