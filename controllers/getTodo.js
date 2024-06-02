const Todo = require("../models/todo");

exports.getTodos = async(req,res) => {
    try{
        
        const todos = await Todo.find({});
        res.status(200)
        .json(
            {
                success:true,
                data:todos,
                message:"entire todo is fetched",
            }
        );
    }
    
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error: err.message,
            message:"server error",
        }); 
    }
};

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});
        if(!Todo){
            return res.status(404).json({
                success:false,
                message:"no data found with given id"
            });
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"Success"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            message:"server error",
            error:err.message,
        });
    }
};