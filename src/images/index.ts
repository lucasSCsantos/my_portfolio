import js from './js.png';
import ts from './ts.png';
import css from './css.jpg';
import html from './html.png';
import next from './next.png';
import node from './node.png';
import express from './express.png';
import react from './react.png';
import redux from './redux.png';
import styledC from './styledC.png';
import mongo from './mongo.png';
import mysql from './mysql.png';
import sequelize from './sequelize.png';
import github from './github.png';
import git from './git.png';
import figma from './figma.png';

export const lenguages = [
  { id: 1, bg: js, name: 'JavaScript', size: 64 },
  { id: 2, bg: ts, name: 'TypeScript', size: 48 },
  { id: 3, bg: css, name: 'CSS', size: 64 },
  { id: 4, bg: html, name: 'HTML', size: 56 }
];

export const frameworks = [
  { id: 1, bg: next, name: 'Next', size: 48 },
  { id: 2, bg: node, name: 'Node', size: 56 },
  { id: 3, bg: express, name: 'Express', size: 56 },
  { id: 4, bg: react, name: 'React', size: 64 },
  { id: 5, bg: redux, name: 'Redux', size: 56 },
  { id: 6, bg: styledC, name: 'Styled-Components', size: 64 }
];

export const databases = [
  { id: 1, bg: mongo, name: 'MongoDB', size: 56 },
  { id: 2, bg: mysql, name: 'MySQL', size: 64 },
  { id: 3, bg: sequelize, name: 'Sequelize', size: 48 }
];

export const others = [
  { id: 1, bg: github, name: 'GitHub', size: 56 },
  { id: 2, bg: git, name: 'Git', size: 48 },
  { id: 3, bg: figma, name: 'Figma', size: 64 }
];
