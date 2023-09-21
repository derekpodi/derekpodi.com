// pages/404.js

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import pain from '../public/pain.jpg'

export default function Custom404() {

  
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 7000)
  }, [router])
  
  
    return (
      <div className="flex-centered">
        <div className="not-found">
          <br></br>
          <h1>Oops... 404 - Page Not Found</h1>
          <h2>Teleporting you back to the homepage </h2>
          <p>Go back to the -- <Link href='/'>Homepage</Link></p>
          {/*<iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=picodino" allowFullScreen width="621" height="513" ></iframe> */}
          <section className="flex-centered">
            <Image 
              src={pain} 
              alt="landing page image" 
              width={600} 
              height={600}
            />
          </section>
        </div>
      </div>
    );
  }