import { Component } from "react";
import mainImages from "./images/illustration-dashboard.png";
import "./App.css";

class App extends Component {
  state = {  } 

  _isValidEmail(params){
    let form = params.target.parentNode;
    let input = document.getElementById('email-input');
    let regex = RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,3}/)
    if(input.value.match(regex)){
      if(form.classList.contains('error')){
        form.classList.remove('error');
      }
      else if(form.classList.contains('error-empty')){
        form.classList.remove('error-empty');
      } 
      form.submit();
    }else if(input.value === ""){
      form.classList.add('error-empty');
    }else{
      if(form.classList.contains('error-empty')){
        form.classList.remove('error-empty');
      } 
      form.classList.add('error');
    }
  }

  render() { 
    return (
      <div className="App">
        <div id="header">
          <svg xmlns="http://www.w3.org/2000/svg" width="86" height="26"><g fill="none"><path fill="#15202A" d="M5.008 25c.555 0 .832-.245.832-.736v-8c0-.235.117-.352.352-.352h4.8c2.603 0 4.699-.635 6.288-1.904 1.59-1.27 2.384-3.056 2.384-5.36 0-1.621-.41-2.987-1.232-4.096-.821-1.11-1.93-1.936-3.328-2.48-1.397-.544-2.981-.816-4.752-.816h-9.6c-.341 0-.512.203-.512.608V24.36c0 .213.048.373.144.48.096.107.272.16.528.16h4.096zm5.216-13.088H6.288c-.17 0-.288-.048-.352-.144-.064-.096-.096-.25-.096-.464V5.832c0-.213.048-.363.144-.448.096-.085.25-.128.464-.128H10c1.195 0 2.144.277 2.848.832.704.555 1.056 1.376 1.056 2.464 0 1.045-.33 1.867-.992 2.464-.661.597-1.557.896-2.688.896zM27.856 25c.32 0 .544-.059.672-.176.128-.117.192-.315.192-.592v-22.4c0-.384-.17-.576-.512-.576h-4.576c-.341 0-.512.203-.512.608v22.464c0 .235.053.405.16.512.107.107.288.16.544.16h4.032zm9.312 0c.235 0 .4-.037.496-.112.096-.075.144-.197.144-.368V10.344c0-.107.037-.17.112-.192.075-.021.155.021.24.128l10.208 14.336c.128.17.245.277.352.32.107.043.256.064.448.064H52.4a.66.66 0 00.432-.144.455.455 0 00.176-.368V1.736c0-.32-.139-.48-.416-.48H49.04c-.384 0-.576.192-.576.576v13.216c0 .235-.053.352-.16.352-.085 0-.192-.085-.32-.256L38.576 1.736c-.15-.213-.277-.347-.384-.4-.107-.053-.288-.08-.544-.08h-3.872c-.384 0-.576.203-.576.608v22.592c0 .363.213.544.64.544h3.328zm30.176.32c1.664 0 3.013-.288 4.048-.864a9.158 9.158 0 002.672-2.24c.15-.17.256-.181.32-.032l.928 2.304c.192.341.47.512.832.512h1.024c.15 0 .267-.043.352-.128a.476.476 0 00.128-.352V13.736a.703.703 0 00-.24-.56c-.16-.139-.39-.208-.688-.208l-8.544-.032c-.341 0-.512.15-.512.448v2.4c0 .192.043.33.128.416.085.085.213.128.384.128h3.872c.235 0 .352.096.352.288 0 .085-.01.15-.032.192l-.064.928c-.235 1.045-.736 1.915-1.504 2.608-.768.693-1.792 1.04-3.072 1.04-1.685 0-2.976-.65-3.872-1.952-.896-1.301-1.344-3.435-1.344-6.4 0-2.837.427-4.907 1.28-6.208.853-1.301 2.101-1.952 3.744-1.952 1.259 0 2.283.363 3.072 1.088.79.725 1.29 1.643 1.504 2.752.043.192.096.325.16.4.064.075.181.112.352.112l4.224-.64c.277-.021.416-.15.416-.384 0-.192-.021-.352-.064-.48-.213-1.173-.752-2.277-1.616-3.312-.864-1.035-1.984-1.872-3.36-2.512-1.376-.64-2.896-.96-4.56-.96-2.176 0-4.096.501-5.76 1.504-1.664 1.003-2.955 2.432-3.872 4.288-.917 1.856-1.376 4.021-1.376 6.496 0 2.41.437 4.528 1.312 6.352.875 1.824 2.117 3.237 3.728 4.24 1.61 1.003 3.493 1.504 5.648 1.504z"/><path fill="#4C7BF3" d="M85.072 25c.32 0 .55-.059.688-.176.139-.117.208-.315.208-.592v-4c0-.363-.16-.544-.48-.544h-4.384a.498.498 0 00-.368.144c-.096.096-.144.24-.144.432v4.064c0 .448.235.672.704.672h3.776z"/></g></svg>
          <h1>We are launching <span>soon!</span></h1>
          <p>Subscribe and get notified</p>
          <form>
            <input id="email-input" type="email" placeholder="Your email address..."/>
            <p>Whoops! It looks like you forgot to add your email</p>
            <button type="button" onClick={this._isValidEmail}>Notify Me</button>
          </form>
        </div>
        <div id="main-image">
          <img src={mainImages} alt="dashboard" />
        </div>
        <div id="footer">
          <div id="icon">
            <div className="icon-box">
              <svg fill="hsl(223, 87%, 63%)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="15px" height="15px"><path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg>
            </div>
            <div className="icon-box">
              <svg fill="hsl(223, 87%, 63%)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="15px" height="15px"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </div>
            <div className="icon-box">
              <svg fill="hsl(223, 87%, 63%)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="15px" height="15px"><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"/></svg>
            </div>
          </div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
 
export default App;