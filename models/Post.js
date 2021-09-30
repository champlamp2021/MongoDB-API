const mongoose=require('mongoose');
/** สร้างฐานข้อมูล */
//create data in collections  Posts   m1
const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports=mongoose.model('NewCollections',PostSchema);