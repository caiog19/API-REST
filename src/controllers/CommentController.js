const { response } = require('express');
const User = require('../models/Comment');

const create = async(req,res) => {
    try{
          const comment = await Comment.create(req.body);
          return res.status(201).json({message: "Comentário cadastrado com sucesso!", comment: comment});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({comments});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        return res.status(200).json({comment});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Comment.update(req.body, {where: {id: id}});
        if(updated) {
            const comment = await Comment.findByPk(id);
            return res.status(200).send(comment);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Comentário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Comment.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Comentário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Comentário não encontrado.");
    }
};
const addRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const Comment = await User.findByPk(id);
        const user = await Role.findByPk(req.body.RoleId);
        await comment.setUser(user);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        await comment.setUser(null);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addRelationUser,
    removeRelationUser
};


