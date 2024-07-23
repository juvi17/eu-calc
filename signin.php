<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="signin.css">
</head>
<body>
    <div class="container">
        <form id="signInForm" class="signin-form" method="post" action="signin_data.php">
            <h2>Sign In</h2>
            <div class="input-container">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-container">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Sign In</button>
            <p>Already have an account? <a href="login.php">Login</a>.</p>
            <div id="loginError" class="error-message" style="display: none;"></div>
        </form>
        
    </div>
</body>
</html>
