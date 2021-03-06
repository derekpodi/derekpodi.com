/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import ThemeChanger from './color'



const Menu = () => {
    const router = useRouter()
    const name = 'Derek'
    
    return(
        
        <div className={`${utilStyles.menu} ${utilStyles.pa3} ${utilStyles.ma4}`}>
            <span className={utilStyles.title}>
            {router.pathname =='/' ? (
                <>
                    Home
                </>
                ) : (
                <>
                    
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>Home</a>
                    </Link>
                    
                </>
                )}  
            </span>
            <ul className={utilStyles.ul}>
                <li>
                    <Link href="/about"><a >About</a></Link>
                </li>
                <li>
                    <Link href="/posts"><a >Blog</a></Link>
                </li>
                <li>
                    <Link href="/notes"><a >Notes</a></Link>
                </li>
                <li>
                    <Link href="/photos"><a >Photos</a></Link>
                </li>
                <li>
                    <Link href="/media"><a >Media</a></Link>
                </li>
                <li>
                    <Link href="/dna"><a >DNA</a></Link>
                </li>
                <li>
                    <Link href="/3d"><a >3D</a></Link>
                </li>
                <li>
                    <Link href="/repl"><a >REPL</a></Link>
                </li>
                <li>
                    <Link href="/swr"><a >SWR</a></Link>
                </li>
                <li>
                    <Link href="/api/date"><a >Date</a></Link>
                </li>
                <li>
                    <ThemeChanger />
                </li>
            </ul>
        </div>
    )
}
export default Menu;
