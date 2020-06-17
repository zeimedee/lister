import { createMuiTheme } from '@material-ui/core';

import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary: blue,
        secondary: red,
    },
    status:{
        danger: 'orange'
    }
});

export default theme;