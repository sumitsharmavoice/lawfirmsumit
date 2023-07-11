import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // borderWidth:12,
    // zIndex: 12,
    // borderBlockColor:'red',

    backgroundColor: alpha(theme.palette.info.light, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.info.dark, 0.50),
    },
    '&:focus': {
        backgroundColor: alpha(theme.palette.success.main, 0.50),
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f0f0f'
}));


export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '0.001ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));

