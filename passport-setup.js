const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth2").Strategy;

passport.serializeUser(function(user,done){
    done(null,user);
})

passport.deserializeUser(function(user,done){
    done(null,user);
})

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECRET,
    callbackURL:process.env.CALLBACKURL,
    passReqToCallback:true
},function(request,accessToken, refreshToken,profile,done){
    console.log(profile);
    return done(null,profile)
}
))