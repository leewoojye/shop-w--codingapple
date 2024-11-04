function logMessages(level, ...messages) {
  messages.forEach((message) => {
    console.log(`[${level}] ${message}`);
  });
}

logMessages("INFO", "Server started", "Listening on port 3000");
