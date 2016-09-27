import angular from 'angular';
import Layout from './layout/layout.route';
import ErrorPage from './error/error.route';
import Header from './header/header.route';
import About from './about/about.route';
import Home from './home/home.route';
import Contact from './contact/contact.route';
import Artist from './artist/artist.route';

const Components = angular.module('app.components', [
  Artist,
  Contact,
  Layout,
  Header,
  ErrorPage,
  Home,
  About
]);

export default Components.name;
