# NODE API

A robust Node.js Express API empowered by MongoDB, offering seamless integration for user authentication, profile management, and data retrieval functionalities. Utilizing Pug templates for streamlined HTML rendering and Crypto for secure token generation, our application ensures both efficiency and security.

## API Reference

#### User SignUp

```http
  POST /api/signup
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username for new user |
| `password` | `string` | **Required**. Password for new user. Must be at least 8 characters long, contain at least one special character, one uppercase character, and one number.|
| `email` | `string` | **Required**. Email for new user |

#### User Login

```http
  POST /api/login
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username for Login |
| `password` | `string` | **Required**. Password for Login |

#### User Profile

```http
  POST /api/profile
```

| Header Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. JWT token |

#### Email Confirmation

```http
  POST /confirm
```

| Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Token for email verification |


## Usage of Pug Templates and Crypto for Token Generation

### Pug Templates

We've utilized Pug (formerly known as Jade) as our templating engine to streamline the process of generating HTML markup. Pug's concise and expressive syntax has enabled us to write HTML templates more efficiently, enhancing code readability and maintainability. Below is a brief overview of how we've integrated Pug into our project:

1. **Installation**: Pug can be easily installed via npm:

    ```bash
    npm install pug
    ```

2. **Usage**: After installation, Pug templates can be created with the `.pug` extension. These templates are then compiled into HTML files that can be served to clients.

3. **Advantages**: By leveraging Pug, we've simplified the process of generating dynamic HTML content, enabling us to focus more on application logic rather than tedious HTML markup.

### Crypto for Random Token Generation

In our application, we've utilized the Crypto module in Node.js for generating random tokens, particularly for tasks such as authentication, session management, and secure data transmission. Here's an overview of how we've implemented this functionality:

1. **Installation**: The Crypto module is a built-in module in Node.js, so no additional installation is required.

2. **Usage**: We've used the `crypto.randomBytes()` method to generate cryptographically secure random bytes, which are then converted to hexadecimal format to produce random tokens.

3. **Security**: By using Crypto for random token generation, we ensure that the generated tokens are cryptographically secure, mitigating the risk of token prediction or brute-force attacks.

By incorporating Pug for templating and Crypto for random token generation, we've enhanced the functionality and security of our application, providing a more robust and efficient user experience.