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
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true,
            },
            method: 'POST',
        });
        const result = await res.json();
        //console.log(result);
        //alert(`Alert: ${result.name}`);
        document.getElementById('name').value = `${result.name}`;
    };

    const submitMode = async (event) => {
        event.preventDefault();
        const mode = event.target.mode.value;
        const seq = document.getElementById('name').value
        const res = await fetch('/api/mode', {
            body: JSON.stringify({ 
            mode: mode,
            seq: seq,
            }),
            headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true,
            },
            method: 'POST',
        });
        const result = await res.json();
        //console.log(result);
        //alert(`Alert: ${result.name}`);
        document.getElementById('text').value = `${result.seq}`;
    };

    
    function caseCheck() {
        const check = document.getElementById('case').value;
        const temp = document.getElementById('text').value
        if (check === "capitalize") {
            document.getElementById('text').value = temp.toUpperCase()
        } else if (check === "lowercase") {
            document.getElementById('text').value = temp.toLowerCase()
        }
    }

    function numSpaceCheck() {
        event.preventDefault();
        const check = document.getElementById('name').value;
        const reg = /\d|\s/g
        const checkFix = check.replaceAll(reg,"");
        document.getElementById('name').value = checkFix
    }

    function dnaMode() {
        event.preventDefault();
        const mode = event.target.mode.value;
        const seq = document.getElementById('name').value;

        if (mode === "comp") {
            const splitSeq = seq.split("");
            for (let i = 0; i < splitSeq.length; i++) {
                if (splitSeq[i] === "A" || splitSeq[i] === "a") {
                    splitSeq[i] = "T"
                } else if (splitSeq[i] === "T" || splitSeq[i] === "t"|| splitSeq[i] === "U"|| splitSeq[i] === "u") {
                    splitSeq[i] = "A"
                } else if (splitSeq[i] === "C" || splitSeq[i] === "c") {
                    splitSeq[i] = "G"
                } else if (splitSeq[i] === "G" || splitSeq[i] === "g") {
                    splitSeq[i] = "C"
                } else if (splitSeq[i] === "R" || splitSeq[i] === "r") {
                    splitSeq[i] = "Y"
                } else if (splitSeq[i] === "Y" || splitSeq[i] === "y") {
                    splitSeq[i] = "R"
                } else if (splitSeq[i] === "W" || splitSeq[i] === "w") {
                    splitSeq[i] = "W"
                } else if (splitSeq[i] === "S" || splitSeq[i] === "s") {
                    splitSeq[i] = "S"
                } else if (splitSeq[i] === "N" || splitSeq[i] === "n") {
                    splitSeq[i] = "N"
                }
              }
            seq = splitSeq.join("");
            document.getElementById('text').value = seq
            
        } else if (mode === "rev") {
            seq = seq.split("").reverse().join("").toUpperCase();
            document.getElementById('text').value = seq

        } else if (mode === "revComp") {
            const splitSeq = seq.split("");
            for (let i = 0; i < splitSeq.length; i++) {
                if (splitSeq[i] === "A" || splitSeq[i] === "a") {
                    splitSeq[i] = "T"
                } else if (splitSeq[i] === "T" || splitSeq[i] === "t"|| splitSeq[i] === "U"|| splitSeq[i] === "u") {
                    splitSeq[i] = "A"
                } else if (splitSeq[i] === "C" || splitSeq[i] === "c") {
                    splitSeq[i] = "G"
                } else if (splitSeq[i] === "G" || splitSeq[i] === "g") {
                    splitSeq[i] = "C"
                } else if (splitSeq[i] === "R" || splitSeq[i] === "r") {
                    splitSeq[i] = "Y"
                } else if (splitSeq[i] === "Y" || splitSeq[i] === "y") {
                    splitSeq[i] = "R"
                } else if (splitSeq[i] === "W" || splitSeq[i] === "w") {
                    splitSeq[i] = "W"
                } else if (splitSeq[i] === "S" || splitSeq[i] === "s") {
                    splitSeq[i] = "S"
                } else if (splitSeq[i] === "N" || splitSeq[i] === "n") {
                    splitSeq[i] = "N"
                }
              }
            seq = splitSeq.join("");
            seq = seq.split("").reverse().join("");
            document.getElementById('text').value = seq
        }

    }

    return (
        <Layout DNA>
            <div>                 
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
                                <form onSubmit={numSpaceCheck}>
                                    <label htmlFor="name" />
                                    <textarea id="name" name="name" type="text" autoComplete="name" required rows="8" cols="50"/>
                                    <br />
                                    <button type="submit">Remove numbers and spaces</button>
                                </form>

                                <form onSubmit={dnaMode}>
                                    <label htmlFor="mode" />
                                    <select name="mode" id="mode" type="text" required>
                                        <option value="comp">Complementary Sequence</option>
                                        <option value="rev">Reverse Sequence</option>
                                        <option value="revComp">Reverse-Complementary Sequence</option>
                                    </select>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="submit">SUBMIT</button>
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
                                    <textarea id='text' name="text" rows="8" cols="50"></textarea>
                                    <br></br>
                                    <select name="case" id="case" onChange={caseCheck} >
                                        <option value="none" selected disabled hidden>--Select an Option--</option>
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