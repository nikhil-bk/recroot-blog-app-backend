# Express.js Backend Routes Documentation

This documentation outlines the routes available in the Express.js backend for a Blog Application. The backend provides various endpoints for user authentication, blog management, and image upload/delete.

## User Routes

### Register a new user
- **Endpoint**: `POST /api/user/register`
- **Description**: Allows users to register by providing necessary information.
- **Request Body**:
  - `username` (string): User's desired username.
  - `email` (string): User's email address.
  - `password` (string): User's password.

### User Login
- **Endpoint**: `POST /api/user/login`
- **Description**: Handles user login by verifying credentials.
- **Request Body**:
  - `email` (string): User's email address.
  - `password` (string): User's password.

### Verify User Token
- **Endpoint**: `GET /api/user/verify`
- **Description**: Verifies the validity of the user's token.
- **Authentication**: Requires a valid token in the request headers.

### Get Current User Information
- **Endpoint**: `GET /api/user/getuser`
- **Description**: Retrieves information about the currently authenticated user.
- **Authentication**: Requires a valid token in the request headers.

## Blog Routes

### Create a New Blog Post
- **Endpoint**: `POST /api/blog/create`
- **Description**: Creates a new blog post.
- **Request Body**:
  - `title` (string): Title of the blog post.
  - `content` (string): Content of the blog post.
- **Authentication**: Requires a valid token in the request headers.

### Update a Blog Post by ID
- **Endpoint**: `PUT /api/blog/updateById/:id`
- **Description**: Updates an existing blog post by its ID.
- **Request Parameters**: `id` (string): ID of the blog post to be updated.
- **Request Body**:
  - `title` (string): Updated title of the blog post.
  - `content` (string): Updated content of the blog post.
- **Authentication**: Requires a valid token in the request headers.

### Get All Blog Posts
- **Endpoint**: `GET /api/blog/getAllBlogs`
- **Description**: Retrieves all blog posts.

### Get Blog Post by ID
- **Endpoint**: `GET /api/blog/getBlogById/:id`
- **Description**: Retrieves a specific blog post by its ID.
- **Request Parameters**: `id` (string): ID of the blog post to be retrieved.
- **Authentication**: Requires a valid token in the request headers.

### Get Blogs by User
- **Endpoint**: `GET /api/blog/getBlogsByUser`
- **Description**: Retrieves blog posts associated with the authenticated user.
- **Authentication**: Requires a valid token in the request headers.

### Delete Blog Post by ID
- **Endpoint**: `DELETE /api/blog/deleteBlogById/:id`
- **Description**: Deletes a blog post by its ID.
- **Request Parameters**: `id` (string): ID of the blog post to be deleted.
- **Authentication**: Requires a valid token in the request headers.

## Image Routes

### Upload Image to Cloudinary
- **Endpoint**: `POST /api/upload`
- **Description**: Uploads an image to Cloudinary.
- **Request Body**: 
  - `file` (file): Image file to be uploaded.
- **Authentication**: Requires a valid token in the request headers.

### Delete Image from Cloudinary
- **Endpoint**: `POST /api/destroy`
- **Description**: Deletes an image from Cloudinary.
- **Request Body**: 
  - `public_id` (string): Public ID of the image to be deleted.
  
