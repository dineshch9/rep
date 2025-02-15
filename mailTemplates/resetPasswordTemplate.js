const resetPasswordTemplate = (token) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
            .heading{
                text-align:center;
                font-size: 30px;
                font-weight:600;
                margin-bottom:30px;
            }
            .token{
                color:black;
                font-size:32px;
                font-weight:900;
                margin:0px auto;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
        <a href="https://techkriya.nitandhra.ac.in/"><img class="logo" src="https://res.cloudinary.com/dwt1vmf2u/image/upload/v1727891994/logo_okfscm.png" alt="Techkriya Logo"></a>
            <div class="message">Reset Password Link</div>
            <div class="body">
                <p>Dear User,</p>
                <div class="heading">Copy and paste the below token to proceed with resetting of your account password.</div>
                <p class="token">${token}</p>
                </p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:techkriya@gmail.com">techkriya@gmail.com</a>. We are here to help!</div>
            </div>
    </body>
    </html>`; 
};

module.exports = resetPasswordTemplate;