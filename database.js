import {mongoose} from 'mongoose';

try {
    await mongoose.connect(process.env.URI_MONGO, {
        //useNewUrlParser: true
    });
    console.log(`MongoDB Connected`)
} catch (error) {
    console.error(`Error de conexio a mongodb: ${error.message}`)
}
