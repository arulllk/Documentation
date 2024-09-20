// Creating slug 
blogSchema.pre('save',async function(next){    
    // check if the title is modified
    if(!this.isModified(this.title)){
        // if title is not modified skip the slug generation
        return next();
    }

    //Generate base slug from the title
    const slugBase =  this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    let slug = slugBase;
    let suffix = 1

    // ensure slug is unique  by adding suffix if necessary
    while(await mongoose.models.Blog.findOne({slug})){
        slug = `${slugBase}-${suffix}` 
    }
    this.slug = slug;
    next();   
})



// hasing the passwrod
userSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

