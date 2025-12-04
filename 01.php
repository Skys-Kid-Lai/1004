<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get IP Address</title>
</head>
<body>
    <button onclick="getIP()">Get IP Address</button>
    <p id="ip"></p>

    <script>
        async function getIP() {
            try {
				fetch('https://api.ipify.org?format=json')
            	.then(response => response.json())
            	.then(data => {
					document.getElementById('ip').innerText = `Your IP Address: ${data.ip}`;
                	//userIp = data.ip;
                	//ipDisplay.textContent = `您的 IP: ${userIp}`;
            	})
            	.catch(error => {
					console.error('Error fetching IP address:', error);
                	//console.error('無法獲取 IP:', error);
                	//userIp = "未知使用者";
                	//ipDisplay.textContent = "無法偵測 IP";
            	});
                //const response = await fetch('https://api.ipify.org?format=json');
                //const data = await response.json();
                //document.getElementById('ip').innerText = `Your IP Address: ${data.ip}`;
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        }
    </script>
