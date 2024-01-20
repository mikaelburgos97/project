const express = require('express');
const app = express();
const User = require('./models/user')
const Post = require('./models/post');
const mongoose = require('mongoose');
const cors = require('cors')


app.use(cors());

const url = 'mongodb+srv://admin:admin@cluster0.etkeknq.mongodb.net/Node-API?retryWrites=true&w=majority';

app.use(express.json())

// app.get('/', (req, res) => { 
//   res.send('hello NODE ')
// })

//this is para user
app.get('/user', async(req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


//update data
app.put('/user/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if(!user){
      return res.status(404).json({message: `cannot find any user with ID ${id}`})
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//delete
app.delete('/user/:id', async(req, res) => {
  try {
    const {id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).json({message:  `cannot find any user with ID ${id}`})
    } 
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


app.post('/user',async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user);

  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})





//este is for post
app.get('/post', async(req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


app.put('/post/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    if(!post){
      return res.status(404).json({message: `cannot find any post with ID ${id}`})
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.delete('/post/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if(!post){
      return res.status(404).json({message:  `cannot find any user with ID ${id}`})
    } 
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.post('/post',async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).json(post);

  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})







mongoose.connect(url)
.then(() => {
  console.log('connected to mongoDB');

  app.listen(3000, ()=> {
    console.log('Node Api app is running on port 3000 ')
  });
}).catch((error) => {
  console.log(error)
})