const { Thought, User } = require('../models');

const thoughtsContoller={
    getthoughts(req,res){
        Thought.find()
        .sort({createAt: -1})
        .then((dbThoughtsData)=> {
            res.json(dbThoughtsData);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err)
        });
    },



    createNewThought(req,res){
        Thought.create(req.body)
        .then((dbThoughtsData)=>{
            return User.findOneandUpdate(
                {_id:req.body.userId},
                {$push:{thoughts:dbThoughtsData._id}},
                {new:true},
            );
        })
        .then((dbUsersData)=>{
            if (!dbUsersData){
                return res.status(404).json({message:'The new thought was created but there was no user found with this id!'
                });

            }
            res.json({message:'New thought was created successfully(:'})
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
}