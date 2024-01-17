import mongoose from "mongoose";

const  journalSchema = new mongoose.Schema({
Journal: {
type:String,
required:true,
validate:/^[A-Za-z0-9 ]*$/
},
});
const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
