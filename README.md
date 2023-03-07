# Lighthouse Server 📚
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A NodeJs server built for the Lighthouse project. If you are looking for the client, please visit [lighthouse-web](https://github.com/ruymon/lighthouse-web).

## Understanding the idea 💡
Lighthouse is a project that strives to facilitate student's and staff's lives by providing a platform where they can find and share information about their school Library. The project is divided in two parts: Room booking system and announcements. The server is responsible for providing the API that the client will consume.

One of the core principles was making sure this wouldn't be a hassle to introduce to a school. To solve we opted to run as a micro-frontend inside the school's current platform. This way, the school doesn't need to change anything in their ecosystem. Due to this, you will notice this project is very coupled with [@Layers Education](https://github.com/layers-digital) architecture. To learn more about it, please visit [their official documentation](https://developers.layers.education/docs/)

## Project structure 🗂
As said before, we currently have to main modules: Booking a room and General Information, which is divided in two parts: Announcements and Events. Essentially they follow a CRUD pattern and are very similar to each other. In the other hand, due to the Layers integration we do have some extra modules that are not directly related to the project but are required to make it work for performance reasons. They are:

- **Users**:
 - This database column is used to store user information fetched from the Layers API. This is done to avoid making unnecessary requests to the API and to make sure the user is always up to date.

- **Authentication**:
  - Even though Layers provides a flag for users to have distinct permissions, we opted to use a different approach. We created a flag embedded in the User called `isAdmin` that stores, at this current moment a boolean. This is done to make sure our system is, at a certain point, independent from the Layers Community it is used in. This way, if we ever need to change the way we handle permissions, we can do it without having to change the whole system and dealing with each individual use case from different schools.

## Tech Stack 🛠
- NodeJs
- Express
- Typescript
- PostgreSQL
- Prisma ORM

## Getting started 🚀
To get started, you will need to have NodeJs and Docker installed in your machine. If you don't have them, please visit the following links:

- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

In order to run the project, you will need to create a `.env` file in the root of the project. This file will contain all the environment variables that the project will use. You can find an example of the file in the `.env.example` file. The variables are:

- `DATABASE_URL="postgresql://postgres:1234@localhost:5432/postgres?schema=public"`
- `LAYERS_API_BASE_URL="https://api.layers.digital/v1"`
- `LAYERS_TOKEN=""`

After you have created the `.env` file, you will need to run the following commands:

- `npm install`
- `npm run prisma:generate`
- `npm run prisma:migrate`
- `npm run dev`

At this current moment, the project is not properly configured to use Docker out of the box. As a workaround, you can run the following commands to create a PostgreSQL container and run the project inside it:

`docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 postgres`

Keep in mind the example above is using the default values for the `.env` file. If you have changed them, you will need to change them in the command as well.

## Contributing 🤝
If you want to contribute to the project, please follow the following steps:

- Fork the project
- Create a new branch
- Make your changes
- Create a pull request

## License 📝
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments 🙏
This project was only possible thanks to the following people, for their help and support! Feel free to check their profiles and give them a follow:

- [Layers Education](https://layers.education/)
- [Luiz Gotardo](https://github.com/DoginUwU)
- [Lucas Gripa](https://github.com/lucas-grippa)
- [Carlos Rafael](https://github.com/CarlosZoft)
