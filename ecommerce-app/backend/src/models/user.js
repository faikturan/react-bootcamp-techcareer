import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        toJson: false,
    },
    role:{
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    });

    UserSchema.save("save", async function (next){
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(this.password, salt);
            this.password = hashed;
        } catch (e) {
            next(error);
        }
    });

    UserSchema.methods.isValidPass = async function (pass){
        return await bcrypt.compare(pass, this.password);
    };

    const User  = mongoose.model('user', UserSchema);

    export default User;

