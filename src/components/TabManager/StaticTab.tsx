import React from 'react';

class StaticTab extends React.Component {
  render() {
    return <div className='flex items-center justify-center h-screen'>{this.props.children}</div>;
  }
}

export default StaticTab;
