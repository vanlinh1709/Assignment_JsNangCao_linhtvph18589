//libary
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from './components/Nav';

//
document.querySelector('#nav').innerHTML = Nav.render();
document.querySelector('#header').innerHTML = Header.render();
document.querySelector('#footer').innerHTML = Footer.render();

