import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='w-full border border-red-500 hover:border-2 h-[350px] rounded-lg sm:w-[430px] lg:w-[360px] max-sm:w-[320px]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='max-h-[180px] w-full object-fill z-20 rounded-lg'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className=' text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-2 rounded-md m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
