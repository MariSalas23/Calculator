package config

import "os"

// Define the application configuration
type Config struct {
	Port string
}

// Load the configuration from environment variables
func Load() Config {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	return Config{
		Port: port,
	}
}