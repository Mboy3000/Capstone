import {Router} from "express";
import Journal from "../models/Journal.js";
const router=Router();

router.post("/",async(request,response)=>{
  try{
    const newJournal= new Journal(request.body);
    const data= await newJournal.save();
    response.json(data);
  }catch(error){
    console.log(error);

    if('name'in error && error.name==="ValidationError")
    return response.status(400).json(error.errors);
  return response.status(500).json(error.errors);
  }
});
router.get("/", async(request,response)=>{
  try{
  const query=request.query;
  const data = await Journal.find(query);
  response.json(data);
  }catch (error){
    console.log(error);
    return response.status(500).json(error.errors);
  }
} );
router.get("/:id",async (request,response) => {
  try{
    const data= await Journal.findById(request.params.id);
    response.json(data);
  }catch(error){
    console.log(error);
    return response.status(500).json(error.errors)
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const data = await Journal.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await Journal.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          journal:body.journal
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError')
      return response.status(400).json(error.errors);
      return response.status(500).json(error.errors);
  }
});

export default router;
