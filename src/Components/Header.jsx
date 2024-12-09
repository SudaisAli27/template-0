import { Search } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { User } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <section id='header-wrapper' className=''>
        <header className='grid grid-cols-3 justify-center items-center'>
          <div></div>
          <nav className=''>
            <Link className='btn btn-ghost' href={""}>Home</Link>
            <Link className='btn btn-ghost' href={""}>Shop</Link>
            <Link className='btn btn-ghost' href={""}>About</Link>
            <Link className='btn btn-ghost' href={""}>Contact</Link>
          </nav>
          <div className='flex gap-6'>
            <User />
            <Search />
            <Heart />
            <ShoppingCart />
          </div>
        </header>
      </section>
    </>
  )
}
