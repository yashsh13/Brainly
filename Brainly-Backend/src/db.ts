import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userid: {type: mongoose.Types.ObjectId , ref: 'User', required: true}
});

const LinkSchema = new Schema({
    hash: String,
    userid: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
});

const TagSchema = new Schema({
    tagname: { type: String, unique: true}
});

export const UserModel = mongoose.model('User',UserSchema);
export const ContentModel = mongoose.model('Content',ContentSchema);
export const LinkModel = mongoose.model('Link',LinkSchema);
export const TagModel = mongoose.model('Tag',TagSchema);