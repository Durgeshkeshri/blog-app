import aboutpic from '../../images/about.png';
export default function About() {
  return (
    <div className='min-h-[90vh] flex flex-col items-center justify-center'>
      <img src={aboutpic} className='self-center w-52' alt="" />
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
              as a personal project to share his thoughts and ideas with the
              world. Sahand is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahand is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
