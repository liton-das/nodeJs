````markdown
# Farm & Room Rental Management Web Application

A Node.js web application for managing farm expenses and room rentals. Supervisors can upload room pictures with pricing, and tenants can view their rent details, while admins oversee the entire system.

---

##  Features

### 1. **Farm Expense Management**
- Track daily, weekly, and monthly expenses
- Add, edit, and delete expense entries
- Categorize expenses (Feed, Maintenance, Utilities, Salaries, etc.)
- View and generate expense reports

### 2. **Room Rental Management**
- Add and manage rooms with:
  - Room number and type (e.g., Single, Double)
  - Monthly rent price
  - Availability status (Available, Occupied, Under Maintenance)
  - Room images (upload and display)
- Assign rooms to tenants
- Record and view rent payment history per tenant

### 3. **Roles & Permissions**
- **Admin**
  - Full access (manage users, rooms, expenses, supervisors)
- **Supervisor**
  - Add/edit/delete rooms (incl. uploading pictures and pricing)
  - Manage tenants and rental assignments
- **Tenant (User)**
  - View assigned room, rent status, and payment history

---

##  Data Model (Example JSON Structure)

### `Room` Object
```json
{
  "id": 1,
  "room_number": "A-101",
  "room_type": "Single",
  "price": 1500,
  "status": "Available",
  "image_url": "https://example.com/uploads/rooms/A101.jpg",
  "description": "Spacious single room with balcony and attached bathroom.",
  "created_at": "2025-09-08T12:30:00Z",
  "updated_at": "2025-09-08T12:30:00Z",
  "tenant": {
    "id": 5,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+97450000000",
    "start_date": "2025-09-10",
    "end_date": null,
    "payment_status": "Pending"
  }
}
````

### Key Data Tables / Entities

| Table / Entity    | Fields                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Users**         | `id`, `name`, `email`, `password`, `role`                                                                   |
| **Expenses**      | `id`, `category`, `amount`, `date`, `description`                                                           |
| **Rooms**         | `id`, `room_number`, `room_type`, `price`, `status`, `image_url`, `description`, `created_at`, `updated_at` |
| **Tenants**       | `id`, `user_id`, `room_id`, `start_date`, `end_date`                                                        |
| **Rent Payments** | `id`, `tenant_id`, `amount`, `payment_date`, `status`                                                       |

---

## API Endpoints (Example Routes)

| Method   | Endpoint                    | Description                   |
| -------- | --------------------------- | ----------------------------- |
| `POST`   | `/api/expenses`             | Create an expense entry       |
| `GET`    | `/api/expenses`             | List all expenses             |
| `PUT`    | `/api/expenses/:id`         | Update an expense             |
| `DELETE` | `/api/expenses/:id`         | Remove an expense             |
| `POST`   | `/api/rooms`                | Add room (with image upload)  |
| `GET`    | `/api/rooms`                | Fetch all rooms               |
| `GET`    | `/api/rooms/:id`            | Get room details              |
| `PUT`    | `/api/rooms/:id`            | Update room details           |
| `DELETE` | `/api/rooms/:id`            | Delete a room                 |
| `POST`   | `/api/tenants`              | Assign a tenant to a room     |
| `GET`    | `/api/tenants/:id/payments` | View tenant’s payment history |
| `POST`   | `/api/payments`             | Record rent payment           |

---

## Passport (Authentication)

Integrate **passport.js** (or any auth middleware) to handle:

* User registration and login
* Role-based access control for Admin, Supervisor, and Tenant

---

## Project Setup

```bash
git clone https://github.com/liton-das/nodeJs.git
cd nodeJs

# Install dependencies
npm install

# Create a .env file (Example variables)
# DATABASE_URL=...
# JWT_SECRET=...
# UPLOAD_DIR=./public/uploads

# Start application
npm start
```

---

## Directory Structure (Suggested)

```
nodeJs/
├── controllers/
│   ├── authController.js
│   ├── expenseController.js
│   ├── roomController.js
│   └── tenantController.js
├── models/
│   ├── User.js
│   ├── Expense.js
│   ├── Room.js
│   ├── Tenant.js
│   └── Payment.js
├── routes/
│   ├── auth.js
│   ├── expenses.js
│   ├── rooms.js
│   └── tenants.js
├── public/uploads/      # Stores room images
├── views/               # If using EJS templates
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Contributing

Interested in contributing? Great!

1. Fork the repository
2. Create a feature branch (e.g., `feature/expense-report`)
3. Commit your changes
4. Push to your fork
5. Submit a pull request

Please ensure proper testing and maintain code quality.

---

## License

Specify your chosen license (e.g., MIT, Apache 2.0)

---

## Contact

Have questions, suggestions, or want to collaborate?
Feel free to reach out: `liton@example.com` (replace with your real email)


