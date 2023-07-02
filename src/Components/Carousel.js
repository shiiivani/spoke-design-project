import React from 'react'
import './Carousel.css'
const Card = (props) => (
    <div className="card">
      <div className="card-content">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
        <div className="button">
        <button classname="yellow-btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
             />
        ))
      }
    </div>
  );
  
  class Carousel extends React.Component {
    render () {
      const cardsData = [
        {id: 1, title: 'H2O AI CLOUD', content: 'Faced with inefficient operations, risk management challenges, customer churn, research limitations, and fear of stagnation, companies around the world are searching for AI solutions to stay competitive. Powered by world class automated machine learning, the H2O AI Cloud enables organizations to build predictive models and gain insights from their data quickly and easily.'},
        {id: 2, title: 'H2O-3', content: 'H2O is a fully open source, distributed in-memory machine learning platform with linear scalability. H2O supports the most widely used statistical & machine learning algorithms including gradient boosted machines, generalized linear models, deep learning and more. H2O also has an industry leading AutoML functionality that automatically runs through all the algorithms and their hyperparameters to produce a leaderboard of the best models.'},
        {id: 3, title: 'H2O DRIVERLESS AI', content: 'Machine learning is the foundational element of artificial intelligence (AI) and uses algorithms to detect and extract patterns in data to predict certain outcomes based on that analysis. Automated machine learning (autoML) systematically addresses multiple steps of the data science lifecycle with automation designed to reduce complexity across tasks and empower data scientists to implement AI projects with higher accuracy more efficiently.'},
        {id: 4, title: 'H2O FEATURE STORE', content: 'Valuable intelligence is often buried inside large volumes of data, and in today’s modern organizations, data is created and stored across many different technology stacks and business applications. Data permeates all organizational functions, and therefore, requires consistent collaboration between technical teams and their business stakeholders. '},
        {id: 5, title: 'H2O DOCUMENT AI', content: 'Nearly every organization uses forms and documents to capture key business information and manage operational processes. Extracting information from these sources is time intensive and repetitive in nature. Using AI to pull out key pieces of data needed to perform every day business tasks helps users focus on the most important pieces of information needed to prioritize their workflows and deliver quality services efficiently and effectively.'},
        {id: 6, title: 'H20 WAVE', content: 'H2O Wave is an open-source Python development framework that makes it fast and easy for data scientists, machine learning engineers, and software developers to develop real-time interactive AI apps with sophisticated visualizations. H2O Wave accelerates development with a wide variety of user-interface components and charts, including dashboard templates, dialogs, themes, widgets, and many more.'},
        {id: 7, title: 'SPARKLLING WATER', content: 'Sparkling Water allows users to combine the fast, scalable machine learning algorithms of H2O with the capabilities of Spark. Spark is an elegant and powerful general-purpose, open-source, in-memory platform with tremendous momentum. H2O is an in-memory platform for machine learning that is reshaping how people apply math and predictive analytics to their business problems.'},
      ]
      
      return(
        <div className="container">
          <h2 style={{ 'text-align': 'center', 'color': '#FFD600', 'font-size': '2.7rem', 'font-weight': '600', 'margin-bottom': '80px' }}>
            OUR PRODUCTS
          </h2>
          <CardContainer cards={ cardsData } />
        </div>
      );
    }
  }

  export default Carousel
  