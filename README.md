# DocNow

DocNow is a modern web application designed to simplify and streamline the process of scheduling and managing medical appointments. The app provides features for patients to easily subscribe, book appointments with doctors, and receive updates via SMS. On the admin side, doctors can manage appointments effectively, making healthcare access more convenient for everyone.

## Features

### For Patients:
- **Subscription Form:** Easy sign-up with a user-friendly form.
- **Appointment Booking:** Browse a list of available doctors and schedule appointments.
- **SMS Notifications:** Get instant updates on appointment status and cancellations.

### For Doctors (Admin Console):
- **Appointment Management:** View all appointments for each patient.
- **Scheduling Options:** Confirm or reschedule appointments.
- **Cancellation Management:** Cancel appointments when needed, with automated patient notifications.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Next.js
- **Backend:** Node.js
- **Database:** Appwrite
- **Notifications:** SMS functionality for real-time updates.

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- Appwrite instance set up and configured.
- Twilio or any other SMS gateway API configured for notifications.

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/alexPalladis/DocNow.git
   cd docnow
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the necessary environment variables:
   ```env
   PROJECT_ID=
   API_KEY=
   DATABASE_ID=
   PATIENT_COLLECTION_ID=
   DOCTOR_COLLECTION_ID=
   APPOINTMENT_COLLECTION_ID=
   NEXT_PUBLIC_BUCKET_ID=
   NEXT_PUBLIC_ENDPOINT=
   NEXT_PUBLIC_ADMIN_PASSKEY=
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Run the Production Build:**
   ```bash
   npm start
   ```

## Live Demo

Check out the live demo of the app at [DocNow Live Demo](https://doc-now-21660c7a60b3.herokuapp.com/).

## Usage

### Patients
1. Sign up using the subscription form.
2. Browse the list of doctors and book an appointment.
3. Receive SMS notifications about appointment status.

### Doctors (Admin Console)
1. Log in to access the admin dashboard.
2. View and manage appointments for patients.
3. Schedule or cancel appointments, triggering notifications to patients.
