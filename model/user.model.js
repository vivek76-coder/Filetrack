const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "invalid email"],
    },

    password: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

// checking duplicate number
userSchema.pre("save", async function (next) {
  const count =  await model("User").countDocuments({ mobile: this.mobile });
  if (count > 0) throw new Error("mobile alreay exist");
  
});

// checking duplicate email
  userSchema.pre("save", async function () {
    const count = await model("User").countDocuments({ email: this.email });
    if (count > 0) throw new Error("email already exists");
  });

// encryptinng password
  userSchema.pre("save", async function(next){
    const encryptedPassword = await bcrypt.hash(this.password.toString(), 12);
    this.password = encryptedPassword;

  })
const UserModel = model("User", userSchema);
module.exports = UserModel;
