import React from 'react';
import { connect } from 'dva';

function ResultPage() {
  return (
    <div>
      <h1>Page1</h1>
    </div>
  );
}

ResultPage.propTypes = {
};

export default connect()(ResultPage);
