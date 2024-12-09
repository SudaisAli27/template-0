import Footer from '@/Components/Footer'
import UnderlinedLink from '@/Components/UnderlinedLink'
import { Calendar } from 'lucide-react'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <section className='h-screen flex justify-evenly items-center bg-yellow-200' id="hero">
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold'>Rocket Single Seater</h2>
          <Link className='link underline-offset-8' href={"#"}>Shop Now</Link>
        </div>
        <div className='flex flex-col'>
          <img src="https://placehold.co/480x380" alt="image" />
        </div>
      </section>
      <section className='flex py-6 gap-3 justify-around' id="featured">
        <div className='flex flex-col gap-3'>
          <img src="https://placehold.co/380" alt="image" />
          <h4 className='text-2xl font-medium'>Side Table</h4>
          <Link className='link underline-offset-8' href={"#"}>View More</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <img src="https://placehold.co/380" alt="image" />
          <h4 className='text-2xl font-medium'>Side Table</h4>
          <Link className='link underline-offset-8' href={"#"}>View More</Link>
        </div>
      </section>

      <section id='top-picks' className=''>
        <h2 className='text-center text-4xl font-medium'>Top Picks for You</h2>
        <p className='text-center opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore sint maxime autem itaque dolor!</p>
        <div className='px-4 lg:px-32 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around'>
          {/* Top picks Item 1 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='block' src="https://placehold.co/240" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 2 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='block' src="https://placehold.co/240" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 3 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='block' src="https://placehold.co/240" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 4 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='block' src="https://placehold.co/240" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
        </div>
      </section>

      <section id='new-arrivals' className='px-4 lg:px-32 py-8 grid grid-cols-3'>
        <img className='w-full object-cover col-span-2' src="https://placehold.co/280x180" alt="big sofa image" />
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='font-medium'>New Arrivals</p>
          <h4 className='text-4xl font-bold'>Asgaard Sofa</h4>
          <Link className='btn btn-outline btn-wide' href={"#"}>Order Now</Link>
        </div>
      </section>

      <section id='blog' className='py-6 flex flex-col items-center'>
        <h4 className='text-4xl font-bold'>Our Blogs</h4>
        <p className='text-center opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore sint maxime autem itaque dolor!</p>
        <div className='px-4 lg:px-32 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <UnderlinedLink text={"View More"}/>
      </section>

      <section id='social' className='flex flex-col justify-center items-center relative overflow-hidden py-12'>
        <img className='w-full absolute -z-10 opacity-30' src="https://picsum.photos/240" alt="" />
        <div className='flex flex-col gap-3'>
        <h2 className='font-bold text-4xl'>Our Instagram</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className='btn rounded-full shadow-2xl btn-wide'>Follow Us</button>
        </div>
      </section>

      <Footer />
    </>
  )
}

function BlogPost({ props }) {
  return (
    <>
      <div className='flex flex-col gap-3 items-center'>
        <img className='rounded-md w-full' src="https://placehold.co/240" alt="" />
        <p>Lorem ipsum dolor sit amet.</p>
        <Link className='text-xl font-medium link underline-offset-8' href={"#"}>Read More</Link>
        <div className='py-3 flex gap-3'>
          <span className='flex gap-2 items-center text-sm'><Clock size={14} /><p>5 min</p></span>
          <span className='flex gap-2 items-center text-sm'><Calendar size={14} /><p>12th Oct 2022</p></span>
        </div>
      </div>
    </>
  )
}