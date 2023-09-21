/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import ThemeChanger from './color'



const Menu = () => {
    const router = useRouter()
    const name = 'Derek'
    
    return (
        <div className={`${utilStyles.menu} ${utilStyles.pa3} ${utilStyles.ma4}`}>
            <span className={utilStyles.title}>
            {router.pathname =='/' ? (
                <>
                    Home
                </>
                ) : (
                <>
                    
                    <Link href="/" className={utilStyles.colorInherit}>
                        Home
                    </Link>
                    
                </>
                )}  
            </span>
            <ul className={utilStyles.ul}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/posts">Blog</Link>
                </li>
                <li>
                    <Link href="/notes">Notes</Link>
                </li>
                <li>
                    <Link href="/photos">Photos</Link>
                </li>
                <li>
                    <Link href="/media">Media</Link>
                </li>
                <li>
                    <Link href="/dna">DNA</Link>
                </li>
                <li>
                    <Link href="/3d">3D</Link>
                </li>
                <li>
                    <Link href="/repl">REPL</Link>
                </li>
                <li>
                    <Link href="/swr">SWR</Link>
                </li>
                <li>
                    <Link href="/api/date">Date</Link>
                </li>
                <li>
                    <ThemeChanger />
                </li>
            </ul>
        </div>
    );
}
export default Menu;
