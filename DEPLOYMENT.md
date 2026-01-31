# Quick Deployment Guide

## 🚀 Deploy Your Portfolio in 5 Minutes

### Method 1: Netlify (Easiest - Recommended for Beginners)

1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up** for free (can use GitHub account)
3. **Drag and drop** the entire `portfolio-website` folder onto Netlify
4. **Done!** Your site is live with a free URL like `your-site-name.netlify.app`
5. **Optional:** Add a custom domain in site settings

### Method 2: GitHub Pages (Free, Great for Developers)

1. **Create GitHub account** at [github.com](https://github.com)
2. **Create new repository** (name it whatever you like)
3. **Upload all files** from `portfolio-website` folder
4. **Go to:** Repository Settings → Pages
5. **Select:** Deploy from main branch, / (root) folder
6. **Wait 2-3 minutes** - site will be live at `https://yourusername.github.io/repository-name`

### Method 3: Vercel (Fast, Developer-Friendly)

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign up** for free
3. **Click** "Add New Project"
4. **Import** from GitHub or drag/drop files
5. **Deploy** - site goes live instantly
6. **Get** free URL like `your-site.vercel.app`

### Method 4: Traditional Web Hosting

If you already have web hosting (GoDaddy, Bluehost, etc.):

1. **Connect via FTP** using FileZilla or similar
2. **Upload** all files to `public_html` or `www` folder
3. **Maintain folder structure** (css/, js/, images/ folders)
4. **Access** via your domain name

## ✅ Pre-Deployment Checklist

- [ ] Update email address in `index.html` (search for atharvabhusari2@gmail.com)
- [ ] Update LinkedIn URL if needed
- [ ] Add your profile photo to `images/` folder (optional)
- [ ] Test locally by opening `index.html` in browser
- [ ] Verify all links work
- [ ] Check on mobile (resize browser window)

## 🎨 After Deployment

### Update Content
1. Edit `index.html` for text changes
2. Edit `css/style.css` for design changes
3. Re-upload or commit changes (depending on platform)

### Monitor Performance
- Netlify/Vercel provide analytics dashboards
- GitHub Pages shows traffic in Insights tab

### Custom Domain (Optional)
All platforms support custom domains:
- Buy domain from Namecheap, GoDaddy, etc.
- Add DNS records as instructed by your platform
- Usually takes 24-48 hours to propagate

## 🆘 Troubleshooting

**CSS not loading?**
- Check file paths are correct (css/style.css)
- Clear browser cache (Ctrl+Shift+R)

**Contact form not working?**
- Ensure default email client is set up
- Consider using a form service like Formspree for better functionality

**Site not updating?**
- Clear cache and hard refresh
- Wait 2-3 minutes for CDN to update
- Check you uploaded to correct folder

## 📞 Need Help?

If you encounter issues:
1. Check the README.md for detailed documentation
2. Verify folder structure matches the template
3. Test locally first before deploying
4. Contact hosting support for platform-specific issues

---

**Good luck with your deployment! 🎉**
