const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({ apiKey: process.env.AIzaSyA5i6HjSUyTWXFVr7EK33ekj7opQDOfDGc });

app.post('/summarize', async (req,res)=>{
  const text = req.body.text || '';
  const response = await client.chat.completions.create({
    model:'gpt-4o',
    messages:[{role:'user', content:`Summarize this: ${text}`}]
  });
  res.json({summary: response.choices[0].message.content});
});

app.listen(5000, ()=> console.log('Server running on 5000'));
