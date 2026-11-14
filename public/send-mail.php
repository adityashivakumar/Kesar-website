<?php
// send-mail.php

// Enable CORS if your frontend and backend are on separate ports during development, or remove in production
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input values
    $name    = strip_tags(trim($_POST["name"] ?? ''));
    $company = strip_tags(trim($_POST["company"] ?? ''));
    $email   = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $project = strip_tags(trim($_POST["project_type"] ?? ''));
    $details = htmlspecialchars(trim($_POST["project_details"] ?? ''));

    // Validate required fields
    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please provide a valid name and email address."]);
        exit;
    }

    // Email configuration
    $to = "designs@kesardesigns.com";
    $subject = "New Project Inquiry from " . $name . ($company ? " (" . $company . ")" : "");

    // Construct the email body
    $email_content = "You have received a new project inquiry from your website:\n\n";
    $email_content .= "Name: " . $name . "\n";
    $email_content .= "Company: " . ($company ? $company : "N/A") . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Project Type: " . ($project ? $project : "N/A") . "\n\n";
    $email_content .= "Project Details:\n" . $details . "\n";

    // Build email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank you. Your inquiry has been sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong and we couldn't send your message."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Access denied."]);
}
?>