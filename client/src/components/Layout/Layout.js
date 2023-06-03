import React, { Fragment } from 'react';

const Layout = (props) => {
    return (
        <Fragment>
            {/* Navigation */}
            <main style={{width:'90vw', margin:'2px auto'}}>
                {props.children}
            </main>
            {/* Footer */}
      </Fragment>
    )
}

export default Layout;