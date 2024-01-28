import { Footer } from 'flowbite-react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 dark:bg-slate-950'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='w-full flex items-center justify-between'>
          <Footer.Copyright
            href='#'
            by="Nisha Prajapati"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsYoutube}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
