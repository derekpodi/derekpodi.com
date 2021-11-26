import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


const DNA = () => {

    const submitDNA = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
            name: name,
            }),
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const result = await res.json();
        //console.log(result);
        //alert(`Alert: ${result.name}`);
        document.getElementById('name').value = `${result.name}`;
    };

    


    return (
        <Layout DNA>
            <div> 
                <h1>API** Route Not Working Yet **</h1>
                
                <h1>DNA Tool</h1>
                <Link href="https://www.bioinformatics.org/sms/iupac.html">
                    <a>Nucleotide code dictionary </a>
                </Link>
                <p>Paste your DNA sequence in and transform as it needed:</p>
            
                <table>
                    <tbody>
                        <tr>
                            <th>Input Sequence:</th>
                            <td>
                                <form onSubmit={submitDNA}>
                                    <label htmlFor="name" />
                                    <textarea id="name" name="name" type="text" autoComplete="name" required rows="8" cols="50"/>
                                    <br />
                                    <button type="submit">Remove numbers and spaces</button>
                                </form>

                                <form>
                                    <br></br>
                                    <select>
                                        <option value="complement">Complementary Sequence</option>
                                        <option value="reverse">Reverse Sequence</option>
                                        <option value="rev_comp">Reverse-Complementary Sequence</option>
                                    </select>
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="submit" name="action" value="SUBMIT"></input>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <p></p>

                <table>
                    <tbody>
                        <tr>
                            <th>Your Results:</th>
                            <td>
                                <form name="form1" action="">
                                    <textarea id='text' name="text" rows="8" cols="50" defaultValue="" ></textarea>
                                    <br></br>
                                    <select>
                                        <option value="capitalize">Capitalize Result</option>
                                        <option value="lowercase">Lowercase Result</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
        
    );
}

export default DNA;




{/*

    const submitContact = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
            name: name,
            }),
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const result = await res.json();
        alert(`Is this your full name: ${result.name}`);
    };


    <div>
        <div>
            <div>Contact us</div>
            <form onSubmit={submitContact}>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' autoComplete='name' required />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>


*/}