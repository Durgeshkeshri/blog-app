import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='w-full border border-teal-500 hover:border-2 h-[350px] rounded-lg sm:w-[430px] lg:w-[360px]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[200px] w-full  object-cover z-20 rounded-lg'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='font-mono text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center py-2 rounded-md m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
