[![Netlify Status](https://api.netlify.com/api/v1/badges/259e2f4e-464a-437a-85ee-36ee6e3d344f/deploy-status)](https://app.netlify.com/sites/ajarjis/deploys)

# Portfolio
My personal portfolio website where I highlight all my projects and skills.

## Live Demo
https://www.ajarjis.com

## Local Development
### Required Tools
- [Jekyll](https://jekyllrb.com/)

### Running Site Locally
```bash
$> bundle exec jekyll serve
```
The site will be available at: http://127.0.0.1:4000/

### Running CMS Locally
This site uses a CMS to obtain its contents. To run a CMS ([Netlify](https://www.netlifycms.org/)) locally run the following in a seperate terminal:
```bash
$> npx netlify-cms-proxy-server
```

Then while the site is running, visit:
http://127.0.0.1:4000/admin

Here you can add, edit or delete the site's content.


