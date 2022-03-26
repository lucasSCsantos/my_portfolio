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
import reactNative from '../images/reactNative.png';
import styledC from '../images/styledC.png';
import mongo from '../images/mongo.png';
import mysql from '../images/mysql.png';
import sequelize from '../images/sequelize.png';
import github from '../images/github.png';
import git from '../images/git.png';
import figma from '../images/figma.png';
import ecommerce from '../images/ecommerce.png';
import apiSoccer from '../images/apiSoccer.png';
import portfolio from '../images/portfolio.png';
import slido from '../images/slido.png';
import recipesApp from '../images/recipesApp.png';
import thisPortfolio from '../images/thisPortfolio.png';
import eatFlavor from '../images/eatFlavor.png';
import mocha from '../images/mocha.png';
import pokedex from '../images/pokedex.jpg';
import supabase from '../images/supabase.png';
import torcida from '../images/torcida.png';

export default [
  {
    id: 1,
    techs: [git, next, supabase, css, js],
    name: 'Torcida Imperial',
    image: torcida,
    link: 'https://www.torcidaimperial.com/',
    description:
      'Um centro para a torcida da equipe Imperial foi criado por mim junto a uma equipe de outros desenvolvedores e torcedores'
  },
  {
    id: 2,
    techs: [react, js, git, css],
    name: 'Clone Slido',
    image: slido,
    link: 'https://slido-clone.herokuapp.com/',
    description:
      'Este projeto foi feito para a prática de css e animações com funcionalidades simples, simulando a plataforma slido'
  },
  {
    id: 3,
    techs: [react, styledC, git, redux, js],
    name: 'Loja Online Frontend',
    image: ecommerce,
    link: 'https://frontend-web-store.netlify.app/',
    description:
      'Loja online front-end feita para praticar diferentes tecnologias, junto da lógica para as funcionalidades básicas de um e-commerce'
  },
  {
    id: 4,
    techs: [css, redux, react, js, git],
    name: 'App de receitas',
    image: recipesApp,
    link: 'https://appalmirinha.herokuapp.com/',
    description:
      'Projeto feito em equipe para encerrar os estudos de react do curso da Trybe e também metodologias de trabalho em grupo.'
  },
  {
    id: 5,
    techs: [reactNative, ts, styledC, redux],
    name: 'Pokedex',
    image: pokedex,
    link: 'https://github.com/lucasSCsantos/pokedexApp',
    description:
      'Um pequeno app de Pokedex para iniciar o estudo de desenvolvimento mobile'
  },
  {
    id: 6,
    techs: [ts, react, node, mongo, mocha],
    name: 'Eat Flavor',
    image: eatFlavor,
    link: 'https://eatflavor-fd.herokuapp.com/',
    description:
      'Sistema de delivery full-stack com prática de TDD, para desenvolver um projeto desde o banco de dados até a interface do usuario'
  }
];
