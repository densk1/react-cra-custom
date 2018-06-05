import React from 'react';
// import PropTypes from 'prop-types';

const string = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
function Card(/* { title, subtitle, bodyText } */) {
  return (
    <div className="card">
      <img className="card-img-top" src="/img/cardBG.svg" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{string}</p>
        <a href="/here" className="btn btn-gold w-100 text-center">Go somewhere</a>
      </div>
    </div>
  );
}
/*
Card.displayName = 'Card';
Card.defaultProps = {
  item: '',
};
Card.propTypes = {
  item: PropTypes.string,
};
*/
export default Card;
