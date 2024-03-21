<div align="center" >
  <img src="resources/logo-readme.webp" height="250" width="auto" >
<h1> Shop.co Ecommerce </h1>
</div>

## 🦾 Tech Stack

Here's a quick overview of the tech stack we use in our project:

### Frontend
- [**Next.js**](https://nextjs.org/) - The React framework for production.
- [**Typescript**](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [**Swiper**](https://swiperjs.com/) - Powerful and modern touch slider.
- [**React PDF**](https://react-pdf.org/) - Display PDFs in your React application.
- [**Zustand**](https://github.com/pmndrs/zustand) - A simple, fast and scalable bearbones state-management solution.

### Backend
- [**Node.js**](https://nodejs.org/en/) - JavaScript runtime for building fast server applications.
- [**Prisma**](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [**PostgreSQL**](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database.
- [**NodeMailer**](https://nodemailer.com) - Module for Node.js applications to allow easy email sending.

### DevOps and Deployment
- [**Docker**](https://www.docker.com/) - Platform for developing, shipping, and running applications.
- [**Vercel**](https://vercel.com/) - Hosting and serverless backend services for web applications.

### Testing
- [**Jest**](https://jestjs.io/) - Delightful JavaScript Testing Framework.
- [**Playwright**](https://playwright.dev/) - Browser automation library to enable cross-browser web testing.

### Design
- [**Figma**](https://www.figma.com/) - Online UI design and prototyping tool.

### Payment Processing
- [**Paypal**](https://www.paypal.com/) - Online payment system.
- [**MercadoPago**](https://www.mercadopago.com) - Latin American payment platform.

### Media Management
- [**Cloudinary**](https://cloudinary.com/) - Cloud service that offers a solution to a web application's entire image management pipeline.

### Miscellaneous
- [**Clerk**](https://clerk.com/) - User management and authentication for modern applications.
- [**ShadCn**](https://shadcn.com/) - (If ShadCn is a custom tool or library, you might want to provide more information or remove it if it's not publicly known or relevant to the project).

## 📘 Documentation

### Setting up the project

To get started with the project, follow these steps:

1. Clone the project repository:
    ```bash
    git clone https://github.com/DeusloVult/shop.co-ecommerce.git
    ```
2. Copy the contents from `env.example` into a new file named `.env.local`.

3. If you are using a local database, start the Docker container:
    ```bash
    docker compose up -d
    ```
   Alternatively, if you're connecting to an external database, specify the database connection string in your `.env.local` file:
    ```plaintext
    DATABASE_URL="your-database-connection-string"
    ```

4. Install the project dependencies using `pnpm`:
    ```bash
    pnpm install
    ```

5. Apply database migrations to set up the database schema:
    ```bash
    pnpm dlx prisma migrate dev --name init
    ```

6. Start the development server:
    ```bash
    pnpm dev
    ```

## 🚀 Folder Structure

- Use English for naming folders and files.
- For creating files, use the format `feature-name.ts` or `feature-name.tsx` (e.g., `data-products.ts`).
- Create folders to group related files within a category (e.g., `components`, `utils`).
- Manage imports using the Autobarrel extension for better organization and easier access from the main folder.

## 📝 Contributing

If you wish to contribute to the project, please follow these guidelines:

1. Clone the repository.
2. Fetch the latest updates from the main branch:
    ```bash
    git pull
    ```
3. Switch to the development branch:
    ```bash
    git switch dev
    ```
4. Create a new branch for your changes, using a descriptive name:
    ```bash
    git checkout -b feature/your-feature-name
    ```
5. Always pull the latest changes from the `dev` branch before starting to work on a new feature:
    ```bash
    git pull origin dev
    ```
6. Contribute by opening a Pull Request (PR).
7. If you encounter any bugs or would like to suggest new features, create an issue and assign the appropriate labels.

## 👨‍💻 Dummy Data

- The `data` folder is responsible for creating mock data for testing.
- Each data file should be generated using `data-generator.ts` to ensure consistency.
- Eventually, this dummy data will be replaced with actual data from the database.

<!-- ## ✨ Contributors

[![Contribuidores](https://contrib.rocks/image?repo=Lostovayne/shop.co-ecommerce)](https://github.com/Lostovayne/shop.co-ecommerce/contributors) -->

