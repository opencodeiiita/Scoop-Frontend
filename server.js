const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/scoopDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // 30 seconds timeout
});

const scoopSchema = new mongoose.Schema({
  headline: String,
  description: String,
  imageUrl: String,
  upvotes: { type: Number, default: 0 },
});

const Scoop = mongoose.model('Scoop', scoopSchema);

app.post('/api/scoop/:scoopId/upvote', async (req, res) => {
  try {
    const { scoopId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(scoopId)) {
      return res.status(400).json({ error: 'Invalid scoopId' });
    }

    res.status(200).json({ message: 'Upvote successful!' });
  } catch (error) {
    console.error('Upvote error!');
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/scoop/post', async (req, res) => {
  try {
    const { headline, description, imageUrl } = req.body;
    const newScoop = new Scoop({ headline, description, imageUrl });
    await newScoop.save();
    res.status(201).json({ message: 'Scoop added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/scoop/all', async (req, res) => {
  try {
    const scoops = await Scoop.find();
    res.status(200).json(scoops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
