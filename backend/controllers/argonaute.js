const fs = require('fs');
const Argonaute = require('../models/argonaute');

exports.getAllArgonautes = (req, res, next) => {
    Argonaute.find()
        .then(argonaute => res.status(200).json(argonaute))
        .catch(error => res.status(400).json({ error }));
};

exports.create = (req, res, next) => {
    const argonaute = new Argonaute({
        name: req.body.name
    });


    console.log(argonaute)
    argonaute.save()
        .then(() => { res.status(201).json({ message: 'argonaute enregistrĂ© !' }) })
        .catch(error => { res.status(400).json({ error: "probleme" }) })
}