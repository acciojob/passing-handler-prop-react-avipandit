import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  // console.log(config);
  const { background, classname, label, key } = config;
  // console.log(key);
  return (
    <button className={classname}
      id={key}
      onClick={() => selectNextBackground({ background: background })}
      data-testid={config.key}
    >
      {label}
    </button>
  )
}
export default ColourSelector;
