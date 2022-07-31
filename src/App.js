import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import { DataProvider } from './components/Context'
import { routerReducer } from 'react-router-redux'





class App extends React.Component {
  render() {


    return (

      <DataProvider>


        <div className="app">

          <BrowserRouter>
            <Header />
            <Section></Section>
          </BrowserRouter >





        </div>


      </DataProvider >


    );
  }
}

export default App;