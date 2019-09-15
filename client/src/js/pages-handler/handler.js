import './app.js'
import Model from './model';
import View from './view';
import Controller from './controller';

const view = new View();
const model = new Model();

new Controller(model, view);
