const express=require('express');
const router=express.Router();
const Post=require('../models/Post'); //m2 database 

//r1
/** get back all the post เรียกดูข้อมูลจากฐานข้อมูล mongo */
router.get('/',async(req, res) => {
        try{
            const posts= await Post.find();
            console.log("----------Find Data on MongoDB----------");
            console.log(posts);
            console.log("---------------Success---------------");
            console.log("======================================");
            res.json(posts);
        }catch(err){
            res.json({message: err});
        }
});

/** Submit a post */
//บันทึกข้อมูลลงใน MongoDB
router.post('/',async(req, res) => {
    console.log("***Insert New Data***");
   //console.log(req.body);
    const post=new Post({
        title: req.body.title, //เข้าถึงข้อมูลใน body
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
        console.log(savedPost);
        console.log("Insert Data Success.........");
        console.log("======================================");
    }catch(err){
        res.json({message: err});
    }
});

/** Specific post  */
router.get('/:postId',async(req,res)=>{
    console.log(`Find data by id : ${req.params.postId}`);
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
        console.log(post);
    }catch(err){
        res.json({message:err});

    }
});

 /** Delete post */
router.delete('/:postId',async(req, res)=>{
    try{
        const removePost= await Post.remove({_id: req.params.postId});
        console.log(removePost);
        res.json(removePost);

    }catch(err){
        console.log("Don't delete post");
        res.json({message:err});
    }

});


/** Update a post */
router.patch('/:postId',async(req, res)=>{
    try{
        const updatedPost= await Post.updateOne(
            {_id: req.params.postId},
            { $set: { title: req.body.title}}
            );
        res.json(updatedPost);
        console.log("Update post Success...");
    }catch(err){
        console.log("...ERROR..!");
        res.json({message:err});
    }
})

module.exports = router;
