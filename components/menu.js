import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'



const Menu = () => {
    return(
        
        <div className={utilStyles.menu}>
            <span className={utilStyles.title}>Derek</span>
            <ul className={utilStyles.ul}>
                <li>
                    <Link href="/about"><a >About</a></Link>
                </li>
                <li>
                    <Link href="/notes"><a >Notes</a></Link>
                </li>
                <li>
                    <Link href="/media"><a >Media</a></Link>
                </li>
                <li>
                    <Link href="/api/cow"><a >Cow</a></Link>
                </li>
            </ul>
        </div>
    )
}
export default Menu;
