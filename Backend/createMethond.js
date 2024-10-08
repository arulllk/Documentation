// creating json web token
userSchema.methods.createJWT = function () {
    return jwt.sign(
        {userId:this._id,name:this.name},
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_LIFETIME
        }
    )
}

// comparing password
userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword,this.password)
    return isMatch;
}
