import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  BrandYoutube,
  BrandWhatsapp,
} from 'tabler-icons-react';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      {
        name: 'About Us',
        href: '/about',
      },
      {
        name: 'Our Team',
        href: '/team',
      },
      {
        name: 'Track a parcel',
        href: '/track',
      },
    ],
  },
  policies: {
    title: 'Our Policies',
    links: [
      {
        name: 'Terms & Conditions',
        href: '/terms',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
      },
      {
        name: 'Return Policy',
        href: '/return',
      },
    ],
  },
};

const socialMediaLinks = {
  title: 'Social Media',
  links: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/dailoStoreNp',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dailoStore',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/DailoStore',
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCNIfsyK7YVNoTypEMF4gwVA',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/message/ORRZ4FVAY42KC1',
    },
  ],
};

const Footer = () => {
  return (
    <footer className='w-full px-8 py-4 flex flex-col gap-4 border-t border-gray-200'>
      <div
        className={`flex flex-col items-center justify-center gap-4 flex-wrap
        md:flex-row md:gap-x-4
      `}
      >
        <div className='flex justify-start self-start min-w-[210px]'>
          <Link href={'/'}>
            <div className='flex flex-col gap-2 items-center'>
              <Image alt='logo' src={'/logo.png'} width={46} height={40} />
              <p className='font-medium text-lg'>DAILO STORE</p>
            </div>
          </Link>
        </div>

        {Object.values(footerLinks).map((footerLink) => (
          <div
            key={footerLink.title}
            className='flex flex-col self-start gap-2 min-w-[210px]'
          >
            <p className='text-lg font-medium'>{footerLink.title}</p>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.name} className='text-blue-500 hover:underline'>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className='flex flex-col gap-2 self-start min-w-[210px]'>
          <p className='text-lg font-medium'>Social Media</p>
          <ul className='flex gap-3'>
            <li>
              <Link href={socialMediaLinks.links[0].href}>
                <BrandFacebook size={20} />
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.links[1].href}>
                <BrandInstagram size={20} />
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.links[2].href}>
                <BrandTwitter size={20} />
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.links[3].href}>
                <BrandYoutube size={20} />
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.links[4].href}>
                <BrandWhatsapp size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className='self-center'>© 2022 Dailo Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
