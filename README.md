<div align="center" >
  <img src="resources/logo.jpg" height="180" width="auto" >
<h1> Shop.co Ecommerce </h1>
</div>

## ⚙️ Stack

- [**Next.js**](https://nextjs.org/)
- [**Typescript**](https://www.typescriptlang.org/)
- [**Tailwind**](https://tailwindcss.com/)
- [**Prisma**](https://www.prisma.io/)
- [**Docker**](https://www.docker.com/)
- [**ShadCn**](https://shadcn.com/)
- [**Vercel**](https://vercel.com/)
- [**Clerk**](https://clerk.com/)
- [**Playwright**](https://playwright.dev/)
- [**Jest**](https://jestjs.io/)
- [**Paypal**](https://www.paypal.com/)
- [**Mercadopago**](https://www.mercadopago.com)
- [**Swiper**](https://swiperjs.com/)
- [**Cloudinary**](https://cloudinary.com/)
- [**Postgresql**](https://www.postgresql.org/)
- [**React PDF**](https://react-pdf.org/)
- [**Zustand**](https://github.com/pmndrs/zustand)
- [**Node**](https://nodejs.org/en/)
- [**NodeMailer**](https://nodemailer.com)
- [**Figma**](<https://www.figma.com/file/3mWN7pXpoSpWS4GuVxOA8F/E-commerce-Website-Template-(Freebie)-(Community)?type=design&node-id=20-2&mode=design&t=OhMHyqBvndrTCNnZ-0>)

## 📚 Documentation

- Clonar el proyecto

```bash
git clone https://github.com/DeusloVult/shop.co-ecommerce.git
```

- Clonar lo del env.example en un archivo .env.local

- Levantar el contenedor de docker en caso de usar la bd local

```bash
docker compose up -d
```

- caso contrario agregar la variable de entorno a la bd para Neon Tech `DATABASE_URL=""`

- Instalar los modulos

```bash
pnpm install
```

- Ejecutar los comandos

```bash
pnpm dlx prisma migrate dev --name name
```

- Ejecutar el comando para levantar el servidor

```bash
pnpm dev
```

## 🚀 Folder

- Nombres de carpetas y archivos en Ingles
- para crear archivos se usara nombre-dequetratada.ts o tsx => data-products.ts
- se crearan las folders como agrupadores dentro de un (carpeta)
- Manejar importaciones usando Autobarrel desde el folder principal

## 📝 Contributing

- Clonar el repositorio
- Ejecutar el comando

```bash
git pull
```

- Moverse a la rama dev

```bash
git switch dev
```

- Crear una copia de esa rama con un nombre propio

```bash
git checkout -b <nombre>
```

- Siempre antes de hacer una pr traerse todos los cambios de la rama dev

```bash
git pull origin dev
```

- Usando una Pr Review (PR)
- Creacion de Issue en caso de encontrar fallas o querer agregar funcionalidad
- asignar los label requeridos a la issue
