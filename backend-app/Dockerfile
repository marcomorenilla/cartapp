
# Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
# Click nbfs://nbhost/SystemFileSystem/Templates/Other/Dockerfile to edit this template

# Step 1: Crear ejecutable
FROM maven:latest AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Step 2: Copiar el ejecutable a nuestra imagen
FROM openjdk:26-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar ./java.jar
EXPOSE 8081
CMD ["java", "-jar", "java.jar"]
