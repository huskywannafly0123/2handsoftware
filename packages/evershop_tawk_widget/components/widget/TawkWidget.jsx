import React, { useEffect } from 'react';
import PropTypes from 'prop-types';



export default function TawkWidget({ tawkWidget: { text } }) {

  let src = extractSrcValue(text);

  useEffect(() => {
    if (src) {
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

      let src = extractSrcValue(text);

      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = src;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
      return () => {
        document.body.removeChild(s1);
      };
    }
  }, []);

  return (
    <></>
  );
}

TawkWidget.propTypes = {
  text: PropTypes.string,
};

TawkWidget.defaultProps = {
  text: '',
};

export const query = `
  query Query($settings: JSON) {
    tawkWidget(settings: $settings) {
      text
    }
  }
`;

export const variables = `{
  settings: getWidgetSetting()
}`;


function extractSrcValue(scriptTag) {
  const match = scriptTag.match(/https[^']+/)

  return match ? match[0] : null;
}
