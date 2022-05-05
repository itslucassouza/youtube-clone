import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import theme from "../../../lib/theme";
import Header from "../Header/Header";

export type LayoutProps = {
    children: React.ReactNode
    title?: string
}

const useStyles  = makeStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
      },
      wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
          paddingLeft: 256,
        },
      },
      contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
      },
      content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
      },
})

function Layout({children, title}: LayoutProps) {
    const classes = useStyles()
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewpoer" content="initial-scale-1.0, width-device-width" />
        </Head>
        <div className={classes.root}>
            <Header>
            <div>navbar</div>
            <div>{children}</div>
            </Header>
        </div>
        </>
    )
}

export default Layout;