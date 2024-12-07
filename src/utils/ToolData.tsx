import bootstrap from "../assets/tools/bootstrap.svg";
import nodejs from "../assets/tools/nodejs.svg";
import express from "../assets/tools/express.svg";
import postgres from "../assets/tools/postgres.svg";
import prisma from "../assets/tools/prisma.svg";
import drizzle from "../assets/tools/drizzle.png";
import react from "../assets/tools/react.svg";
import nextjs from "../assets/tools/nextjs.svg";
import redux from "../assets/tools/redux.svg";
import ts from "../assets/tools/ts.svg";
import js from "../assets/tools/js.svg";
import vercel from "../assets/tools/vercel.svg";
import vscode from "../assets/tools/vscode.svg";
import webstorm from "../assets/tools/webstorm.svg";
import vite from "../assets/tools/vite.svg";
import postman from "../assets/tools/postman.svg";
import firebase from "../assets/tools/firebase.svg";
import supabase from "../assets/tools/supabase.svg";
import mongo from "../assets/tools/mongo.svg";
import tailwind from "../assets/tools/tailwind.svg";
import github from "../assets/tools/github.svg";
import git from "../assets/tools/git.svg";
import html from "../assets/tools/html.svg";
import css from "../assets/tools/css.svg";
import materialui from "../assets/tools/materialui.svg";
import cpp from "../assets/tools/cpp.svg";
import docker from "../assets/tools/docker.svg";
import mysql from "../assets/tools/mysql.svg";
import sqlite from "../assets/tools/sqlite.svg";
import socketio from "../assets/tools/socketio.svg";
import neon from "../assets/tools/neon.svg";
import authjs from "../assets/tools/authjs.svg";
import betterauth from "../assets/tools/betterauth.jpg";
import groqai from "../assets/tools/groqai.jpg";
import passportjs from "../assets/tools/passportjs.svg";

