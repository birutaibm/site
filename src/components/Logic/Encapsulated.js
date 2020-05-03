import React, { Fragment } from 'react';

import {returnOrEval as answer} from '../../library/utils'

export default function Encapsulated({ header=null, body, footer=null }) {
  const main = answer(body);

  return (main) ?
    (
      <Fragment>
        {header}
        {main}
        {footer}
      </Fragment>
    ) : null;
}