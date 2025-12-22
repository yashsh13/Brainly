import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

const ContentSchema = new Schema({
    title: { type: String, required: true},
    link: { type: String, required: true},
    type: { type: String, required: true},
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userid: {type: mongoose.Types.ObjectId , ref: 'User', required: true}
});

const LinkSchema = new Schema({
    hash: {type:String,required:true,unique:true},
    userid: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
});

const TagSchema = new Schema({
    tagname: { type: String, unique: true}
});

export const UserModel = mongoose.model('User',UserSchema);
export const ContentModel = mongoose.model('Content',ContentSchema);
export const LinkModel = mongoose.model('Link',LinkSchema);
export const TagModel = mongoose.model('Tag',TagSchema);