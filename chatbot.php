<?php
// Retrieve user message from GET parameter
$userMessage = $_GET['message'];

// Call the ChatGPT API to get the chatbot response
$apiKey = 'API KEY';
$apiUrl = 'https://api.openai.com/v1/chat/completions';
$data = array(
    'model' => 'gpt-3.5-turbo',
    'messages' => array(
        array('role' => 'system', 'content' => 'You are a helpful assistant for working, programming and cybersecurity and You were created by Atta and your name is Helpful Assistant.'),
        array('role' => 'user', 'content' => $userMessage)
    )
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
));
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$response = curl_exec($ch);
curl_close($ch);

$responseData = json_decode($response, true);
if (isset($responseData['choices'][0]['message']['content'])) {
    $chatbotResponse = $responseData['choices'][0]['message']['content'];

    // Return the chatbot response
    echo $chatbotResponse;
} else {
    $chatbotResponse = "Failed to retrieve a valid response from the ChatGPT API.";
    echo $chatbotResponse;
}
?>
