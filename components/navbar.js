import Link from 'next/link'
import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'


const Navbar = () => {
    const router = useRouter()
    const name = 'Derek Podimatis'
    return(
        <header className={utilStyles["container"] + " " + utilStyles["bottom-6"]}>
            <div className={utilStyles["columns"]}>
                <div className={utilStyles["column"]}>
                    <div className="navbar">
                        <div className="navbar-section">
                            
                            <header className={utilStyles.header}>
                            {router.pathname =='/' ? (
                            <>
                                <h2 className={utilStyles.headingLg}>{name}</h2>
                            </>
                            ) : (
                            <>
                                <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                                </h2>
                            </>
                            )}
                            </header>
                        </div>
                    
                        <div className="navbar-section">
                            <h1>
                                <span className="h1-normal">
                                    ~ / 
                                    <Link href="/">
                                    <a title="Home"> Home </a>
                                    </Link>
                                    {router.pathname =='/' ? (
                                        <>
                                            
                                        </>
                                    ) : (
                                        <>
                                            {router.asPath}
                                        </>
                                    )} 
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    );
}

export default Navbar;


