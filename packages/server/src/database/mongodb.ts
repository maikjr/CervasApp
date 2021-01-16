import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://peixaria:uKpc86L6W3CpFMQn@cluster0-8d38m.mongodb.net/cervasapp', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

export {mongoose};
