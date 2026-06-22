import React, { Component, useEffect } from "react";
import { Route, Switch, BrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Publications from "../pages/publications/Publications";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

// Reset scroll to the top on every route change (instant, ignoring the global
// smooth scroll-behavior so navigation doesn't slow-scroll from the footer).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prev;
  }, [pathname]);
  return null;
}

export default class Main extends Component {
  render() {
    // Common props handed to every page: the active theme + the dark/light toggle.
    const shared = {
      theme: this.props.theme,
      isDark: this.props.isDark,
      toggleTheme: this.props.toggleTheme,
    };
    return (
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} {...shared} />
              ) : (
                <Home {...props} {...shared} />
              )
            }
          />
          <Route path="/home" render={(props) => <Home {...props} {...shared} />} />
          <Route
            path="/experience"
            exact
            render={(props) => <Experience {...props} {...shared} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} {...shared} />}
          />
          {settings.showOpenSource && (
            <Route
              path="/opensource"
              render={(props) => <Opensource {...props} {...shared} />}
            />
          )}
          <Route
            path="/contact"
            render={(props) => <Contact {...props} {...shared} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} {...shared} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} {...shared} />}
          />
          <Route
            path="/publications"
            render={(props) => <Publications {...props} {...shared} />}
          />
          <Route path="*" render={(props) => <Error404 {...props} {...shared} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
