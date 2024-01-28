import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import blogpic from '../../images/blogpic.png';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='min-h-[90vh] flex px-[6vw] justify-center items-center max-lg:flex-col-reverse'>

      <div className='flex flex-col gap-6 max-w-6xl mx-auto lg:-mr-8'>
        <h1 className='text-3xl font-bold lg:text-5xl xl:text-6xl 2xl:text-[4.4rem]'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm lg:pr-2'>
        Discover a wealth of articles on travel, nature, recipes, art, DIY, and more! Dive into our community of exploration and inspiration. Join us in uncovering the wonders of the world, one article at a time.
        </p>
        
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

       <div className=" xl:w-[950px] lg:w-[750px] 2xl:w-[1150px] md:w-[700px]  max-md:w-auto">
        <img src={blogpic} alt="" />
       </div>

      {/* <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div> */}

    </div>
  );
}
