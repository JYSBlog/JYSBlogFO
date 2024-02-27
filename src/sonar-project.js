import sonarqubeScanner from "sonarqube-scanner";

sonarqubeScanner(
    {
        serverUrl: "https://sonarcloud.io",
        options: {
            "sonar.sources": "./src",
        },
    },
    () => {},
);