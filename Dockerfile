FROM node:14.15.0-alpine as build-stage
WORKDIR /app
COPY . ./
# COPY ["src", "package.json", "public" ,"./"]
RUN npm install  
RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]