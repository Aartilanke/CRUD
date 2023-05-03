const firebaseConfig = {
    apiKey: "AIzaSyBbjdeHjSHANxw3UXQnfAnLD1bX1B931T8",
    authDomain: "fir-5c0ad.firebaseapp.com",
    databaseURL: "https://fir-5c0ad-default-rtdb.firebaseio.com",
    projectId: "fir-5c0ad",
    storageBucket: "fir-5c0ad.appspot.com",
    messagingSenderId: "745829267317",
    appId: "1:745829267317:web:7207b46654b6cae71a453c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ready data
var nameV, rollV, secV, genV;

function ready() {
    nameV = document.getElementById('namebox').value;
    rollV = document.getElementById('rollbox').value;
    secV = document.getElementById('secbox').value;
    genV = document.getElementById('genbox').value;
}

//-----------------------for insert button------------------------

document.getElementById('insert').onclick = function () {
    ready();
    // write data to firebase
    firebase.database().ref('student/' + rollV).set({
        NameOfStudent: nameV,
        RollNo: rollV,
        Section: secV,
        Gender: genV
    });
}
//-----------------------for select button------------------------

document.getElementById('select').onclick = function () {
    ready();
    // write data to firebase
    //snapshot is basically copying small data from larger data and giving back 
    firebase.database().ref('student/' + rollV).on('value', function (snapshot) {
        document.getElementById('namebox').value = snapshot.val().NameOfStudent;
        document.getElementById('rollbox').value = snapshot.val().RollNo;
        document.getElementById('secbox').value = snapshot.val().Section;
        document.getElementById('genbox').value = snapshot.val().Gender;
    });
}

//-----------------------for update button------------------------

document.getElementById('update').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).update({
        NameOfStudent: nameV,
        Section: secV,
        Gender: genV
    });
    //  insted of updatee we can use set but it will delet all data of previesdata of old field and add new field 
    //                               update only update given FileSystemDirectoryHandle( name,roll No,gender) nottouch anypreavious field
}
//-----------------------for delet button------------------------

document.getElementById('delete').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).remove();
}