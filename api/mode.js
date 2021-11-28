export default function handler(req, res) {
    const body = req.body;
    const mode = body.mode;
    const seq = body.seq;
    
    //const reg = /\d|\s/g
    //const seq2 = seq.replaceAll(reg,"");
    //const ret = { seq: seq2};
    const patternA = /A|a/g
    const patternC = /C|c/g
    const patternG = /G|g/g
    const patternT = /T|t/g
    const patternU = /U|u/g
    const seq1 = seq.replaceAll(patternA,"T");
    const seq2 = seq1.replaceAll(patternC,"G");
    const seq3 = seq2.replaceAll(patternG,"C");
    const seq4 = seq3.replaceAll(patternT,"A");
    const seq5 = seq4.replaceAll(patternU,"U");
    
    const ret = { seq: seq5};
    
    if (!ret.seq) {
      return res.status(500).json({ msg: 'Name was not found' });
    }
    return res.status(200).json({ seq: `${ret.seq}` });    //mode
}


  /*

    if (mode === "comp") {
        const patternA = /("A"|"a")/g
        const patternC = /("C"|"c")/g
        const patternG = /("G"|"g")/g
        const patternT = /("T"|"t")/g
        const patternU = /("U"|"u")/g
        const seq1 = seq.replaceAll(patternA,"T");
        const seq2 = seq1.replaceAll(patternC,"G");
        const seq3 = seq2.replaceAll(patternG,"C");
        const seq4 = seq3.replaceAll(patternT,"A");
        const seq5 = seq4.replaceAll(patternU,"U");
        
        const ret = { seq: seq5};
        if (!ret.seq) {
            return res.status(500).json({ msg: 'Name was not found' });
          }
        res.status(200).json({ seq: `${ret.seq}` });
        
    } else if (mode === "rev") {


    } else if (mode === "revComp") {


    }
*/

/*
if (!ret.seq) {
      return res.status(500).json({ msg: 'Name was not found' });
    }
    res.status(200).json({ seq: `${ret.seq}` });
    return;
}
*/