const toolData = {
  bootstrap: {
    img: bootstrap,
    url: "https://getbootstrap.com/",
    description:
      "Bootstrap is a widely used front-end framework that helps developers create responsive, mobile-first websites with pre-designed components and utilities.",
  },
  nodejs: {
    img: nodejs,
    url: "https://nodejs.org/en",
    description:
      "Node.js allows developers to build scalable server-side applications using JavaScript, offering an event-driven and non-blocking I/O model for high performance.",
  },
  express: {
    img: express,
    url: "https://expressjs.com/",
    description:
      "Express is a lightweight web application framework for Node.js that simplifies building APIs and web apps with minimal boilerplate.",
  },
  postgres: {
    img: postgres,
    url: "https://www.postgresql.org/",
    description:
      "PostgreSQL is a robust, open-source relational database known for its advanced features, extensibility, and reliability in handling complex data workloads.",
  },
  prisma: {
    img: prisma,
    url: "https://www.prisma.io/",
    description:
      "Prisma streamlines database workflows by providing a modern toolkit for querying, migrating, and managing databases in a type-safe manner.",
  },
  drizzle: {
    img: drizzle,
    url: "https://orm.drizzle.team",
    description:
      "Drizzle is a TypeScript ORM designed to offer simplicity and flexibility for interacting with SQL databases while maintaining type safety.",
  },
  react: {
    img: react,
    url: "https://react.dev/",
    description:
      "React is a popular JavaScript library for building interactive and dynamic user interfaces using reusable components.",
  },
  nextjs: {
    img: nextjs,
    url: "https://nextjs.org/",
    description:
      "Next.js is a React framework that facilitates server-side rendering, static site generation, and API routes for modern web applications.",
  },
  redux: {
    img: redux,
    url: "https://redux.js.org/",
    description:
      "Redux helps manage the state of applications in a predictable way, making it easier to build and maintain complex JavaScript apps.",
  },
  ts: {
    img: ts,
    url: "https://www.typescriptlang.org/",
    description:
      "TypeScript adds static typing to JavaScript, enhancing code reliability and maintainability for large-scale applications.",
  },
  js: {
    img: js,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript powers dynamic web pages and enables interactive functionality on the client and server sides.",
  },
  vercel: {
    img: vercel,
    url: "https://vercel.com",
    description:
      "Vercel is a platform that simplifies deploying, hosting, and scaling modern web applications with a focus on performance and collaboration.",
  },
  vscode: {
    img: vscode,
    url: "https://code.visualstudio.com/",
    description:
      "Visual Studio Code is a lightweight yet powerful code editor that supports debugging, extensions, and integrated Git.",
  },
  webstorm: {
    img: webstorm,
    url: "https://www.jetbrains.com/webstorm/",
    description:
      "WebStorm is an IDE from JetBrains tailored for modern JavaScript development, offering advanced tools and features.",
  },
  vite: {
    img: vite,
    url: "https://vite.dev/",
    description:
      "Vite provides a fast development experience with instant hot module replacement and efficient builds for modern front-end projects.",
  },
  postman: {
    img: postman,
    url: "https://www.postman.com/",
    description:
      "Postman is a collaboration tool for API development that allows developers to design, test, and document APIs efficiently.",
  },
  firebase: {
    img: firebase,
    url: "https://firebase.google.com/",
    description:
      "Firebase by Google is a suite of tools for building web and mobile applications, offering authentication, databases, and cloud hosting.",
  },
  supabase: {
    img: supabase,
    url: "https://supabase.com/",
    description:
      "Supabase is an open-source alternative to Firebase, providing a complete backend for modern applications with real-time capabilities.",
  },
  mongo: {
    img: mongo,
    url: "https://www.mongodb.com/",
    description:
      "MongoDB is a document-based NoSQL database that enables developers to store data in a flexible, JSON-like format.",
  },
  tailwind: {
    img: tailwind,
    url: "https://tailwindcss.com/",
    description:
      "Tailwind CSS is a utility-first framework that makes it easy to create custom designs directly in your HTML or JSX.",
  },
  github: {
    img: github,
    url: "https://github.com/",
    description:
      "GitHub is a platform for hosting and managing code, enabling developers to collaborate, version control, and share projects.",
  },
  git: {
    img: git,
    url: "https://git-scm.com/",
    description:
      "Git is a distributed version control system that tracks changes in code and facilitates collaboration among developers.",
  },
  html: {
    img: html,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    description:
      "HTML defines the structure of web pages, providing the foundation for all web content.",
  },
  css: {
    img: css,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "CSS styles web pages, allowing developers to control the visual presentation and layout of HTML elements.",
  },
  materialui: {
    img: materialui,
    url: "https://mui.com/",
    description:
      "Material-UI is a React component library that implements Google's Material Design system for building user interfaces.",
  },
  docker: {
    img: docker,
    url: "https://www.docker.com/",
    description:
      "Docker simplifies containerization, enabling developers to package and deploy applications with consistent environments.",
  },
  mysql: {
    img: mysql,
    url: "https://www.mysql.com/",
    description:
      "MySQL is a widely adopted open-source relational database known for its reliability and performance.",
  },
  sqlite: {
    img: sqlite,
    url: "https://www.sqlite.org/",
    description:
      "SQLite is a lightweight database engine that works without a server, making it ideal for embedded systems.",
  },
  cpp: {
    img: cpp,
    url: "https://cplusplus.com/",
    description:
      "C++ is a versatile programming language used for system programming, game development, and high-performance applications.",
  },
  socketio: {
    img: socketio,
    url: "https://socket.io/",
    description:
      "Socket.IO enables real-time, bidirectional communication between web clients and servers for dynamic applications.",
  },
  neon: {
    img: neon,
    url: "https://neon.tech/",
    description:
      "Neon offers a serverless PostgreSQL solution with a focus on scalability, performance, and simplicity for modern applications.",
  },
  authjs: {
    img: authjs,
    url: "https://authjs.dev/",
    description:
      "Auth.js helps developers implement user authentication and authorization with customizable strategies.",
  },
  betterauth: {
    img: betterauth,
    url: "https://www.better-auth.com/",
    description:
      "BetterAuth provides advanced authentication features, focusing on security and developer-friendly integrations.",
  },
  groqai: {
    img: groqai,
    url: "https://groq.com/",
    description:
      "GROQ AI simplifies working with large datasets by using AI-driven querying and processing tools.",
  },
  passportjs: {
    img: passportjs,
    url: "https://www.passportjs.org/",
    description:
      "Passport.js simplifies user authentication in Node.js applications with a variety of strategies for different services.",
  },
};

export default toolData;
