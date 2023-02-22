import messages from "../models/queries.js"
//gel all querries
const getAllQuerries = async (req,res)=>{
    try {
        const message =await messages.find().sort({createdAt :-1})
        res.status(200).json(message)
    } catch (error) {
        res.status(404).json(error)
    }
}
//create message
const newMessage = async (req,res)=>{
    const newQuerry = new messages({
        name : req.body.name,
        phone: req.body.phone,
        email : req.body.email,
        message: req.body.message
    })
    const squerry =await newQuerry.save();
    res.status(200).json(squerry)
    console.log(squerry);
}
// delete queries
const deleteMessage = async (req, res) => {
    try {
    const deletedMessage = await messages.findOneAndDelete({ _id: req.params.id });
    if (deletedMessage) {
    res.json({message:"Delete Successful!"});}
    else {
    res.status(200).json({ message: "Message not found" });
    }
    } catch{
    res.status(404).json({ message: "Message not found" });
    }
    }
export {
    getAllQuerries,
    newMessage,deleteMessage
}