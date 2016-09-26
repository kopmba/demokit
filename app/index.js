import angular from 'angular';
import Common from './common/';
import Components from './components/';
import Config from './config/';
import Utils from './utils/';
import AppRun from './app';
import 'angular-animate';
import 'angular-sanitize';
import './ionic';
import './ionic-angular';

angular.module('app', [
  'ionic',
  Common,
  Config,
  Components,
  Utils
])
.run(AppRun);
