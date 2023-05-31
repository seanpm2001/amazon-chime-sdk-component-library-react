// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

export const Crown: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props}>
    <path d="M16.116 16h-8.23l-1.674-4.994 1.973 1.607c.355.289.815.388 1.257.274.444-.116.795-.427.965-.853L12 8.019l1.593 4.015c.17.426.521.737.964.853.444.114.903.015 1.257-.274l1.972-1.606L16.116 16zm.39 2h-9.01C7.22 18 7 17.778 7 17.495c0-.273.221-.495.495-.495h9.011c.272 0 .494.222.494.505 0 .273-.222.495-.495.495zM19 8.105c-.552 0-1 .457-1 1.018 0 .184.061.347.145.496-.164.01-.324.07-.458.179l-2.504 2.039c-.106.087-.242.116-.374.082-.13-.035-.237-.127-.287-.254l-1.776-4.477c-.052-.132-.144-.23-.25-.306.295-.176.504-.49.504-.864C13 5.457 12.552 5 12 5s-1 .457-1 1.018c0 .374.21.688.505.864-.108.076-.2.173-.25.305l-1.778 4.478c-.049.127-.155.219-.287.254-.13.034-.266.005-.374-.082L6.312 9.798c-.133-.109-.294-.169-.458-.179.084-.149.146-.312.146-.496 0-.561-.448-1.018-1-1.018s-1 .457-1 1.018c0 .561.448 1.017 1 1.017.02 0 .035-.01.054-.011-.056.151-.066.324-.02.506l1.845 5.502c-.517.236-.879.757-.879 1.368C6 18.329 6.671 19 7.495 19h9.01C17.33 19 18 18.329 18 17.495c0-.603-.362-1.121-.877-1.357l1.853-5.541c.04-.161.028-.322-.028-.468.02.001.033.011.052.011.552 0 1-.456 1-1.017 0-.561-.448-1.018-1-1.018z" />
  </Svg>
);

Crown.displayName = 'Crown';

export default Crown;
