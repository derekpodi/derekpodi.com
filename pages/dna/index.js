import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


const DNA = () => {
    return (
        <Layout DNA>
            <div> 
                <h1>API** Route Not Working Yet **</h1>
                <h1>DNA Tool</h1>
                <br />
                <p>Paste your DNA sequence in and transform as it needed.</p>
                <p>Can clean up sequences by removing spaces/numbers or provide the results of complementary/reverse sequence transformations:</p>
                
                <table>
                    <tbody>
                        <tr>
                            <th>Input Sequence:</th>
                            <td>
                                <form name="form1" action="">
                                    <textarea name="text" rows="8" cols="50"></textarea>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th>
                            <td>
                                <input type="submit" name="action" value="Remove numbers and spaces"></input>
                                <p></p>
                                <select>
                                    <option value="complement">Complementary Sequence</option>
                                    <option value="reverse">Reverse Sequence</option>
                                    <option value="rev_comp">Reverse-Complementary Sequence</option>
                                </select>

                                <input type="submit" name="action" value="SUBMIT"></input>

                            </td>
                            </th>
                        </tr>
                    </tbody>
                </table>
                
                <table>
                    <tbody>
                        <tr>
                            <th>Your Results:</th>
                            <td>
                                <form name="form1" action="">
                                    <textarea name="text" rows="8" cols="50"></textarea>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th>
                            <td>
                                <select>
                                    <option value="capitalize">Capitalize Result</option>
                                    <option value="lowercase">Lowercase Result</option>
                                </select>
                            </td>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </div>
        </Layout>
        
    );
}

export default DNA;