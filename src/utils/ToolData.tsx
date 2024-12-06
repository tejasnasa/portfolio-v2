import ToolWrapper from "../components/ToolWrapper";
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
import groqai from "../assets/tools/groqai.webp";

const toolData = {
  bootstrap: {
    img: bootstrap,
    url: "https://getbootstrap.com/",
  },
  nodejs: {
    img: nodejs,
    url: "https://nodejs.org/en",
  },
  express: {
    img: express,
    url: "https://expressjs.com/",
  },
  postgres: {
    img: postgres,
    url: "https://www.postgresql.org/",
  },
  prisma: {
    img: prisma,
    url: "https://www.prisma.io/",
  },
  drizzle: {
    img: drizzle,
    url: "https://orm.drizzle.team",
  },
  react: {
    img: react,
    url: "https://react.dev/",
  },
  nextjs: {
    img: nextjs,
    url: "https://nextjs.org/",
  },
  redux: {
    img: redux,
    url: "https://redux.js.org/",
  },
  ts: {
    img: ts,
    url: "https://www.typescriptlang.org/",
  },
  js: {
    img: js,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  vercel: {
    img: vercel,
    url: "https://vercel.com",
  },
  vscode: {
    img: vscode,
    url: "https://code.visualstudio.com/",
  },
  webstorm: {
    img: webstorm,
    url: "https://www.jetbrains.com/webstorm/",
  },
  vite: {
    img: vite,
    url: "https://vite.dev/",
  },
  postman: {
    img: postman,
    url: "https://www.postman.com/",
  },
  firebase: {
    img: firebase,
    url: "https://firebase.google.com/",
  },
  supabase: {
    img: supabase,
    url: "https://supabase.com/",
  },
  mongo: {
    img: mongo,
    url: "https://www.mongodb.com/",
  },
  tailwind: {
    img: tailwind,
    url: "https://tailwindcss.com/",
  },
  github: {
    img: github,
    url: "https://github.com/",
  },
  git: {
    img: git,
    url: "https://git-scm.com/",
  },
  html: {
    img: html,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  css: {
    img: css,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  materialui: {
    img: materialui,
    url: "https://mui.com/",
  },
  docker: {
    img: docker,
    url: "https://www.docker.com/",
  },
  mysql: {
    img: mysql,
    url: "https://www.mysql.com/",
  },
  sqlite: {
    img: sqlite,
    url: "https://www.sqlite.org/",
  },
  cpp: {
    img: cpp,
    url: "https://cplusplus.com/",
  },
  socketio: {
    img: socketio,
    url: "https://socket.io/",
  },
  neon: {
    img: neon,
    url: "https://neon.tech/",
  },
  authjs: {
    img: authjs,
    url: "https://authjs.dev/",
  },
  betterauth: {
    img: betterauth,
    url: "https://www.better-auth.com/",
  },
};

const createTools = (page: string) => {
  return Object.fromEntries(
    Object.entries(toolData).map(([key, { img, url }]) => [
      key,
      <ToolWrapper key={key} page={page} img={img} url={url} />,
    ])
  );
};

const tools = {
  projects: createTools("projects"),
  tools: createTools("tools"),
};

export const projectTools = tools.projects;
export const toolTools = tools.tools;
