import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import {UnControlled as CodeMirror} from 'react-codemirror2-react-17'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
if (typeof navigator !== 'undefined') {
    require('codemirror/mode/xml/xml');
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/python/python');
    // [...]
  }


const Repl = () => {

const value = 
`import math
    
x = math.pi
    
print(x)`

    return (
        <Layout Repl>
            <div>
                <h2> Codemirror </h2>
                <div>
                    <CodeMirror 
                        value={value}
                    
                        options={{
                            mode: 'html',
                            theme: 'material',  //xg-light
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    /> 
                </div>
                
                <br></br>
                <h2> JupyterLite</h2>
                <div>
                    <iframe
                        src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1&theme=JupyterLab Dark&code=import numpy as np&code=import matplotlib.pyplot as plt&code=x = np.linspace(0, 10, 1000)&code=plt.plot(x, np.sin(x));&code=plt.show()"
                        width="100%"
                        height="900px"
                    ></iframe>
                </div>
            </div>
                        
            
            
        </Layout>
        
    );
}

export default Repl;