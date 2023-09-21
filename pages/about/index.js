import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const About = () => {
    return (
      <Layout About>
      <div className={utilStyles.measure}>
        <h4>About</h4>
        <div>
          <div >
            <table className="table">
              <thead className={utilStyles["black"] + " " + utilStyles["bg-light-gray"]+ " " + utilStyles["ba"] + " " + utilStyles["b--black"]}>
                <tr>
                  <th className={utilStyles["measure-12"]}>Personal Information</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Derek Podimatis</td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>
                    <Link href="https://www.ibp.ucla.edu">
                      UCLA
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p></p>
          <div>
            <table className="table">
                <thead className={utilStyles["black"] + " " + utilStyles["bg-light-gray"]+ " " + utilStyles["ba"] + " " + utilStyles["b--black"]}>
                  <tr>
                    <th className={utilStyles["measure-12"]}>Contact</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>(first name)podi at gmail dot com</td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td>
                      <Link href="https://github.com/derekpodi">
                        derekpodi
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>  
        </div>
      </div>
      <p></p>
      </Layout>
    );
}

export default About;