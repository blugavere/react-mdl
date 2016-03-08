import React from 'react';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

import {
    Layout, Header, Content, Navigation,
    Icon, Grid, Cell
} from 'react-mdl';

// Import styles.
import '../../extra/material.css';
import '../../extra/material.js';

const Template = (props) => (
    <Layout fixedHeader style={{ zIndex: 100001 }}>
        <Header title={<Link to={link('/')} style={{ color: '#fff', textDecoration: 'none' }}>React-MDL</Link>}>
            <Navigation>
                <Link to={link('/components/')}>Components</Link>
                <a href="https://github.com/tleunen/react-mdl">
                    <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    GitHub
                </a>
            </Navigation>
        </Header>
        <Content className="mdl-color-text--grey-600">
            <Grid>
                <Cell col={12}>
                    {props.children}
                </Cell>
            </Grid>
        </Content>
    </Layout>
);

export default Template;
