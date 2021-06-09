import React from 'react';

class StaticTab extends React.Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-base'>This is a static tab</p>
        {this.props.children}
      </div>
    );
  }
}

export default StaticTab;
