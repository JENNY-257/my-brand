// import mongoose from "mongoose"
import Comments from "../models/comment.js";
// import Blog from "../models/Blog.js";

export const addComment = async (req, res) => {
    // const blog = await Blog.findOne({ _id: req.params.id });

    const comment = new Comments({
      blog:req.params.id,
      name: req.body.name,
      message: req.body.message,
      

     
    });
    await comment.save();
    res.status(201).json({ comment: comment });
  };
  export const getCommentsByBlog = async (req, res)=>{

    const comments = await Comments.find({blog: req.params.id}).sort({createdAt :-1})
    .populate({path: "blog"})

    return res.status(200).send(comments)
    
   }
  
  export const removeComment = async (req, res) => {
    try {
      await Comments.deleteOne({ _id: req.params.id });
      res.status(204).send({ message: "comment deleted successfully" });
    } catch {
      res.status(404).send({ error: "comment doesn't exist!" });
    }
  };








