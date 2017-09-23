const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const ScoreSchema = mongoose.Schema({
	name: { type: String, required: true },
	scores: [{ year: Number, score: Number }]
});

const Score = mongoose.model('Score', ScoreSchema);



const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.post('/circketplayers',  function(req, res)	
{
	const {name, scores, year} = (req.body || {});

	if (!name || !scores) {
		const error = new Error(`Bad Request ${name} ${scores}`)
		return next(error);
	}

	const score = new Score({ name, scores });
	score.save()
	.then (function(result)  {
		res.json({isSuccess: true, result})
	})
	.catch(next)
});

app.use(function(error, req, res, next){
	const { message } = error;
	res.json({ isSuccess: false, message });
})


app.listen(3000,function() {
	console.log('port 3000')
})

