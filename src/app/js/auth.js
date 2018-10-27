var provider = new firebase.auth.TwitterAuthProvider();

function twitterPopUp(){
   

}

var twitterFunctions = function() {
    this.init= async function() {
        let successLogin = "false";
        let twitterData = [];
        console.log("twitter fubntion call")
        await firebase.auth().signInWithPopup(provider).then(function(result) {
            
            //var token = result.credential.accessToken;
            //var secret = result.credential.secret;
            // user info
            var user = result.user;
           // console.log(result,"response data")
           
           userData = {
                        loginState: "true",
                        userName: result.additionalUserInfo.username,
                        location: result.additionalUserInfo.profile.location
                    }
            
           
            twitterData.push(userData);
           
            //twitterDaata.push(result.user.display)
            successLogin = "true"
            
          }).catch(function(error) {
            // Handle Errors
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        
          });
          
          return twitterData;
    }
}

     