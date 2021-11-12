import Head from "next/head";
import cx from "classnames";
import {Logo, MenuIcon} from "./custom_icons";
import {useRouter} from "next/router";

function Header() {
  return (
    <header className="h-[60px] text-white bg-primary flex justify-between items-center">
      <div className="sm:container ml-4 my-4 md:mx-auto">
        <Logo />
      </div>
      <button className="sm:hidden mr-4">
        <MenuIcon className="text-white" />
      </button>
    </header>
  );
}

function Footer({hidden}) {
  if (hidden) {
    return null;
  }
  return (
    <footer className="fixed bottom-0 w-full bg-secondary font-thin tracking-widest h-16 flex justify-center items-center shadow-custom opacity-100">
      Moorup
    </footer>
  );
}

export function Layout(props) {
  const {
    query: {t: tenant = ""},
  } = useRouter();

  function setTitle() {
    return (
      props.title && (
        <Head>
          <title>{props.title}</title>
        </Head>
      )
    );
  }

  // added tenant class at the top of application tree, to scope css custom properties for theming
  return (
    <div className={cx("min-h-screen", "flex", "flex-col", {[tenant]: Boolean(tenant)})}>
      {setTitle()}
      <Header />
      <div className="bg-white sm:bg-brand-gradient bg-transparent bg-no-repeat bg-origin-padding bg-left-top flex-grow bg-blend-darken">
        <div className="container mx-auto">{props.children}</div>
      </div>
      <Footer hidden={props.hideFooter} />
    </div>
  );
}
