# DevFund

DevFund is a crowdfunding platform for developers and creators. It allows users to support their favorite developers by funding their projects.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dev-fund.git
cd dev-fund
```
2. Install the dependencies by running the following command:
```bash
npm install
```
3. Create a env.local file in the root directory and add the following environment variables:
```sh
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
MONGO_URL=your_mongo_connection_string

GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

NEXT_PUBLIC_RAZORPAY_ID=your_razorpay_id
RAZORPAY_SECRET=your_razorpay_secret

NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4.Running the Development Server
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

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.
