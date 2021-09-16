import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <Layout About>
        <div className="container">
          <h2>About</h2>
          <div className={utilStyles["container"] + " " + utilStyles["bottom-1"]}>
            <div className="column">
              <table className="table">
                <thead className={utilStyles["black"] + " " + utilStyles["bg--light-gray"]+ " " + utilStyles["ba"] + " " + utilStyles["b--black"]}>
                  <tr>
                    <th className={utilStyles["measure-12"]}>Personal Information</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Derek</td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>[Add link here]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p></p>
          <div className="column">
            <table className="table">
                <thead className={utilStyles["black"] + " " + utilStyles["bg--light-gray"]+ " " + utilStyles["ba"] + " " + utilStyles["b--black"]}>
                  <tr>
                    <th className={utilStyles["measure-12"]}>Contact</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>derek podi at gmail dot com</td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td>
                      <Link href="https://github.com/derekpodi">
                        <a>derekpodi</a>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>  
        </div>
        <p></p>
        </Layout>
    );
}

export default About;