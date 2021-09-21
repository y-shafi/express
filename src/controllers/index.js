exports.helloWorld = (req,res) => {
    res.send("GarySteve Says Hello World!");
};

exports.addSteve = (req, res) =>{
    const name = req.body.name;
    res.send({message: `${name} smells`});
};

exports.readSteve = (req, res) =>{
    res.send({message: "sccessful get request"});
};

exports.updateSteve = (req, res) =>{
    const update = req.body.name;
    res.send({message: update});
};

exports.addSteve = (req, res) =>{
    res.send({message: "successful delete request"});
};