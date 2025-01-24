This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

ESSENTIAL FEATURES

## REGISTER (OK)

-   Email and Password Registration: Allow users to sign up using their email and password.
-   Social Authentication: Enable login via platforms like Google, Facebook, or GitHub.

## LOGIN (OK)

-   Email and Password Login: Basic login using registered credentials.
-   Social Login: Allow login via social platforms (Google, Facebook, GitHub, etc.). -Persistent Login: Remember the user's session even after the browser is closed.

## LOGOUT (OK)

-   Provide a way for users to log out securely and clear their session.

## AUTH STATE MANAGEMENT (OK)

-   Automatically detect when a user logs in or out and update the UI dynamically.

## PASSWORD RESET

-   Allow users to reset their password via an email link.

## EMAIL VERIFICATION

-   Send a verification email after registration to ensure the email address is valid.

## PROTECTED ROUTES (OK)

-   Secure specific pages by allowing only authenticated users to access them.

ADVANCED FEATURE

## MULTI-FACTOR AUTHENTICATION (MFA)

-   Add an extra layer of security by requiring a second factor, like an SMS code or authentication app.

## ROLE-BASED ACCESS CONTROL (RBAC)

## USER PROFILE MANAGEMENT

## CUSTOM CLAIMS FOR AUTHORIZATION

SECURITY FEATURES

## SESSION EXPIRATION HANDLING

## SECURE TOKEN MANAGEMENT

## DEVICE-BASED SESSION CONTROL

TYPE OF AUTHENTICATION

-   USERNAME/PASSWORD
-   GOOGLE AUTHENTICATION
-   GITHUB AUTHENTICATION
