// pages/404.js

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';


export default function Custom404() {

  
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000)
  }, [router])
  
  
    return (
      <div className="not-found">
        <h1>Oops... 404 - Page Not Found</h1>
        <h2>Teleporting you back to the homepage </h2>
        <p>Go back to the -- <Link href='/'><a>Homepage</a></Link></p>
        {/*<iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=picodino" allowFullScreen width="621" height="513" ></iframe> */}
        <section className="flex-centered">
          <Image 
            src="/../public/pain.jpg" 
            alt="landing page image" 
            width={500} 
            height={500}
          />
        </section>
      </div>  
    );
  }