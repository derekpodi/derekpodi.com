import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'



const Menu = () => {
    const router = useRouter()
    const name = 'Derek '
    
    return(
        
        <div className={utilStyles.menu}>
            <span className={utilStyles.title}>
            {router.pathname =='/' ? (
                <>
                    {name}
                </>
                ) : (
                <>
                    
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    
                </>
                )}  
            </span>
            <ul className={utilStyles.ul}>
                <li>
                    <Link href="/about"><a >About</a></Link>
                </li>
                <li>
                    <Link href="/posts"><a >Posts</a></Link>
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
                    <Link href="/api/date"><a >Date</a></Link>
                </li>
                <li>
                    <Link href="/api/cow"><a >Cow</a></Link>
                </li>
            </ul>
        </div>
    )
}
export default Menu;
