# 🚀 Vercel Deployment Guide for Igniting.ye

## **Prerequisites**
- GitHub account
- Vercel account (free tier available)
- Your project pushed to GitHub

## **Step 1: Prepare Your Repository**

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add Discord section and prepare for Vercel deployment"
   git push origin main
   ```

## **Step 2: Deploy to Vercel**

### **Option A: Deploy via Vercel Dashboard (Recommended)**

1. **Go to [vercel.com](https://vercel.com) and sign up/login**
2. **Click "New Project"**
3. **Import your GitHub repository:**
   - Select your `Igniting.ye` repository
   - Vercel will auto-detect it's a Next.js project
4. **Configure deployment settings:**
   - **Framework Preset**: Next.js
   - **Root Directory**: `ignite-productions` (if your Next.js app is in a subfolder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`
5. **Add Environment Variables (if needed):**
   - `NEXT_PUBLIC_SITE_URL`: Your Vercel domain
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase key
6. **Click "Deploy"**

### **Option B: Deploy via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   cd ignite-productions
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Set up environment variables
   - Deploy

## **Step 3: Configure Discord Integration**

1. **Create a Discord Server** (if you don't have one)
2. **Get your Discord invite link:**
   - Go to your Discord server
   - Right-click on a channel → "Invite People"
   - Create an invite link
   - Copy the invite URL

3. **Update the Discord section:**
   - Replace `https://discord.gg/your-invite-link` in `discord-section.tsx`
   - Update member count and channel count to match your server

## **Step 4: Custom Domain (Optional)**

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

## **Step 5: Environment Variables**

If you need environment variables, add them in Vercel:

1. **Go to Project Settings → Environment Variables**
2. **Add variables:**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-vercel-app.vercel.app
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
   ```

## **🎉 You're Live!**

Your site will be available at:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

## **Benefits of Vercel:**

✅ **Automatic deployments** from GitHub pushes  
✅ **Global CDN** for fast loading worldwide  
✅ **Free SSL certificates**  
✅ **Preview deployments** for pull requests  
✅ **Analytics** and performance monitoring  
✅ **Zero configuration** for Next.js  

## **Troubleshooting:**

- **Build fails**: Check your `package.json` scripts
- **Environment variables**: Make sure they're set in Vercel dashboard
- **Discord widget not working**: Verify your invite link is correct
- **Images not loading**: Check that `unoptimized: true` is set in `next.config.ts`

## **Next Steps:**

1. Set up your Discord server
2. Update the invite link in the Discord section
3. Configure your custom domain
4. Set up analytics (optional)
5. Enable automatic deployments from GitHub

Your Igniting.ye site is now ready for the world! 🌟
