export default function handler(req, res) {
    const body = req.body;
    const newb = body.name;
    const reg = /\d|\s/g
    const newb2 = newb.replaceAll(reg,"");
    const ret = { name: newb2};
    
    if (!ret.name) {
      return res.status(500).json({ msg: 'Name was not found' });
    }
    res.status(200).json({ name: `result = ${ret.name}` });
  }