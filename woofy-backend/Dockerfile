# Stage 1: Build the application with Maven
FROM maven:3.8.1-openjdk-11-slim AS build

# Set the working directory
WORKDIR /workspace

# Copy Maven wrapper executable and set permissions
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x ./mvnw

# Copy the pom.xml file and download dependencies
COPY pom.xml .
RUN ./mvnw dependency:go-offline -B

# Copy the project source code
COPY src ./src

# Package the application
RUN ./mvnw package -DskipTests

# Stage 2: Create the final image with the JAR file
FROM openjdk:11-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /workspace/target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
