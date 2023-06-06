'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavLink } from '@mantine/core';
import { Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const NavBar = () => {
  return (
    <nav className='w-full h-20 px-8 py-4 flex justify-between items-center shadow-sm sticky top-0 bg-white z-40'>
      <Link href='/'>
        <Image alt='logo' src={'/logo.png'} width={34} height={30} />
      </Link>

      <div
        style={{
          width: 'clamp(200px, 50vw, 70vw)',
        }}
      >
        <Input
          icon={<Search size={20} />}
          placeholder='Search products, brands and more'
          variant='filled'
        />
      </div>

      <div className='lg:flex gap-x-3 hidden'>
        <Link href='login'>
          <NavLink label='Login'></NavLink>
        </Link>

        <Link href='seller'>
          <NavLink label='Become a Seller'></NavLink>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
