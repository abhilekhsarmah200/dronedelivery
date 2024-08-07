import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className={
        'bg-[#2463EB] border-x-0 border-b-0 border-t-white border p-[2.5rem] '
      }
    >
      <div className='flex lg:flex-row flex-col gap-2 justify-between lg:items-center'>
        <div className={'flex gap-2'}>
          <FaFacebook className='text-[1.5rem]' />
          <FaTwitter className='text-[1.5rem]' />
          <FaInstagram className='text-[1.5rem]' />
        </div>
        <div className={'styles.links'}>
          <Link href='/#'>Privacy Policy</Link>
          <Link href='/#'>Terms of Service</Link>
        </div>
      </div>
      <div className='mt-3'>Copyright © skydine. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
