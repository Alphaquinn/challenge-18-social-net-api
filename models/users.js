const{Schema, model}= require('mongoose');




const UserSchema= new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,  
        },
        email:{
            type:String,
            required: true,
            unique:true,
            match:[/.([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'this value must match with the addresses' ],
        },
        thoughts:[{type: Schema.Types.ObjectId,
            ref: 'Thought,' 
    },],
    friends:[{type: Schema.Types.ObjectId,
        ref:'User',
    },],
    },
    {
        toJSON:{
            virtuals: true,

        },
        id:false
    }
);

UserSchema.virtual('friend#').get(function(){
    return this.friends.length;
});


const User = model('user',UserSchema);
module.exports= User;