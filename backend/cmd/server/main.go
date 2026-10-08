package main

import (
	"log"
	"net/http"

	"calculator-backend/config"
	"calculator-backend/routes"
)

func main() {
	cfg := config.Load()

	server := &http.Server{
		Addr:    ":" + cfg.Port,
	Handler: routes.SetupRoutes(),
	}

	log.Printf(
		"Calculator API running on port %s",
		cfg.Port,
	)

	err := server.ListenAndServe()

	if err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}