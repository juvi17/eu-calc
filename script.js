function calculateFamily1() {
    let totalUnits = 0;
    let peakHours = parseFloat(document.getElementById('peakHours1').value) || 0;
    let nonPeakHours = parseFloat(document.getElementById('nonPeakHours1').value) || 0;

    const appliances = [
        'refrigerator1', 'television1', 'fan1', 'microwave1',
        'waterHeater1', 'kettle1', 'iron1', 'stove1', 'lights1', 'washing_machine1'
    ];

    for (let appliance of appliances) {
        let value = parseFloat(document.getElementById(appliance).value);
        if (!isNaN(value)) {
            totalUnits += value;
        }
    }

    totalUnits += peakHours + nonPeakHours;

    const totalUnitsPerMember = totalUnits / 4;

    // Display total units consumed in an alert box
    alert(`Family 1\nTotal Units Consumed: ${totalUnits.toFixed(2)} kWh\nTotal Units Per Member: ${totalUnitsPerMember.toFixed(2)} kWh`);
}

function calculateFamily2() {
    let totalUnits = 0;
    let peakHours = parseFloat(document.getElementById('peakHours2').value) || 0;
    let nonPeakHours = parseFloat(document.getElementById('nonPeakHours2').value) || 0;

    const appliances = [
        'refrigerator2', 'television2', 'fan2', 'microwave2',
        'waterHeater2', 'kettle2', 'iron2', 'stove2', 'lights2', 'washing_machine2'
    ];

    for (let appliance of appliances) {
        let value = parseFloat(document.getElementById(appliance).value);
        if (!isNaN(value)) {
            totalUnits += value;
        }
    }

    totalUnits += peakHours + nonPeakHours;

    const totalUnitsPerMember = totalUnits / 4;

    // Display total units consumed in an alert box
    alert(`Family 2\nTotal Units Consumed: ${totalUnits.toFixed(2)} kWh\nTotal Units Per Member: ${totalUnitsPerMember.toFixed(2)} kWh`);
}
// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Register User Function
function registerUser() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert(`User ${user.email} registered successfully!`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Registration failed: ${errorMessage}`);
        });
}

// Login User Function
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert(`Welcome back, ${user.email}!`);
            // You can redirect to another page or perform other actions upon successful login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Login failed: ${errorMessage}`);
        });
}

// Handle Navigation Links
document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
});


