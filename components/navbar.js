import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    return(
        <nav>
            <header className="container">
                <div className="columns">
                <div className="column">
                    <div className="navbar">
                    <div className="navbar-section">
                        <h4>Navbar</h4>
                    </div>
                    <div className="navbar-section">
                        <h4>
                        <span className="h4-normal">
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
                        </h4>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;


