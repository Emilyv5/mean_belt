const mongoose = require("mongoose");

module.export = {
	mongo: mongoose.connect("mongodb://localhost/belt", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
};
