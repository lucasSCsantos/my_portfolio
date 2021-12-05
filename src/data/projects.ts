/* eslint-disable @typescript-eslint/no-unused-vars */
import js from '../images/js.png';
import ts from '../images/ts.png';
import css from '../images/css.jpg';
import html from '../images/html.png';
import next from '../images/next.png';
import node from '../images/node.png';
import express from '../images/express.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import styledC from '../images/styledC.png';
import mongo from '../images/mongo.png';
import mysql from '../images/mysql.png';
import sequelize from '../images/sequelize.png';
import github from '../images/github.png';
import git from '../images/git.png';
import figma from '../images/figma.png';
import ecommerce from '../images/ecommerce.png';
import slido from '../images/slido.png';
import recipesApp from '../images/recipesApp.png';

export default [
  { id: 1, techs: [git, js, html, css], name: 'Projeto 1', image: ecommerce },
  { id: 2, techs: [react, js, git, css], name: 'Projeto 2', image: slido },
  {
    id: 3,
    techs: [react, styledC, git, redux, js],
    name: 'Projeto 3',
    image: ''
  },
  {
    id: 4,
    techs: [css, redux, react, js, git],
    name: 'Projeto 4',
    image: recipesApp
  },
  { id: 5, techs: [js, express, mysql, node], name: 'Projeto 5', image: '' }
];