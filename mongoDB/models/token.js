import mongoose from 'mongoose';

const TokenSchema = mongoose.Schema({
    token:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default mongoose.model("Token", TokenSchema)