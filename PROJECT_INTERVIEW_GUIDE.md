# Construction Web Project - Interview Guide

## Project Overview
A full-stack **Construction Management Web Application** with separate frontend and backend, featuring both public-facing pages for showcasing services and projects, and a protected admin panel for content management.

---

## 🎨 Frontend Technologies

### Core Technologies
1. **React 19.1.1** - Modern JavaScript library for building UI components
2. **Vite 7.1.0** - Next-generation frontend build tool (faster than Webpack)
3. **React Router DOM 7.8.0** - Client-side routing for SPA navigation

### UI/Styling Libraries
4. **Bootstrap 5.3.7** - CSS framework for responsive design
5. **React Bootstrap 2.10.10** - Bootstrap components as React components
6. **Sass (SCSS)** - CSS preprocessor for advanced styling capabilities
7. **Swiper 12.0.2** - Modern touch slider for carousels/image galleries

### Form & Data Management
8. **React Hook Form 7.67.0** - Performant form validation and handling
9. **React Toastify 11.0.5** - Toast notifications for user feedback

### Rich Text Editor
10. **Jodit React 5.2.26** - WYSIWYG HTML editor for content creation

### Development Tools
- **ESLint** - Code linting and quality control
- **@vitejs/plugin-react** - React plugin for Vite

---

## 🔧 Backend Technologies

### Core Framework
1. **Laravel 12.0** - Modern PHP framework following MVC architecture
2. **PHP 8.2** - Latest PHP version with performance improvements

### Authentication & API
3. **Laravel Sanctum 4.0** - Token-based API authentication for SPA
   - Provides secure token management
   - Used for admin authentication
   - Creates personal access tokens

### Image Processing
4. **Intervention Image 3.11** - Image manipulation library
   - Image resizing and optimization
   - Thumbnail generation
   - Format conversion

### Development Tools
5. **Laravel Tinker 2.10.1** - REPL for Laravel (interactive command line)
6. **Faker PHP 1.23** - Generate fake data for testing
7. **PHPUnit 11.5.3** - Unit testing framework
8. **Laravel Pint 1.13** - Code style fixer
9. **Laravel Sail 1.41** - Docker development environment

### Database
- **MySQL** (via XAMPP) - Relational database management system

---

## 🔐 Authentication Implementation

### Authentication Library
**Laravel Sanctum** - Token-based authentication system

### Authentication Flow

#### 1. **Login Process**
```
Frontend (React) → POST to /api/authenticate → Backend validates credentials
→ Laravel creates Sanctum token → Returns token + user ID to frontend
→ Frontend stores in localStorage → Includes token in subsequent requests
```

#### 2. **Key Components**

**Backend - AuthenticationController.php**
- `authenticate()` method validates email/password
- Uses Laravel's `Auth::attempt()` to verify credentials
- Creates personal access token on successful login
- Returns JSON response with token and user ID

**Frontend - Login.jsx**
- Uses React Hook Form for form validation
- Sends credentials to backend API
- Stores user info (token, id) in localStorage
- Uses AuthContext for global state management

#### 3. **Protected Routes**
- **Frontend**: `RequireAuth` component wraps protected routes
- **Backend**: Sanctum middleware (`auth:sanctum`) protects API routes
- Token sent in Authorization header for authenticated requests

#### 4. **Logout**
- Deletes all user tokens from database
- Clears localStorage on frontend
- Redirects to login page

---

## 🌟 Key Features

### Public Features (Frontend)

1. **Home Page**
   - Hero section with call-to-action buttons
   - About Us section
   - Latest services showcase (4 latest)
   - Why Choose Us section (3 value propositions)
   - Latest projects gallery
   - Client testimonials

2. **Services Page**
   - Display all available services
   - Individual service detail pages
   - Service descriptions and images

3. **Projects Page**
   - Showcase completed/ongoing projects
   - Project detail pages with full information
   - Project images and descriptions

4. **About Page**
   - Company information
   - Team members display
   - Company values

5. **Contact Page**
   - Contact form for inquiries
   - Company contact information

### Admin Features (Protected)

1. **Dashboard**
   - Overview of website statistics
   - Quick access to all management sections

2. **Service Management**
   - Create new services
   - Edit existing services
   - Delete services
   - List all services
   - Upload service images
   - Rich text editor for service descriptions

3. **Project Management**
   - Create new projects
   - Edit project details
   - Delete projects
   - List all projects
   - Upload project images (main + gallery)
   - Rich text editor for project descriptions

4. **Testimonial Management**
   - Add client testimonials
   - Edit testimonials
   - Delete testimonials
   - Display/hide testimonials

5. **Member Management**
   - Add team members
   - Edit member information
   - Delete members
   - Upload member photos

