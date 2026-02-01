# rbcyber.org Production Repo

[rbcyber.org](https://rbcyber.org/) serves as the main website for the operation of Rancho Bernardo's cybersecurity club. This repo is a direct reflection of the website and includes the frontend and backend. It runs under Cloudflare protections.

## Contents

Before the club starts in August, the website will include,

- A login system for members to access binaries and other necessary material
- Exam information, content, and tutorial schedule
- Meeting times and information for interested members
- Public tutorial pathways for cyber topics; a hub for cybersecurity knowledge
- About page and club pictures

The website uses a Vite + React + MySQL setup that is optimized for smaller webpages.

## Setup

Setup may be abnormal compared to other web projects; a sample dotenv is provided in the `/src/config/` directory, which is necessary for the database to function. This repo is optimized for production as the server runs directly off the main branch.

### Initial Setup

1. Install `mysqld` and `mysql-client`; alternatively, you can opt for MariaDB. Configure as necessary. Install, at minimum, Node 22 and the latest version of your preferred package manager.
2. Clone the dev branch for the latest features, often a buggy mess. Then enter `/client/` and `/src/` independently and install the production dependencies.
3. Make sure `example.env` is copied to a real `.env` file; the example is provided for convenience and is not referenced in the backend. It is very important that the values for `JWT_SECRET` and `DEFAULT_ADMIN_PASS` are changed before running in a production environment.
4. Build the frontend with `npm run build` in the `/client/` directory. Navigate back to the `/src/` directory and run `npm start`. The backend should now serve all the frontend files.

### Convenience

It may be optimal to set up a build script that does this manually. For example, `systemd` does all the heavy lifting by automatically building the website. Additionally, other init system services update the server's dynamic IP address for both GitHub Actions and Cloudflare's DNS records. The scripts I use for production are provided in the `/tools/` directory. Make sure to replace path variables with your system's scripting path.

## Contributing

Please PR to the dev branch, as it makes it easier to integrate features into the next website build. Please lint all code before committing. All contributions are greatly appreciated.

## Credits

Great thanks to [@ZakiPotato](https://github.com/ZakiPotato) and [@FoolishRoach](https://github.com/FoolishRoach) for providing the necessary hardware and funding to operate this website.
