import aboutpic from '../../images/about.png';
export default function About() {
  return (
    <div className='min-h-[90vh] flex flex-col items-center justify-center'>
      <img src={aboutpic} className='self-center w-52' alt="" />
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <div className='text-md font-normal text-gray-800 dark:text-gray-400 flex flex-col gap-6'>
            <p>
              Welcome to my blog! I'm Nisha Prajapati, your curator of all things creative and captivating. Explore with me as we dive into the realms of travel, nature, recipes, art, DIY, personal reflections, lifestyle, and photography. Let's embark on a journey of discovery, where each click unveils a new adventure and every word paints a vivid picture. Join me, and let's craft unforgettable moments together.
            </p>

            <p>
            With passion,
              Nisha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
