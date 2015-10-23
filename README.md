Manitou framework
===========

## Assets

- **Bootstrap 4**
- **SASS**
- **Font Awesome**
- **Respond.JS**
- **html5shiv**
- **Grunt**
- **Bower**
- **Jekyll**

Some components are also based on angular.js

## Getting Started

This project requires [Jekyll](http://jekyllrb.com/), [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/). As dependencies this project also need [Ruby](https://www.ruby-lang.org) for Jekyll and [NodeJS](http://nodejs.org/) and [npm](https://www.npmjs.com) for Grunt and Bower.

### Ruby
Install RVM : https://rvm.io
Solve a lots of issues when multiple ruby versions have been installed.

```
$ \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

### Jekyll
Install Jekyll : http://jekyllrb.com/

```
$ gem install jekyll
```

### Test Jekyll (optional)

To test if everything is ok, you can serve the website.
(watch files update by default except _config.yml)

```
$ jekyll serve
```

### Install dependencies

From the project's directory execute :

```
$ npm -g install grunt-cli bower
$ npm install
$ bower install
```

Run project with Grunt.

```
$ grunt
```

### Stats

To have statistics on the project, run the following command :

```
$ grunt stats
```

CSS-count gives you data on the code (IE9 is limited to 4095 selectors) and PageSpeed offers data on the project performance according to [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).


## Critical CSS

The framework uses the grunt contrib for [criticalcss](https://github.com/filamentgroup/grunt-criticalcss). When you launch grunt, it generates critical css files in _includes/critical/.. that is inlined in the head of each html view.

