import mongoose from "mongoose";
const  contactSchema = new mongoose.Schema({

});
const Contact =mongoose.model("Contact",contactSchema);
export default Contact
