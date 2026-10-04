# Mihiduni Abeyratne – Portfolio

My personal portfolio website, built with Next.js and Tailwind CSS.

## Run it on your computer

You need Node.js 20.9 or newer. Check with `node -v`.

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Change the content

All the text, links and projects are in **`data/portfolio.js`**. Edit that file and the page updates. You don't need to touch the components.

### Add your CV

1. Make a copy of your CV **without the References section**. The file will be public, so don't publish your referee's phone number.
2. Name it `Mihiduni_Abeyratne_CV.pdf` and put it in the `public` folder.

The "Download CV" buttons will then work. To hide the buttons instead, set `cv: null` in `data/portfolio.js`.

### Add project screenshots

1. Put the image in `public/projects/`, for example `public/projects/food-delivery.png`.
2. In `data/portfolio.js`, set that project's image: `image: "/projects/food-delivery.png"`.

Wide screenshots (about 1200 × 750) look best.

## Put it online with Vercel (free)

1. Create a new repository on GitHub called `portfolio`.
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Portfolio website"
   git branch -M main
   git remote add origin https://github.com/mihiduni12/portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, choose `portfolio` and click **Deploy**.
4. In the project's **Settings → Domains**, you can change the address to something like `mihiduni-abeyratne.vercel.app`.

Every time you push changes to GitHub, Vercel updates the site automatically.

## Project structure

```
app/
  layout.js        Page title, fonts and global styles
  page.js          Puts the sections together
  globals.css      Colours (light and dark mode)
  icon.svg         Browser tab icon
components/        One file per section (Hero, Projects, Experience...)
data/portfolio.js  All the content
public/            Photo, CV and screenshots
```