6. **Image Management**
   - Temporary image upload system
   - Image optimization and resizing
   - Multiple image format support

---

## 🏗️ Architecture & Design Patterns

### Frontend Architecture
- **Component-based architecture** with React
- **Context API** for authentication state management
- **Custom hooks** for reusable logic
- **Protected routes** pattern for admin access
- **Responsive design** with Bootstrap grid system

### Backend Architecture
- **MVC Pattern** (Model-View-Controller)
- **RESTful API** design
- **Middleware** for authentication and CORS
- **Repository pattern** implied through Eloquent models
- **Service-Controller** separation

### Database Schema
**Main Tables:**
1. **users** - Admin users
2. **services** - Service offerings
3. **projects** - Construction projects
4. **testimonials** - Client reviews
5. **members** - Team members
6. **temp_images** - Temporary uploaded images
7. **personal_access_tokens** - Sanctum tokens

---

## 🔄 API Integration

### Public API Endpoints
- `GET /api/get-services` - All services
- `GET /api/get-latest-services` - Latest 4 services
- `GET /api/get-service/{id}` - Service details
- `GET /api/get-projects` - All projects
- `GET /api/get-latest-projects` - Latest projects
- `GET /api/get-project/{id}` - Project details
- `GET /api/get-testimonials` - All testimonials
- `GET /api/get-members` - Team members

### Protected API Endpoints
- `POST /api/authenticate` - Login
- `GET /api/logout` - Logout
- `GET /api/dashboard` - Dashboard data
- CRUD operations for: services, projects, testimonials, members
- `POST /api/temp-images` - Image upload

---

## 🚀 Development & Deployment

### Frontend Development
```bash
cd frontend
npm install
npm run dev  # Runs on port 5173 or 5174
```

### Backend Development
```bash
cd backend
composer install
php artisan serve  # Runs on port 8000
php artisan migrate
php artisan db:seed
```

### Key Configuration
- **CORS enabled** for cross-origin requests
- **API base URL**: `http://localhost:8000/api/`
- **Frontend URLs**: Port 5173/5174

---

## 💡 Technical Highlights to Mention in Interview

1. **Modern Stack**: Using latest versions of React (19) and Laravel (12)
2. **SPA Architecture**: Single Page Application with React Router
3. **Token Authentication**: Secure API with Sanctum tokens
4. **Image Optimization**: Automatic image processing with Intervention Image
5. **Form Validation**: Client-side (React Hook Form) + Server-side (Laravel Validator)
6. **Responsive Design**: Mobile-first approach with Bootstrap
7. **Code Quality**: ESLint for frontend, Laravel Pint for backend
8. **User Experience**: Toast notifications, loading states, error handling
9. **Separation of Concerns**: Dedicated frontend/backend controllers
10. **RESTful Design**: Standard HTTP methods and status codes

---

## 🎯 Interview Questions You Should Be Ready For

### 1. Why did you choose Laravel Sanctum over JWT?
**Answer**: Sanctum is simpler for SPA authentication, has better Laravel integration, and provides built-in CSRF protection. It's lightweight and perfect for first-party SPAs.

### 2. How does your authentication work?
**Answer**: On login, Laravel validates credentials and creates a personal access token. Frontend stores this in localStorage and includes it in the Authorization header for protected requests. Backend middleware validates the token.

### 3. How do you handle image uploads?
**Answer**: Two-step process: temporary upload first, then permanent save with the entity. Using Intervention Image for optimization and resizing to improve performance.

### 4. Why separate frontend and backend?
**Answer**: Better separation of concerns, scalability, different teams can work independently, easier to maintain, and can deploy separately.

### 5. How do you handle CORS?
**Answer**: Laravel CORS middleware configured to allow requests from frontend origin (localhost:5173/5174) with appropriate headers.

---

## 📊 Project Statistics
- **Frontend Components**: 15+ React components
- **Backend Controllers**: 10+ controllers
- **Database Tables**: 7 main tables
- **API Endpoints**: 30+ routes
- **Authentication**: Token-based with Sanctum
- **Admin Features**: Full CRUD for 4 entities

---

## 🔒 Security Features
1. Token-based authentication (Sanctum)
2. Protected API routes with middleware
3. Form validation (client & server-side)
4. SQL injection protection (Eloquent ORM)
5. XSS protection (Laravel escaping)
6. CSRF protection (Sanctum SPA authentication)

---

## 🎨 UI/UX Features
1. Responsive design (mobile, tablet, desktop)
2. Toast notifications for user feedback
3. Form validation with error messages
4. Loading states during API calls
5. Clean, modern interface with Bootstrap
6. Image sliders/carousels for projects
7. Rich text editing for content

---

Good luck with your interview! 🚀
