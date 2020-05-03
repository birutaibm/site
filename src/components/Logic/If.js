import React, { Fragment } from 'react';

import {returnOrEval as answer} from '../../library/utils'

export default function If({ Condition=false, Else=null, children }) {
  if (answer(Condition)) {
    return (
      <Fragment>
        {React.Children.map(children, child => answer(child))}
      </Fragment>
    );
  } else {
    return answer(Else);
  }
}
/* function If({ Condition=false, Then=null, Else=null }) {
  return answer(Condition) ? answer(Then) : answer(Else);
} */