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

//check
firebase.auth().onAuthStateChanged(function(user)
          {
                  if (user) {
                    // User is signed in.
                    //  alert("Welcome!");
                    loadSharespage();
                    //document.getElementById('login_area_id').style.display="none";
                    //document.getElementById('create_userid').style.display="block";
                          }
                  else {
                    // User is signed out.
                    alert("Please login!");
                    document.getElementById('login_area_id').style.display="block";
                    document.getElementById('create_userid').style.display="none";
                       }
         });

      function loadSharespage()
      {
            var xhr = new XMLHttpRequest
            xhr.open("GET",'shares.html',true);
            xhr.onload = function()
                       {
                         if(this.status ==200)
                         {
                           document.getElementById('main_container').innerHTML =this.responseText ;
                         }

                       }
             xhr.send();

       }

function logoutx()
        {
              firebase.auth().signOut().then(function() {
                // Sign-out successful.
              }).catch(function(error) {
                // An error happened.
              });
        }

function login_user()
    {
      var userEmail_login = document.getElementById('email_field').value;
      var userPassword_login = document.getElementById('password_field').value;

      firebase.auth().signInWithEmailAndPassword(userEmail_login, userPassword_login).catch(function(error)
        {
      document.getElementById('create_userid').style.display="block";
          // ...
        });
    }

function create_user()
          {
            var userEmail = document.getElementById('email_field_new').value;
            var userPassword = document.getElementById('password_field_new').value;
            //declare more fields to capture user data to be stored in the simple user profile.
                    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
                         .catch(function(error)
                         {
                             var errorCode = error.code;
                             var errorMessage = error.message;
                             window.alert(errorCode +":"+errorMessage);
                             // ...
                         });
                           membersProfiles();
          }

    function membersProfiles()
       {
          var   member_name = document.getElementById('username_field').value;
          var  member_id = document.getElementById('member_id_field').value;
          var  member_email = document.getElementById('email_field_new').value;
                  var dabRef = firebase.database().ref("Members/"+ member_id);
                  dabRef.set(
                         {
                       member_name,
                        member_id,
                        member_email
                         });
       }

       function update_shares()
          {
             var   member_id = document.getElementById('member_id_field').value;
             var   amount = document.getElementById('amount_field').value;
             var  amountdue = document.getElementById('amount_field').value;
             var  date = document.getElementById('date_field').value;
             var  year = document.getElementById('year_field').value;
             var  invoice = document.getElementById('invoice_field').value;
             var  month = document.getElementById('month_select').value;
                     var dabRefx = firebase.database().ref("Shares/"+ member_id+"/"+ month+"/" );
                     dabRefx.set(
                            {
                          member_id,
                           amount,
                           amountdue,
                           date,
                            invoice,
                            month
                            });
          }
