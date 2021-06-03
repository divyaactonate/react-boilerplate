import React from 'react';

interface PropTypes {
  url: string;
}

/**
 *
 * Modal
 *
 */
class Tab extends React.Component<PropTypes> {
  render() {
    return (
      <div className='flex items-center justify-center w-screen h-screen'>
        <iframe src={this.props.url} height='100%' width='100%' title={this.props.url} />
      </div>
    );
  }
}

export default Tab;
