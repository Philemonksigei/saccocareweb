
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD2eaGwIXS2FBuh2V8qCwnM8cfNmdBeSk0",
    authDomain: "saccocare-4f16f.firebaseapp.com",
    databaseURL: "https://saccocare-4f16f.firebaseio.com",
    projectId: "saccocare-4f16f",
    storageBucket: "saccocare-4f16f.appspot.com",
    messagingSenderId: "107936396681",
    appId: "1:107936396681:web:5aff8e29690ee11294dd58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//================
function homesettings()
{

}
/*
//=============
  fucntion default_login()
  {
/* -The whole system is logged in here! as a single entity,
 so as to be llowed to write to firebase database,ie create
 memeber profiles, update shares and even remove members.
 -The loging in is done simultanously with the main System,
  but changes on the firebase db wil wait til when required only.
  -Make the logn be selectve so that, only the admns will be asked for frebase credentials.

      var userEmail = document.getElementById('email_field_new').value;
      var userPassword = document.getElementById('password_field_new').value;
      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
           .catch(function(error)
           {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               window.alert(errorCode +":"+errorMessage);
               // ...
           });
      window.alert( userEmail +""+userPassword);
  }
*/
  function create_user()
      {
        var userEmail = document.getElementById('email_field_new').value;
        var userPassword = document.getElementById('password_field_new').value;
        //declare more fields to capture user data to be stored in the simple user profile.
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
             .catch(function(error)
             {
          // Handle Errors here.
                 /* TODO:
                 -Consider creating a small profile of users/members
                 in the db, so that if a memebers is not in the list,
                  he cannot view shares page on the android app.
                  -It will allow the Android app to pick some more data,
                   from the main system concering each user.

//Sshhhh:  call the profile function here:
     createUserProfile();


                 */
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 window.alert(errorCode +":"+errorMessage);
                 // ...
             });
      }


      //Sshhhh:  heres the code for profile
                 function createUserProfile()
                  {
                   var   MemberID = document.getElementById('member_id').value;
                   var  MemberName = document.getElementById('member_name_id').value;
                   //var CurrentYear =

                       var dabRef = firebase.database().ref("Members/"+MemberID);
                       dabRef.set(
                              {
                             MemberID,
                             MemberName
                              });
                              dabRef.on("value", function(snapshot)
                              {
                                 console.log(snapshot.val());
                              }, function (error)
                              {
                                 console.log("Error: " + error.code);
                              });

                  }
