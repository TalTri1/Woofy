# Start with a base image containing Java runtime and Maven
FROM maven:3.8.1-openjdk-11-slim as build

# Make source folder
RUN mkdir -p /workspace

WORKDIR /workspace

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml file
COPY pom.xml .

# Build all the dependencies in preparation to go offline.
# This is a separate step so the dependencies will be cached unless
# the pom.xml file has changed.
RUN ./mvnw dependency:go-offline -B

# Copy the project source
COPY src src

# Package the application
RUN ./mvnw package -DskipTests

# Start with a base image containing Java runtime
FROM openjdk:11-jdk-slim

# The application's .jar file
COPY --from=build /workspace/target/*.jar app.jar

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]