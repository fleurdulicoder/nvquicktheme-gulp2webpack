## Package Upgrade from GULP to WEBPACK

1. Removing Gulp packages from package.json:
  "gulp": "^3.9.1",
  "gulp-autoprefixer": "^4.0.0",
  "gulp-clean": "^0.4.0",
  "gulp-imagemin": "^4.0.0",
  "gulp-jshint": "2.x",
  "gulp-notify": "^3.0.0",
  "gulp-rename": "^1.2.2",
  "gulp-replace": "^0.6.1",
  "gulp-sass": "^3.1.0",
  "gulp-sequence": "^1.0.0",
  "gulp-sourcemaps": "^2.6.4",
  "gulp-uglify": "^3.0.0",
  "gulp-zip": "^4.1.0",
  "jshint": "^2.9.5"

2. GULP Substitution >>
  - images compression and moving from src/images to dist/images (X)
  - creating a bundle from modules in src/js/ as index.js (modular design) (X)
  - moving minified js bundle src/js/index.js into dist/js/main.min.js (X)
  - combine sass files, minify and move into dist/css/main.min.css (in progress)
  - .bscss files (look into this from webpack perspective)
  - add webpack linting for es6 errors (jshint in gulp example)
  - .... (in progress)

![](http://nvquicktheme.nvisionative.com/portals/0/nvQuickTheme_logo.png)](http://nvquicktheme.nvisionative.com)

**nvQuickTheme** is more than just a great minimalist DNN (DotNetNuke) theme.  It is a powerful theme building framework and developer workflow.  This "starter solution" was made with developer efficiency and the ultimate DNN theme performance in mind.  Most DNN themes in the marketplace today are loaded with bloat, which can make theming a pain, and for someone new to DNN, almost impossible.  Our [documentation](https://github.com/nvisionative/nvQuickTheme/wiki) will outline basic usage, modification, and advanced usage of this framework and developer workflow.

Are you tired of spending countless hours trying to squeeze every ounce of performance out of your DNN themes, just so you can rank better on *Google PageSpeed Insights*?  How are your scores?  Have you broken the **80s for Desktop** or the **60s for Mobile**?  You have probably discovered by now that it is very tough to accomplish this on a DNN site.  

Well, the search is over!  Utilizing **nvQuickTheme**, you can rest assured that you are doing everything you possibly can within the context of the theme to achieve stellar scores.  As a matter of fact, the [nvQuickTheme website](http://www.nvquicktheme.com), which of course is running nvQuickTheme, scores **93/100 (Desktop)** and **73/100 (Mobile)**.  Yes, you read that correctly.  If you don't believe us, please feel free to [analyze it yourself](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.nvquicktheme.com%2F&tab=desktop)!

## Background

There have been many ways to develop DNN themes over the years.  Some start from scratch using pure HTML with the [TOKEN] based model provided by DNN.  Others, especially more hardcore developers, start with ASP.NET Web User Controls (instead of pure HTML).  All end up using some shape, form, fashion or flavor of Cascading Style Sheets (CSS) and Javascript (JS).  

Some work with a manual workflow, editing flat files with their favorite code/text editor and wiring everything up "old school".  Others use a fully Integrated Development Environment (IDE), like Visual Studio.  Many even use the famous Christoc Visual Studio Templates for building out themes in a more structured way.  Yet others develop their own unique workflows that best suit their particular use case.

The [nvisionative](http://www.nvisionative.com) team has been working in the DNN ecosystem since its inception and has seen all sorts of approaches for custom and commercial themes alike.  A large majority of these themes are bloated with all sorts of widgets, 3rd party components, bells, whistles, etc.  Given the great depth of experience over the years, our team has identified so many ways to resolve issues in and improve DNN themes.  From **best practices** to HUGE **performance enhancements**, there have been so many lessons learned.  Now it is time give back to this great community that has provided so much to us.


## Wiki Pages
### Table of Contents
* [Home](https://github.com/nvisionative/nvQuickTheme/wiki)
* [Installation](https://github.com/nvisionative/nvQuickTheme/wiki/Installation)
* [Project Setup](https://github.com/nvisionative/nvQuickTheme/wiki/Project-Setup)
* [Commands](https://github.com/nvisionative/nvQuickTheme/wiki/Commands)

### Appendix
* [Dependencies](https://github.com/nvisionative/nvQuickTheme/wiki/Dependencies)
* [Dev Dependencies](https://github.com/nvisionative/nvQuickTheme/wiki/DevDependencies)
* [SCSS](https://github.com/nvisionative/nvQuickTheme/wiki/SCSS)

### How To...
* [Working With the Out-Of-Box Theme](https://github.com/nvisionative/nvQuickTheme/wiki/Working-With-the-Out-Of-Box-Theme)
* Show/Hide LOGIN, USER, SEARCH, LANGUAGE (coming soon)
* Add/Change/Remove Content Panes (coming soon)
* Change Theme Colors (coming soon)
* Change Fonts (coming soon)
* Change Responsive Breakpoints (coming soon)
* Optimize Images (coming soon)
* Troubleshoot node/npm/yarn/gulp issues on Mac (coming soon)

---
[![Brought to the DNN community by nvisionative](http://www.nvquicksite.com/Portals/0/broughtBy-nvisionative.png)](http://www.nvisionative.com)
