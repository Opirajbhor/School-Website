# School Website

A modern, full-featured school management and information website built with Next.js, featuring a public-facing portal and administrative dashboard.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Database Setup](#-database-setup)
- [Usage](#-usage)
- [Components & UI](#-components--ui)
- [Contributing](#-contributing)

---

## ✨ Features

### Public Portal

- **Homepage** - Engaging hero section with institution statistics
- **About School** - Comprehensive school information and mission
- **Gallery** - Image gallery powered by Cloudinary
- **Notice Board** - Announcements and important notices with detailed views
- **Staff Directory** - Searchable teacher and staff listings
- **Message Section** - School announcements and communications
- **Responsive Design** - Fully optimized for mobile and desktop devices

### Administrative Dashboard

- **Dashboard** - Centralized admin control panel
- **Staff Management** - Create, update, and manage staff information
- **Gallery Management** - Upload and manage school gallery images
- **Notice Management** - Create and publish announcements
- **About School Editor** - Update school information
- **Homepage Settings** - Manage homepage content

### Additional Features

- **Authentication** - Secure login/signup system
- **Dark Mode** - Built-in theme toggle with dark/light modes
- **Real-time Data Fetching** - TanStack Query for efficient data synchronization
- **Form Validation** - React Hook Form with comprehensive validation
- **Image Management** - Cloudinary integration for image optimization
- **Persistent Queries** - Automatic query persistence and hydration

---

## 🛠️ Tech Stack

### Frontend

- **Framework** - [Next.js 15](https://nextjs.org/) with App Router
- **UI Library** - [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Styling** - [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling** - [React Hook Form](https://react-hook-form.com/)
- **Theme Management** - [next-themes](https://github.com/pacocoursey/next-themes)

### Backend & Database

- **ORM** - [Prisma](https://www.prisma.io/)
- **Database** - (Configure in `.env.local`)

### Data Management

- **State Management** - [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **HTTP Client** - [Axios](https://axios-http.com/)
- **Query Persistence** - TanStack Query Persist Client

### Media & Content

- **Image Hosting** - [Cloudinary](https://cloudinary.com/)
- **Carousel** - [Embla Carousel](https://www.embla-carousel.com/)

### Development Tools

- **Type Checking** - TypeScript
- **Linting** - ESLint
- **Code Formatting** - Prettier
- **Notifications** - React Hot Toast

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - v18.0.0 or higher
- **npm** or **yarn** - Latest version
- **Git** - For version control

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd school-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then configure the variables (see [Environment Variables](#-environment-variables) section).

### 4. Initialize Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
school-website/
├── app/                           # Next.js App Router
│   ├── (main)/                    # Main public pages layout group
│   │   ├── about-school/          # About school page
│   │   ├── gallery/               # Gallery page
│   │   ├── message/               # Messages page
│   │   ├── notice-board/          # Notice board page
│   │   ├── notices/               # Notices listing and details
│   │   └── teachers/              # Staff directory
│   ├── api/                       # API routes
│   │   ├── about-school/          # About school endpoints
│   │   ├── auth/                  # Authentication endpoints
│   │   ├── banner/                # Banner management
│   │   ├── gallery/               # Gallery endpoints
│   │   ├── notices/               # Notices endpoints
│   │   ├── staff/                 # Staff endpoints
│   │   └── ...                    # Other API routes
│   ├── dashboard/                 # Admin dashboard
│   │   ├── about-school/          # Manage about section
│   │   ├── gallery/               # Manage gallery
│   │   ├── notices/               # Manage notices
│   │   └── staff-management/      # Manage staff
│   ├── auth/                      # Authentication pages
│   │   ├── login/                 # Login page
│   │   └── signup/                # Signup page
│   ├── layout.tsx                 # Root layout
│   ├── loading.tsx                # Loading UI
│   └── globals.css                # Global styles
├── components/                    # Reusable components
│   ├── ui/                        # shadcn/ui components
│   ├── login-form.tsx             # Login form component
│   ├── theme-provider.tsx         # Theme provider
│   └── ...
├── Custom-Components/             # Custom application components
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Footer.tsx                 # Footer component
│   ├── Dashboard-Compo/           # Dashboard-specific components
│   ├── Stuff-Section/             # Staff section components
│   └── ...
├── lib/                           # Utility functions and helpers
│   ├── utils.ts                   # General utilities
│   ├── imagePreview.ts            # Image preview utilities
│   ├── axios/                     # Axios configuration
│   ├── cloudinary/                # Cloudinary integration
│   ├── prisma/                    # Prisma utilities
│   ├── providers/                 # React providers
│   ├── types/                     # Type definitions
│   └── tanStack/                  # React Query setup
├── prisma/                        # Prisma configuration
│   └── schema.prisma              # Database schema
├── public/                        # Static assets
│   ├── images/                    # Static images
│   └── fonts/                     # Custom fonts
├── middleware.ts                  # Next.js middleware
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS config
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── README.md                      # This file
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

````env
# Database
DATABASE_URL="your_database_connection_string"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=''
NEXT_PUBLIC_CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET= ''

# dashboard login
ADMIN_EMAIL=your email
ADMIN_PASS = password
SESSION_TOKEN=logged_in


---

## 🎯 Getting Started

### Development Workflow

1. **Start the dev server:**

   ```bash
   npm run dev
````

2. **Access the application:**
   - Public site: [http://localhost:3000](http://localhost:3000)
   - Dashboard: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

3. **Make changes:**
   - Edit files and changes will hot-reload automatically

### Building for Production

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start development server with Turbopack |
| `npm run build`     | Build for production                    |
| `npm start`         | Start production server                 |
| `npm run lint`      | Run ESLint                              |
| `npm run format`    | Format code with Prettier               |
| `npm run typecheck` | Check TypeScript types                  |

---

## 🗄️ Database Setup

### 1. Configure Database Connection

Update `DATABASE_URL` in `.env.local` with your database connection string.

### 2. Create Migrations

```bash
npx prisma migrate dev --name initial_setup
```

### 3. Access Prisma Studio

```bash
npx prisma studio
```

This opens a visual interface to view and edit your database at [http://localhost:5555](http://localhost:5555).

### 4. Update Schema

- Edit `prisma/schema.prisma`
- Run migrations to apply changes
- Prisma Client is automatically generated

---

## 💻 Usage

### Adding New UI Components

```bash
npx shadcn@latest add [component-name]
```

### Using API Routes

API routes are located in `app/api/`. Example:

```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello World' });
}
```

### Form Handling with React Hook Form

```typescript
import { useForm } from 'react-hook-form';

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username', { required: true })} />
      {errors.username && <span>Username is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Using React Query

```typescript
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useNotices() {
  return useQuery({
    queryKey: ['notices'],
    queryFn: () => axios.get('/api/notices').then(res => res.data),
  });
}
```

---

## 🎨 Components & UI

This project uses **shadcn/ui** components. Available components include:

- Button
- Card
- Dialog
- Input
- Label
- Select
- Tabs
- Table
- Tooltip
- Badge
- And more...

Import and use components:

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Example() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's linting and formatting standards.

---

## 📝 License

This project is private and proprietary. All rights reserved.

---

## 📞 Support

For issues, questions, or suggestions, please contact the development team or open an issue in the repository.

---

**Happy coding! 🚀**
