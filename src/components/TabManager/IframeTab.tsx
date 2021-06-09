import React from 'react';

interface PropTypes {
  url?: string;
}

class IframeTab extends React.Component<PropTypes> {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <iframe src={'https://bihub.com/'} height='100%' width='100%' title={this.props.url} />
      </div>
    );
  }
}

export default IframeTab;
